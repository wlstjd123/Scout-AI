import Navbar from "../components/Navbar";

function Ranking() {

    const players = [
        {
            name: "Faker",
            tier: "Challenger",
            lp: 1920
        },
        {
            name: "Chovy",
            tier: "Challenger",
            lp: 1880
        },
        {
            name: "ShowMaker",
            tier: "Grandmaster",
            lp: 1540
        }
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
                    랭킹
                </h1>

                <div style={{
                    marginTop: "50px"
                }}>

                    {players.map((player, index) => (

                        <div
                            key={index}
                            style={{
                                background: "#0f172a",
                                padding: "30px",
                                borderRadius: "20px",
                                marginBottom: "20px",
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        >

                            <h2>{player.name}</h2>

                            <div>

                                <p>{player.tier}</p>

                                <p>{player.lp} LP</p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Ranking;