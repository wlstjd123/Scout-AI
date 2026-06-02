const axios = require("axios");

const API_KEY = process.env.RIOT_API_KEY;

const ACCOUNT_URL =
    "https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id";

const SUMMONER_URL =
    "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid";

const LEAGUE_BY_SUMMONER_URL =
    "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner";

const LEAGUE_BY_PUUID_URL =
    "https://kr.api.riotgames.com/lol/league/v4/entries/by-puuid";

const MATCH_LIST_URL =
    "https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid";

const MATCH_DETAIL_URL =
    "https://asia.api.riotgames.com/lol/match/v5/matches";

const headers = () => ({
    "X-Riot-Token": API_KEY
});

async function requestRiot(label, url) {
    try {
        console.log(`[RIOT 요청] ${label}:`, url);

        const response = await axios.get(url, {
            headers: headers()
        });

        console.log(`[RIOT 성공] ${label}`);

        return response.data;
    } catch (error) {
        console.log(`[RIOT 실패] ${label}`);
        console.log("URL:", url);
        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data || error.message);

        throw error;
    }
}

exports.getAccount = async (name, tag) => {
    return await requestRiot(
        "Account API",
        `${ACCOUNT_URL}/${encodeURIComponent(name)}/${encodeURIComponent(tag)}`
    );
};

exports.getSummoner = async (puuid) => {
    return await requestRiot(
        "Summoner API",
        `${SUMMONER_URL}/${puuid}`
    );
};

exports.getLeague = async (summonerId) => {
    return await requestRiot(
        "League API by Summoner ID",
        `${LEAGUE_BY_SUMMONER_URL}/${summonerId}`
    );
};

exports.getLeagueByPuuid = async (puuid) => {
    return await requestRiot(
        "League API by PUUID",
        `${LEAGUE_BY_PUUID_URL}/${puuid}`
    );
};

exports.getMatches = async (puuid) => {
    return await requestRiot(
        "Match List API",
        `${MATCH_LIST_URL}/${puuid}/ids?start=0&count=5`
    );
};

exports.getMatchDetail = async (matchId) => {
    return await requestRiot(
        "Match Detail API",
        `${MATCH_DETAIL_URL}/${matchId}`
    );
};