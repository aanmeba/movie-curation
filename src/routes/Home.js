import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { MoviesContainer } from "../components/StyledComponents";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
        {
          header: "Content-Type: application/json;charset=utf-8",
        }
      )
    ).json();

    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <MoviesContainer>
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </MoviesContainer>
      )}
    </div>
  );
};
export default Home;
