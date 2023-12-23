import { Card } from "antd";
import { useNavigate } from "react-router-dom";
function MovieCard(props) {
  const { title, description, duration, genre, language, posterUrl } = props;
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate("/movie/21312312")}
      className="movie-card"
      title={title}
    >
      <img src={posterUrl} alt="Movie image" />
      <p>{description}</p>
      <p>Duration : {duration}</p>
      <p>Genre : {genre}</p>
      <p>Language : {language}</p>
    </Card>
  );
}

export default MovieCard;
