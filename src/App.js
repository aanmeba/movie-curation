import Home from "./routes/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
