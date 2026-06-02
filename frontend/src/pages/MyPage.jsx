import Navbar from "../components/Navbar";

function MyPage() {

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
                    My Page
                </h1>

                <div style={{
                    marginTop: "50px",
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "30px"
                }}>

                    <div style={boxStyle}>
                        최근 검색 기록
                    </div>

                    <div style={boxStyle}>
                        즐겨찾기 플레이어
                    </div>

                    <div style={boxStyle}>
                        저장된 분석 결과
                    </div>

                    <div style={boxStyle}>
                        내 활동 통계
                    </div>

                </div>

            </div>

        </div>
    );
}

const boxStyle = {
    background: "#0f172a",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center"
};

export default MyPage;