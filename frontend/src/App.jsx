import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Analyze from "./pages/Analyze";
import Duo from "./pages/Duo";
import Coach from "./pages/Coach";
import Academy from "./pages/Academy";
import Dashboard from "./pages/Dashboard";
import Pro from "./pages/Pro";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Ranking from "./pages/Ranking";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/analyze" element={<Analyze />} />

                <Route path="/duo" element={<Duo />} />

                <Route path="/coach" element={<Coach />} />

                <Route path="/academy" element={<Academy />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/pro" element={<Pro />} />

                <Route path="/login" element={<Login />} />

                <Route path="/mypage" element={<MyPage />} />

                <Route path="/ranking" element={<Ranking />} />

                <Route path="/settings" element={<Settings />} />

                <Route path="*" element={<NotFound />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;