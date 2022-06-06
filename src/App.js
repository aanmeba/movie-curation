import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/movie/:id`}
            element={<Detail />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
