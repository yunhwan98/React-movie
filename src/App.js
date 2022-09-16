import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./route/Home"
import Detail from "./route/Detail"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;