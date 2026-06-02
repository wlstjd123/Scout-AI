import { Link } from "react-router-dom";

function Navbar() {

    return (

        <div style={{
            background: "#0f172a",
            padding: "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #1e293b"
        }}>

            {/* LOGO */}

            <h1 style={{
                color: "#84cc16",
                margin: 0
            }}>
                SCOUT.AI
            </h1>

            {/* MENU */}

            <div style={{
                display: "flex",
                gap: "25px",
                flexWrap: "wrap"
            }}>

                <Link to="/" style={linkStyle}>
                    Home
                </Link>

                <Link to="/dashboard" style={linkStyle}>
                    Dashboard
                </Link>

                <Link to="/analyze" style={linkStyle}>
                    Analyze
                </Link>

                <Link to="/duo" style={linkStyle}>
                    Duo
                </Link>

                <Link to="/coach" style={linkStyle}>
                    Coach
                </Link>

                <Link to="/academy" style={linkStyle}>
                    Academy
                </Link>

                <Link to="/pro" style={linkStyle}>
                    Pro
                </Link>

                <Link to="/ranking" style={linkStyle}>
                    Ranking
                </Link>

                <Link to="/mypage" style={linkStyle}>
                    MyPage
                </Link>

                <Link to="/settings" style={linkStyle}>
                    Settings
                </Link>

                <Link to="/login" style={linkStyle}>
                    Login
                </Link>

            </div>

        </div>
    );
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px"
};

export default Navbar;