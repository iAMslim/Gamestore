import { useGetVideoGamesQuery } from "../api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const fallbackImage = "https://placehold.co/600x400?text=GameStarter";

const GetAllVideoGames = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useGetVideoGamesQuery();
  const videoGames = useSelector((state) => state.videoGames);
  console.log("Video games from Redux state:", videoGames);

  if (isLoading) {
    return <div className="status-message">Loading video games...</div>;
  }

  if (error) {
    return <div className="status-message">Unable to load video games.</div>;
  }

  return (
    <section>
      <div className="section-header">
        <h1>Video Games</h1>
        <p>Browse top video game titles in the catalog.</p>
      </div>

      <div className="game-grid">
        {videoGames.map((game) => (
          <article
            key={game.id}
            className="game-card"
            onClick={() => navigate(`/video-games/${game.id}`)}
          >
            <img
              className="game-card-image"
              src={game.imgUrl || fallbackImage}
              alt={game.name}
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />

            <div className="game-card-body">
              <div className="pill-row">
                <span className="pill">
                  {game.inStock ? "In Stock" : "Out of Stock"}
                </span>
                <span className="pill">
                  {game.isPopular ? "Popular" : "Standard"}
                </span>
              </div>

              <h2>{game.name}</h2>
              <p>{game.description}</p>

              <div className="card-footer">
                <span className="price">${Number(game.price).toFixed(2)}</span>
                <button type="button" className="view-button">
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GetAllVideoGames;