import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PlayerProfile from "../components/PlayerProfile";
import StatCard from "../components/StatCard";
import MatchCard from "../components/MatchCard";

const positionMap = {
    TOP: "탑",
    JUNGLE: "정글",
    MIDDLE: "미드",
    BOTTOM: "원딜",
    UTILITY: "서포터",
    UNKNOWN: "알 수 없음"
};

const playStyleMap = {
    Aggressive: "공격형",
    Risky: "위험 감수형",
    Supportive: "지원형",
    Balanced: "균형형"
};

function Analyze() {
    const location = useLocation();
    const navigate = useNavigate();

    const stateData = location.state;

    const [loading, setLoading] = useState(Boolean(stateData));
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (!stateData) {
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `/api/analyze/${stateData.name}/${stateData.tag}`
                );

                setData(response.data);
            } catch (error) {
                console.log(error.response?.data || error.message);

                setErrorMessage(
                    JSON.stringify(
                        error.response?.data || error.message,
                        null,
                        2
                    )
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [stateData]);

    if (!stateData) {
        return (
            <div style={pageStyle}>
                <Navbar />
                <div style={centerStyle}>검색 정보가 없습니다.</div>
            </div>
        );
    }

    if (loading) {
        return (
            <div style={pageStyle}>
                <Navbar />
                <div style={centerStyle}>실제 Riot 데이터 분석 중...</div>
            </div>
        );
    }

    if (errorMessage) {
        return (
            <div style={pageStyle}>
                <Navbar />

                <div style={{ padding: "50px" }}>
                    <h1 style={{ color: "#ef4444" }}>
                        데이터 불러오기 실패
                    </h1>

                    <pre style={errorBoxStyle}>{errorMessage}</pre>

                    <button
                        onClick={() => navigate("/")}
                        style={buttonStyle}
                    >
                        메인으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={pageStyle}>
            <Navbar />

            <div style={{ padding: "50px" }}>
                <PlayerProfile
                    summoner={data.summoner}
                    tier={data.tier}
                    rank={data.rank}
                    lp={data.lp}
                    winRate={data.winRate}
                    profileIconId={data.profileIconId}
                    level={data.summonerLevel}
                    tierStatus={data.tierStatus}
                />

                <div style={statGridStyle}>
                    <StatCard
                        title="킬/데스/어시스트 비율"
                        value={data.kda}
                    />

                    <StatCard
                        title="승률"
                        value={`${data.winRate}%`}
                    />

                    <StatCard
                        title="주 포지션"
                        value={positionMap[data.mainLane] || data.mainLane}
                    />

                    <StatCard
                        title="플레이 성향"
                        value={playStyleMap[data.playStyle] || data.playStyle}
                    />
                </div>

                <div style={statGridStyle}>
                    <StatCard title="평균 킬" value={data.avgKills} />
                    <StatCard title="평균 데스" value={data.avgDeaths} />
                    <StatCard title="평균 어시스트" value={data.avgAssists} />
                    <StatCard title="평균 CS" value={data.avgCS} />
                </div>

                <div style={duoBoxStyle}>
                    <h2>AI 듀오 추천</h2>

                    <p>
                        추천 포지션:{" "}
                        <strong>
                            {positionMap[data.duo.recommendedLane] ||
                                data.duo.recommendedLane}
                        </strong>
                    </p>

                    <p>
                        추천 플레이 성향:{" "}
                        <strong>
                            {playStyleMap[data.duo.recommendedStyle] ||
                                data.duo.recommendedStyle}
                        </strong>
                    </p>
                </div>

                <h2 style={sectionTitleStyle}>최근 경기</h2>

                {data.recentMatches.map((match) => (
                    <MatchCard key={match.matchId} match={match} />
                ))}
            </div>
        </div>
    );
}

const pageStyle = {
    background: "#020617",
    minHeight: "100vh",
    color: "white"
};

const centerStyle = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "34px"
};

const statGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "40px"
};

const duoBoxStyle = {
    marginTop: "40px",
    background: "#0f172a",
    padding: "35px",
    borderRadius: "20px",
    border: "1px solid #22d3ee"
};

const sectionTitleStyle = {
    marginTop: "60px",
    color: "#22d3ee",
    fontSize: "36px"
};

const errorBoxStyle = {
    background: "#111827",
    color: "#fca5a5",
    padding: "25px",
    borderRadius: "15px",
    whiteSpace: "pre-wrap"
};

const buttonStyle = {
    marginTop: "30px",
    padding: "15px 25px",
    background: "#84cc16",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer"
};

export default Analyze;