exports.findBestDuo = ({ mainLane, playStyle }) => {
    const duoMap = {
        TOP: "JUNGLE",
        JUNGLE: "MIDDLE",
        MIDDLE: "JUNGLE",
        BOTTOM: "UTILITY",
        UTILITY: "BOTTOM"
    };

    return {
        recommendedLane: duoMap[mainLane] || "JUNGLE",
        recommendedStyle:
            playStyle === "Aggressive" ? "Balanced" : "Aggressive"
    };
};