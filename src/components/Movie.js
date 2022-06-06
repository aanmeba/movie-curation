import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const { id, poster_path, original_title, overview, genre_ids } = movie;
  return (
    <div key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={original_title}
      />
      <h2>
        <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
          {original_title}
        </Link>
      </h2>
      <p>{overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}</p>
      <ul>
        {genre_ids.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
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
