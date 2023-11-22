import { NavLink, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/index.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import ErrorPage from "./pages/ErrorPage";
import Success from "./pages/Success";

export default function App() {
  const [mode, setMode] = useState("dark");
  const [user, setUser] = useState({});
  const [podcastData, setPodcastData] = useState();

  const navigate = useNavigate();

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Any global initialization logic can be placed here
  }, []);

  return (
    <div className={`app ${mode}`}>
      <header>
        <AppBar
          position="static"
          className="navbar"
          sx={{ borderRadius: 5, marginBottom: 5 }}
        >
          <Toolbar>
            <IconButton
              onClick={toggleMode}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LightModeIcon />
            </IconButton>

            <NavLink
              to="/home"
              className="nav-link"
              activeclassname="active-link"
              exact={true}
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              className="nav-link"
              activeclassname="active-link"
              exact={true}
            >
              Login
            </NavLink>
            <IconButton></IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/success" element={<Success user={user} />} />
          <Route path="/home" element={<Home user={user} podcastData={podcastData} setPodcastData={setPodcastData} />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </main>
    </div>
  );
}