import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const fallbackImage = "https://placehold.co/900x600?text=GameStarter";

const GetVideoGame = () => {
  const { videogameid } = useParams();
  const navigate = useNavigate();
  const videoGames = useSelector((state) => state.videoGames);

  const data = videoGames.find((game) => game.id === Number(videogameid));
  console.log("Selected video game data:", data);

  if (!data) {
    return <h1 className="status-message">Unable to load game.</h1>;
  }

  return (
    <section className="detail-page">
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>

      <div className="detail-card">
        <img
          className="detail-image"
          src={data.imgUrl || fallbackImage}
          alt={data.name}
          onError={(e) => {
            e.currentTarget.src = fallbackImage;
          }}
        />

        <div className="detail-body">
          <div className="pill-row">
            <span className="pill">
              {data.inStock ? "In Stock" : "Out of Stock"}
            </span>
            <span className="pill">
              {data.isPopular ? "Popular" : "Standard"}
            </span>
          </div>

          <h1>{data.name}</h1>
          <p className="detail-description">{data.description}</p>
          <p className="detail-price">${Number(data.price).toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};

export default GetVideoGame;