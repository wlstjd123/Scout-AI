function ChampionCard({ name, lane, winRate }) {

    return (

        <div style={{
            background: "#0f172a",
            padding: "25px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
            textAlign: "center"
        }}>

            <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#1e293b",
                margin: "0 auto"
            }} />

            <h2 style={{
                marginTop: "20px"
            }}>
                {name}
            </h2>

            <p style={{
                color: "#94a3b8"
            }}>
                {lane}
            </p>

            <p style={{
                color: "#84cc16",
                fontWeight: "bold"
            }}>
                승률 {winRate}%
            </p>

        </div>
    );
}

export default ChampionCard;