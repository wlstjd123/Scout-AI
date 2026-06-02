function CoachCard({ title, description }) {

    return (

        <div style={{
            background: "#0f172a",
            padding: "35px",
            borderRadius: "20px",
            border: "1px solid #1e293b"
        }}>

            <h2 style={{
                color: "#22d3ee"
            }}>
                {title}
            </h2>

            <p style={{
                marginTop: "20px",
                color: "#94a3b8",
                lineHeight: "1.8"
            }}>
                {description}
            </p>

        </div>
    );
}

export default CoachCard;