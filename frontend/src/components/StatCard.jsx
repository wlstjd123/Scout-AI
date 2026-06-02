function StatCard({ title, value }) {

    return (

        <div style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "20px",
            border: "1px solid #22d3ee"
        }}>

            <h3>{title}</h3>

            <p style={{
                fontSize: "35px",
                color: "#84cc16"
            }}>
                {value}
            </p>

        </div>
    );
}

export default StatCard;