import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Kata from "./routes/Kata";

function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recursive-kata/:kata_id" element={<Kata />} />
      </Routes>
    </div>
  );
}

export default App;
