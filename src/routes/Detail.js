import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MovieDetailContainer,
  MovieDetailLeft,
  MovieDetailRight,
  Genres,
  Button,
} from "../components/StyledComponents";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
        <MovieDetailContainer>
          <MovieDetailLeft
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.original_title}
          />
          <MovieDetailRight>
            <h1>{movieDetail.original_title}</h1>
            <p>{movieDetail.overview}</p>
            <Genres>
              {movieDetail.genres.map((genre, index) =>
                index === movieDetail.genres.length - 1 ? (
                  <p key={genre.id}>&nbsp;{genre.name} </p>
                ) : (
                  <p key={genre.id}>&nbsp;{genre.name}&nbsp;|</p>
                )
              )}
            </Genres>

            <Button onClick={() => navigate(-1)}>Back</Button>
          </MovieDetailRight>
        </MovieDetailContainer>
      )}
    </>
  );
};

export default Detail;
