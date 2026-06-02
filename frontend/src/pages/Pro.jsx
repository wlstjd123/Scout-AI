import Navbar from "../components/Navbar";

function Pro() {

    const pros = [
        "Faker",
        "Chovy",
        "ShowMaker",
        "Gumayusi"
    ];

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
                    프로 선수 분석
                </h1>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "30px",
                    marginTop: "50px"
                }}>

                    {pros.map((pro, index) => (

                        <div
                            key={index}
                            style={{
                                background: "#0f172a",
                                padding: "40px",
                                borderRadius: "20px"
                            }}
                        >

                            <h2>{pro}</h2>

                            <p>공격형 플레이 스타일</p>

                            <p>라인전 강점 보유</p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Pro;