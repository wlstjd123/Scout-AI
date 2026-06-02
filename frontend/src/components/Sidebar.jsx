import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div style={{
            width: "250px",
            background: "#0f172a",
            minHeight: "100vh",
            padding: "30px",
            boxSizing: "border-box",
            borderRight: "1px solid #1e293b"
        }}>

            <h2 style={{
                color: "#84cc16"
            }}>
                MENU
            </h2>

            <div style={{
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}>

                <Link to="/" style={linkStyle}>
                    홈
                </Link>

                <Link to="/dashboard" style={linkStyle}>
                    대시보드
                </Link>

                <Link to="/analyze" style={linkStyle}>
                    전적 분석
                </Link>

                <Link to="/duo" style={linkStyle}>
                    듀오 추천
                </Link>

                <Link to="/coach" style={linkStyle}>
                    AI 코칭
                </Link>

                <Link to="/academy" style={linkStyle}>
                    아카데미
                </Link>

                <Link to="/pro" style={linkStyle}>
                    프로 분석
                </Link>

                <Link to="/mypage" style={linkStyle}>
                    마이페이지
                </Link>

            </div>

        </div>
    );
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold"
};

export default Sidebar;