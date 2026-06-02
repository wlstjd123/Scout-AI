const riotService = require("../services/riotService");
const analyzer = require("../utils/analyzer");
const duoMatcher = require("../utils/duoMatcher");
const cache = require("../utils/cache");

exports.getAccount = async (req, res) => {
  const { name, tag } = req.params;

  try {
    const data = await riotService.getAccount(name, tag);
    res.json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: "Account API 실패",
      riotError: error.response?.data || error.message,
    });
  }
};

exports.getMatches = async (req, res) => {
  const { puuid } = req.params;

  try {
    const data = await riotService.getMatches(puuid);
    res.json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: "Match list 실패",
      riotError: error.response?.data || error.message,
    });
  }
};

exports.getMatchDetail = async (req, res) => {
  const { matchId } = req.params;

  try {
    const data = await riotService.getMatchDetail(matchId);
    res.json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: "Match detail 실패",
      riotError: error.response?.data || error.message,
    });
  }
};

exports.analyzeSummoner = async (req, res) => {
  const { name, tag } = req.params;

  const cacheKey = `analyze:${name}:${tag}`;
  const cachedData = cache.getCache(cacheKey);

  if (cachedData) {
    console.log("캐시 데이터 사용:", cacheKey);
    return res.json(cachedData);
  }

  try {
    const account = await riotService.getAccount(name, tag);
    const puuid = account.puuid;

    const summonerInfo = await riotService.getSummoner(puuid);

    let rankedData = null;
    let tierStatus = "UNAVAILABLE";

    try {
      const leagueInfo = await riotService.getLeagueByPuuid(puuid);

      rankedData = leagueInfo.find(
        (queue) => queue.queueType === "RANKED_SOLO_5x5",
      );

      tierStatus = rankedData ? "FOUND" : "UNRANKED";
    } catch (leagueError) {
      console.log(
        "League API by PUUID 조회 실패:",
        leagueError.response?.data || leagueError.message,
      );

      tierStatus = "FAILED";
    }

    const matchIds = await riotService.getMatches(puuid);
    const matches = [];

    for (const matchId of matchIds) {
      const detail = await riotService.getMatchDetail(matchId);
      matches.push(detail);
    }

    let totalKills = 0;
    let totalDeaths = 0;
    let totalAssists = 0;
    let totalCS = 0;
    let wins = 0;

    const laneCount = {
      TOP: 0,
      JUNGLE: 0,
      MIDDLE: 0,
      BOTTOM: 0,
      UTILITY: 0,
    };

    const recentMatches = [];

    for (const match of matches) {
      const player = match.info.participants.find((p) => p.puuid === puuid);

      if (!player) continue;

      totalKills += player.kills;
      totalDeaths += player.deaths;
      totalAssists += player.assists;
      totalCS += player.totalMinionsKilled + player.neutralMinionsKilled;

      if (player.win) {
        wins++;
      }

      if (laneCount[player.teamPosition] !== undefined) {
        laneCount[player.teamPosition]++;
      }

      recentMatches.push({
        matchId: match.metadata.matchId,
        champion: player.championName,
        championId: player.championId,
        kills: player.kills,
        deaths: player.deaths,
        assists: player.assists,
        kda: analyzer.calculateKDA(player.kills, player.deaths, player.assists),
        cs: player.totalMinionsKilled + player.neutralMinionsKilled,
        position: player.teamPosition,
        win: player.win,
        gameMode: match.info.gameMode,
        gameDuration: match.info.gameDuration,
      });
    }

    const totalGamesForCalc = recentMatches.length || 1;

    const avgKills = (totalKills / totalGamesForCalc).toFixed(1);
    const avgDeaths = (totalDeaths / totalGamesForCalc).toFixed(1);
    const avgAssists = (totalAssists / totalGamesForCalc).toFixed(1);
    const avgCS = (totalCS / totalGamesForCalc).toFixed(1);

    const kda = analyzer.calculateKDA(totalKills, totalDeaths, totalAssists);

    const winRate = analyzer.calculateWinRate(wins, totalGamesForCalc);
    const mainLane = analyzer.getMainLane(laneCount);

    const playStyle = analyzer.getPlayStyle(
      parseFloat(avgKills),
      parseFloat(avgDeaths),
      parseFloat(avgAssists),
    );

    const duo = duoMatcher.findBestDuo({
      mainLane,
      playStyle,
    });

    const result = {
      summoner: `${account.gameName}#${account.tagLine}`,
      puuid,

      profileIconId: summonerInfo.profileIconId,
      summonerLevel: summonerInfo.summonerLevel,

      tier: rankedData?.tier || "UNRANKED",
      rank: rankedData?.rank || "",
      lp: rankedData?.leaguePoints || 0,
      wins: rankedData?.wins || 0,
      losses: rankedData?.losses || 0,
      tierStatus,

      totalGames: recentMatches.length,
      avgKills,
      avgDeaths,
      avgAssists,
      avgCS,
      kda,
      winRate,
      mainLane,
      playStyle,

      duo,
      recentMatches,
    };

    cache.setCache(cacheKey, result);

    res.json(result);
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(error.response?.status || 500).json({
      error: "분석 실패",
      riotError: error.response?.data || error.message,
    });
  }
};

exports.duoRecommend = async (req, res) => {
  const { name, tag } = req.params;

  const cacheKey = `duo:${name}:${tag}`;
  const cachedData = cache.getCache(cacheKey);

  if (cachedData) {
    console.log("캐시 데이터 사용:", cacheKey);
    return res.json(cachedData);
  }

  try {
    const account = await riotService.getAccount(name, tag);
    const puuid = account.puuid;

    const matchIds = await riotService.getMatches(puuid);

    let totalKills = 0;
    let totalDeaths = 0;
    let totalAssists = 0;
    let analyzedGames = 0;

    const laneCount = {
      TOP: 0,
      JUNGLE: 0,
      MIDDLE: 0,
      BOTTOM: 0,
      UTILITY: 0,
    };

    for (const matchId of matchIds) {
      const match = await riotService.getMatchDetail(matchId);

      const player = match.info.participants.find((p) => p.puuid === puuid);

      if (!player) continue;

      analyzedGames++;

      totalKills += player.kills;
      totalDeaths += player.deaths;
      totalAssists += player.assists;

      if (laneCount[player.teamPosition] !== undefined) {
        laneCount[player.teamPosition]++;
      }
    }

    const gameCount = analyzedGames || 1;

    const mainLane = analyzer.getMainLane(laneCount);

    const playStyle = analyzer.getPlayStyle(
      totalKills / gameCount,
      totalDeaths / gameCount,
      totalAssists / gameCount,
    );

    const duo = duoMatcher.findBestDuo({
      mainLane,
      playStyle,
    });

    const result = {
      summoner: `${account.gameName}#${account.tagLine}`,
      myLane: mainLane,
      myStyle: playStyle,
      recommendedLane: duo.recommendedLane,
      recommendedStyle: duo.recommendedStyle,
    };

    cache.setCache(cacheKey, result);

    res.json(result);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      error: "듀오 추천 실패",
      riotError: error.response?.data || error.message,
    });
  }
};
