import Navbar from "../components/Navbar";

function Login() {

    return (

        <div style={{
            background: "#020617",
            minHeight: "100vh",
            color: "white"
        }}>

            <Navbar />

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh"
            }}>

                <div style={{
                    width: "400px",
                    background: "#0f172a",
                    padding: "40px",
                    borderRadius: "20px"
                }}>

                    <h1>Login</h1>

                    <input
                        placeholder="아이디"
                        style={inputStyle}
                    />

                    <input
                        type="password"
                        placeholder="비밀번호"
                        style={inputStyle}
                    />

                    <button style={buttonStyle}>
                        로그인
                    </button>

                </div>

            </div>

        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "10px",
    border: "none",
    background: "#1e293b",
    color: "white",
    boxSizing: "border-box"
};

const buttonStyle = {
    width: "100%",
    padding: "15px",
    marginTop: "20px",
    background: "#84cc16",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer"
};

export default Login;