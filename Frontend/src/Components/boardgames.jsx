import { useGetBoardGamesQuery } from "../api";
import { useNavigate } from "react-router-dom";

const fallbackImage = "https://placehold.co/600x400?text=GameStarter";

const GetAllBoardGames = () => {
  const navigate = useNavigate();
  const { data: boardGames = [], isLoading, error } = useGetBoardGamesQuery();

  if (isLoading)
    return <div className="status-message">Loading board games...</div>;
  if (error)
    return <div className="status-message">Unable to load board games.</div>;

  return (
    <section>
      <div className="section-header">
        <h1>Board Games</h1>
        <p>Browse tabletop favorites in the catalog.</p>
      </div>

      <div className="game-grid">
        {boardGames.map((game) => (
          <article
            key={game.id}
            className="game-card"
            onClick={() => navigate(`/board-games/${game.id}`)}
          >
            <img
              src={`https://picsum.photos/seed/${encodeURIComponent(game.name)}/600/400`}
              alt={game.name}
              style={{ width: "200px" }}
            />

            <div className="game-card-body">
              <div className="pill-row">
                <span className="pill">
                  {game.inStock ? "In Stock" : "Out of Stock"}
                </span>
                <span className="pill">
                  {game.isPopular ? "Popular" : "Classic"}
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

export default GetAllBoardGames;
