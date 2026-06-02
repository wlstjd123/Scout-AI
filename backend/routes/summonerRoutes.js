const express = require("express");

const router = express.Router();

const {
    getAccount,
    getMatches,
    getMatchDetail,
    analyzeSummoner,
    duoRecommend
} = require("../controllers/summonerController");

router.get("/account/:name/:tag", getAccount);
router.get("/matches/:puuid", getMatches);
router.get("/match/:matchId", getMatchDetail);
router.get("/analyze/:name/:tag", analyzeSummoner);
router.get("/duo/:name/:tag", duoRecommend);

module.exports = router;