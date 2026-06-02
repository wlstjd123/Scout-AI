function Loading() {

    return (

        <div style={{
            background: "#020617",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            flexDirection: "column"
        }}>

            <div style={{
                width: "80px",
                height: "80px",
                border: "8px solid #1e293b",
                borderTop: "8px solid #84cc16",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
            }} />

            <h2 style={{
                marginTop: "30px"
            }}>
                데이터 분석 중...
            </h2>

        </div>
    );
}

export default Loading;