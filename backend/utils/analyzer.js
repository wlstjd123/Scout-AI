exports.calculateKDA = (kills, deaths, assists) => {
    if (deaths === 0) {
        return (kills + assists).toFixed(2);
    }

    return ((kills + assists) / deaths).toFixed(2);
};

exports.getMainLane = (laneCount) => {
    let result = "UNKNOWN";
    let max = 0;

    for (const lane in laneCount) {
        if (laneCount[lane] > max) {
            max = laneCount[lane];
            result = lane;
        }
    }

    return result;
};

exports.getPlayStyle = (avgKills, avgDeaths, avgAssists) => {
    if (avgKills >= 8) return "Aggressive";
    if (avgDeaths >= 7) return "Risky";
    if (avgAssists >= 10) return "Supportive";

    return "Balanced";
};

exports.calculateWinRate = (wins, totalGames) => {
    if (totalGames === 0) return "0.0";

    return ((wins / totalGames) * 100).toFixed(1);
};