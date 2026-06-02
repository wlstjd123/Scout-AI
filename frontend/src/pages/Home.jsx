import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [tag, setTag] = useState("");

    const searchPlayer = () => {
        if (!name || !tag) {
            alert("소환사명과 태그를 모두 입력하세요.");
            return;
        }

        navigate("/analyze", {
            state: {
                name,
                tag
            }
        });
    };

    return (
        <div style={pageStyle}>
            <Navbar />

            <div style={containerStyle}>
                <div style={{ flex: 1 }}>
                    <h1 style={logoStyle}>SCOUT.AI</h1>

                    <p style={descStyle}>
                        Riot API 기반 실시간 전적 분석 플랫폼
                        <br />
                        플레이 스타일 분석 및 듀오 추천 제공
                    </p>
                </div>

                <div style={searchBoxStyle}>
                    <h2>플레이어 검색</h2>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="소환사명 예: Hide on bush"
                        style={inputStyle}
                    />

                    <input
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        placeholder="태그 예: KR1"
                        style={inputStyle}
                    />

                    <button onClick={searchPlayer} style={buttonStyle}>
                        분석 시작
                    </button>
                </div>
            </div>
        </div>
    );
}

const pageStyle = {
    background: "#020617",
    minHeight: "100vh",
    color: "white"
};

const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "100px",
    gap: "80px"
};

const logoStyle = {
    fontSize: "90px",
    color: "#84cc16",
    margin: 0
};

const descStyle = {
    fontSize: "22px",
    color: "#94a3b8",
    lineHeight: "1.8"
};

const searchBoxStyle = {
    flex: 1,
    background: "#0f172a",
    padding: "40px",
    borderRadius: "25px",
    border: "1px solid #22d3ee"
};

const inputStyle = {
    width: "100%",
    padding: "16px",
    marginTop: "18px",
    borderRadius: "10px",
    border: "none",
    background: "#1e293b",
    color: "white",
    boxSizing: "border-box"
};

const buttonStyle = {
    width: "100%",
    padding: "16px",
    marginTop: "25px",
    background: "#84cc16",
    color: "black",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer"
};

export default Home;