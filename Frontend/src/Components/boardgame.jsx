import { useGetBoardGameQuery } from "../api";
import { useNavigate, useParams } from "react-router-dom";

const fallbackImage = "https://placehold.co/900x600?text=GameStarter";

const GetBoardGame = () => {
  const { boardgameid } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetBoardGameQuery(boardgameid);

  if (isLoading)
    return <h1 className="status-message">Board game is loading...</h1>;
  if (error || !data)
    return <h1 className="status-message">Unable to load board game.</h1>;

  return (
    <section className="detail-page">
      <button className="back-button" onClick={() => navigate("/board-games")}>
        Back
      </button>

      <div className="detail-card">
        <img
          src={`https://picsum.photos/seed/${encodeURIComponent(data.name)}/600/400`}
          alt={data.name}
          style={{ width: "200px" }}
        />

        <div className="detail-body">
          <div className="pill-row">
            <span className="pill">
              {data.inStock ? "In Stock" : "Out of Stock"}
            </span>
            <span className="pill">
              {data.isPopular ? "Popular" : "Classic"}
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

export default GetBoardGame;
