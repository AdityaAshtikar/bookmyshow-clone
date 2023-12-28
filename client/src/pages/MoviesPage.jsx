import { useGetAllMoviesQuery } from "../services/movieServices";
import MovieCard from "../components/MovieCard";
import EmptyState from "../components/EmptyState";

function MoviesPage() {
  const { data, isLoading } = useGetAllMoviesQuery();

  if (isLoading) {
    return <p>Loading. Please wait...</p>;
  }

  return (
    <div className="movies-grid">
      {data.length ? (
        data?.map((movie) => <MovieCard key={movie._id} {...movie} />)
      ) : (
        <EmptyState />
      )}
    </div>
  );
}

export default MoviesPage;
