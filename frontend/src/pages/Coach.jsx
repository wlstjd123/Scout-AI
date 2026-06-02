import Navbar from "../components/Navbar";

function Coach() {

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
                    color: "#84cc16"
                }}>
                    AI 코칭 시스템
                </h1>

                <div style={{
                    marginTop: "50px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "30px"
                }}>

                    <div style={cardStyle}>
                        <h2>문제점 분석</h2>

                        <ul style={listStyle}>
                            <li>데스 수가 높음</li>
                            <li>시야 점수 부족</li>
                            <li>라인전 안정성 부족</li>
                        </ul>
                    </div>

                    <div style={cardStyle}>
                        <h2>AI 개선 추천</h2>

                        <ul style={listStyle}>
                            <li>와드 설치 증가</li>
                            <li>오브젝트 합류 강화</li>
                            <li>후반 포지셔닝 개선</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    );
}

const cardStyle = {
    background: "#0f172a",
    padding: "40px",
    borderRadius: "20px"
};

const listStyle = {
    marginTop: "20px",
    lineHeight: "2"
};

export default Coach;