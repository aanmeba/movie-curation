import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState("");

  const getMovie = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const data = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
        {
          header: "Content-Type: application/json;charset=utf-8",
        }
      )
    ).json();
    if (data) {
      setMovieDetail(data);
      setLoading(false);
    }
    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{movieDetail.original_title}</h1>
          <h3>Genres</h3>
          <ul>
            {movieDetail.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <Link to="/">Home</Link>
        </>
      )}
    </>
  );
};

export default Detail;
