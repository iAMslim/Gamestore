import { Routes, Route, NavLink } from "react-router-dom";
import GetAllVideoGames from "./Components/videogames";
import GetVideoGame from "./Components/videogame";
import GetAllBoardGames from "./Components/boardgames";
import GetBoardGame from "./Components/boardgame";

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-badge">GS</div>
          <div className="brand-text">
            <span className="brand-title">GameStarter</span>
            <span className="brand-subtitle">Discover your next favorite game</span>
          </div>
        </div>

        <nav className="nav-links">
          <NavLink to="/" end>
            Video Games
          </NavLink>
          <NavLink to="/board-games">Board Games</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-kicker">Curated catalog</span>
            <h1>Games worth checking out, all in one clean storefront.</h1>
            <p>
              Browse featured video games and board games with a cleaner layout,
              better detail pages, and a more polished storefront feel.
            </p>

            <div className="hero-actions">
              <NavLink to="/" end className="hero-button primary">
                Browse Video Games
              </NavLink>
              <NavLink to="/board-games" className="hero-button secondary">
                Browse Board Games
              </NavLink>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-stat-card">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">Game Categories</span>
            </div>

            <div className="hero-stat-card">
              <span className="hero-stat-number">28</span>
              <span className="hero-stat-label">Featured Titles</span>
            </div>

            <div className="hero-stat-card">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Cleaned UI Energy</span>
            </div>
          </div>
        </section>

        <Routes>
          <Route path="/" element={<GetAllVideoGames />} />
          <Route path="/video-games/:videogameid" element={<GetVideoGame />} />
          <Route path="/board-games" element={<GetAllBoardGames />} />
          <Route path="/board-games/:boardgameid" element={<GetBoardGame />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;