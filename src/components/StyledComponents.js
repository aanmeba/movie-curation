import styled from "styled-components";

export const AppTitle = styled.div`
  padding: 1rem;
  /* background-color: beige; */
  font-size: 2em;
  font-family: "Arial";
  font-weight: bold;
  text-align: left;
  color: #f0f0f0;
`;

export const AppContainer = styled.div`
  max-width: 65vw;
  margin: 0 auto;
  font-family: "Arial";
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* align-items: flex-start; */
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  max-height: 500px;
  /* background-color: aliceblue; */
  margin: 1em;
  border: 1px black solid;
`;

export const Heading = styled.h1`
  font-size: 2em;
  font-family: "Arial";
`;

export const MovieTitle = styled.span`
  font-size: 1.2em;
  /* font-family: "Arial"; */
  font-weight: bold;
  text-align: left;
  padding: 5px;
  color: black;
`;

export const Rates = styled.span`
  font-size: 1em;
  /* font-family: "Arial"; */
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

export const Button = styled.div`
  padding: 0.5em;
  font-size: 0.9em;
  border: 1px black solid;
  border-radius: 15px;
  margin: 1em 1em 1em 0;
  background-color: #fff;
  width: 50px;
  text-align: center;
`;

// export const Button = styled.button`
//   width: 50px;
//   border-radius: 15px;
// `;
