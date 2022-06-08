import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { MovieTitle, Rates, Poster, MovieCard } from "./StyledComponents";

const Movie = ({ movie }) => {
  console.log(movie);
  const { id, poster_path, original_title, vote_average, vote_count } = movie;
  return (
    <Link
      to={`${process.env.PUBLIC_URL}/movie/${id}`}
      style={{ textDecoration: "none" }}
    >
      <MovieCard key={id}>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
        <Rates>
          ⭐️ {vote_average} ({vote_count})
        </Rates>
        <MovieTitle>{original_title}</MovieTitle>
      </MovieCard>
    </Link>
  );
};

Movie.propTypes = {
  id: propTypes.number.isRequired,
  poster_path: propTypes.string.isRequired,
  original_title: propTypes.string.isRequired,
  overview: propTypes.string.isRequired,
  genre_ids: propTypes.arrayOf(propTypes.number).isRequired,
};
export default Movie;
