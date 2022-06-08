import styled from "styled-components";

const fontFamily =
  '-apple-system, BlinkMacSystemFont, system, "Noto Sans", noto, "Fira Sans", Segoe UI, "Droid Sans", "Droid Sans Fallback", "Roboto", "Cantarell", "Ubuntu", "Helvetica Neue", Arial, sans-serif, Apple Color Emoji, Noto Color Emoji, Segoe UI Emoji, Segoe UI Symbol, emoji';

export const AppTitle = styled.div`
  padding: 1rem;
  font-size: 2em;
  font-family: ${fontFamily};
  font-weight: bold;
  text-align: left;
  color: #000;
`;

export const AppContainer = styled.div`
  max-width: 65vw;
  margin: 0 auto;
  font-family: ${fontFamily};
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  max-height: 500px;
  margin: 1em;
  border: 1px black solid;
`;

export const Heading = styled.h1`
  font-size: 2em;
  font-family: "Arial";
`;

export const MovieTitle = styled.span`
  font-size: 1.1em;
  font-weight: bold;
  text-align: left;
  padding: 5px;
  color: black;
`;

export const Rates = styled.span`
  font-size: 1em;
  text-align: left;
  padding: 5px;
  display: block;
  color: black;
`;

export const Poster = styled.img`
  max-height: 300px;
`;

export const MovieDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

export const MovieDetailLeft = styled.img`
  max-width: 30vw;
`;

export const MovieDetailRight = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  justify-content: flex-start;
`;

export const Genres = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  padding: 0.5em;
  font-size: 0.9em;
  border: 1px black solid;
  border-radius: 15px;
  margin: 1em 1em 1em 0;
  background-color: #fff;
  width: 50px;
  text-align: center;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: 10px;
  text-align: center;
`;

export const Bottom = styled.div`
  text-align: center;
  padding-top: 50px;
  height: 100px;
  font-size: 1em;
  margin-top: 2em;
  color: grey;
`;
