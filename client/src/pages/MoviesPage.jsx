import { useGetAllMoviesQuery } from "../services/movieServices";
import MovieCard from "../components/MovieCard";

function MoviesPage() {
  const { data, isLoading } = useGetAllMoviesQuery();

  if (isLoading) {
    return <p>Loading. Please wait...</p>;
  }

  console.log(data);
  return (
    <div className="movies-grid">
      {data?.map((movie) => (
        <MovieCard key={movie._id} {...movie} />
      ))}
    </div>
  );
}

export default MoviesPage;
