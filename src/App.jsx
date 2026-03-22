import { NavLink, Route, Routes } from "react-router-dom";
import { profile } from "./data/portfolioData";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
    <div className="portfolio-shell">
      <header className="top-bar">
        <NavLink className="brand" to="/">
          KSM
        </NavLink>
        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume">Resume</NavLink>
        </nav>
        <NavLink className="action-btn" to="/resume">
          View Resume
        </NavLink>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>

      <footer className="footer">
        <p>© 2026 Kavya Sree Maniga</p>
        <p>Portfolio prototype track</p>
      </footer>
    </div>
  );
}
