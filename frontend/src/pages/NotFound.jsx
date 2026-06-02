import Navbar from "../components/Navbar";

function NotFound() {

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
                height: "80vh",
                flexDirection: "column"
            }}>

                <h1 style={{
                    fontSize: "120px",
                    color: "#ef4444"
                }}>
                    404
                </h1>

                <p style={{
                    fontSize: "24px",
                    color: "#94a3b8"
                }}>
                    페이지를 찾을 수 없습니다.
                </p>

            </div>

        </div>
    );
}

export default NotFound;