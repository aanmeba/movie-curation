import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MovieDetailContainer,
  MovieDetailLeft,
  MovieDetailRight,
  Genres,
  Button,
  Ul,
  Li,
} from "../components/StyledComponents";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState("");

  const {
    original_title,
    overview,
    release_date,
    genres,
    runtime,
    vote_average,
  } = movieDetail;

  const runtimeHour = Math.floor(runtime / 60);
  const runtimeMin = Math.floor(((runtime % 60) / 60) * 100);

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
            alt={original_title}
          />
          <MovieDetailRight>
            <h1>{original_title}</h1>
            <Ul>
              <Li>{release_date.split("-")[0]}</Li>
              <Li>|</Li>
              <Li>
                {runtimeHour}h {runtimeMin}m
              </Li>
              <Li>|</Li>
              <Li>⭐️ {vote_average}</Li>
            </Ul>
            <p>{overview}</p>
            <Genres>
              <Ul>
                {genres.map((genre, index) =>
                  index === genres.length - 1 ? (
                    <Li key={genre.id}>{genre.name} </Li>
                  ) : (
                    <>
                      <Li key={genre.id}>{genre.name}</Li>
                      <Li>|</Li>
                    </>
                  )
                )}
              </Ul>
            </Genres>

            <Button onClick={() => navigate(-1)}>Back</Button>
          </MovieDetailRight>
        </MovieDetailContainer>
      )}
    </>
  );
};

export default Detail;
