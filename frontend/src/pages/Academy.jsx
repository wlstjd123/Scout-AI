import Navbar from "../components/Navbar";

function Academy() {

    const videos = [
        "미드 라인 운영 강의",
        "정글 동선 완벽 가이드",
        "원딜 포지셔닝 강의",
        "탑 라인전 압박 방법"
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
                    color: "#22d3ee"
                }}>
                    Academy
                </h1>

                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "30px",
                    marginTop: "50px"
                }}>

                    {videos.map((video, index) => (

                        <div
                            key={index}
                            style={{
                                background: "#0f172a",
                                padding: "40px",
                                borderRadius: "20px"
                            }}
                        >

                            <h2>{video}</h2>

                            <p style={{
                                color: "#94a3b8",
                                marginTop: "20px"
                            }}>
                                프로 선수 기반 심화 강의
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Academy;