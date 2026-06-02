import Navbar from "../components/Navbar";

function Settings() {

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
                    설정
                </h1>

                <div style={{
                    marginTop: "40px",
                    background: "#0f172a",
                    padding: "40px",
                    borderRadius: "20px"
                }}>

                    <h2>테마 설정</h2>

                    <button style={buttonStyle}>
                        다크 모드
                    </button>

                    <button style={buttonStyle}>
                        라이트 모드
                    </button>

                </div>

            </div>

        </div>
    );
}

const buttonStyle = {
    marginTop: "20px",
    marginRight: "20px",
    padding: "15px 25px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold"
};

export default Settings;