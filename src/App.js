import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import { AppContainer } from "./components/StyledComponents";
import Title from "./components/Title";
import Footer from "./components/Footer";

const App = () => {
  return (
    <AppContainer>
      <Title />
      <Router>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/movie/:id`}
            element={<Detail />}
          />
        </Routes>
      </Router>
      <Footer />
    </AppContainer>
  );
};

export default App;
