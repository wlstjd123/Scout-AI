import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";

function Duo() {

    const location = useLocation();

    const data = location.state || {
        summoner: "Hide on bush#KR1",
        mainLane: "MID",
        playStyle: "Aggressive"
    };

    let duoLane = "JUNGLE";

    if (data.mainLane === "BOTTOM") {
        duoLane = "UTILITY";
    }

    return (

        <div style={{
            background: "#020617",
            minHeight: "100vh",
            color: "white"
        }}>

            <Navbar />

            <div style={{
                padding: "50px"
            }}>

                <h1 style={{
                    fontSize: "60px",
                    color: "#22d3ee"
                }}>
                    AI 듀오 추천
                </h1>

                <div style={{
                    marginTop: "50px",
                    background: "#0f172a",
                    padding: "40px",
                    borderRadius: "20px"
                }}>

                    <h2>{data.summoner}</h2>

                    <p style={textStyle}>
                        내 라인 : {data.mainLane}
                    </p>

                    <p style={textStyle}>
                        플레이 스타일 : {data.playStyle}
                    </p>

                    <hr style={{
                        margin: "30px 0",
                        borderColor: "#334155"
                    }} />

                    <h2 style={{
                        color: "#84cc16"
                    }}>
                        추천 듀오 라인 : {duoLane}
                    </h2>

                    <p style={{
                        color: "#94a3b8",
                        marginTop: "20px"
                    }}>
                        당신과 최고의 시너지를 낼 수 있는 포지션입니다.
                    </p>

                </div>

            </div>

        </div>
    );
}

const textStyle = {
    fontSize: "22px",
    marginTop: "20px"
};

export default Duo;