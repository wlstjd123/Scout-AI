import Navbar from "../components/Navbar";

function Dashboard() {

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
                    Dashboard
                </h1>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "30px",
                    marginTop: "50px"
                }}>

                    <div style={boxStyle}>
                        평균 승률
                    </div>

                    <div style={boxStyle}>
                        라인 분포
                    </div>

                    <div style={boxStyle}>
                        최근 성장 그래프
                    </div>

                </div>

            </div>

        </div>
    );
}

const boxStyle = {
    background: "#0f172a",
    padding: "60px",
    borderRadius: "20px",
    border: "1px solid #1e293b",
    textAlign: "center"
};

export default Dashboard;