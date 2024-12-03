import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Kata from "./routes/Kata";

// Import steps defined in JSON files here
import run from "./katas/run.json";

function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add a new route below */}
        <Route
          path="/recursive-kata/:kata_id"
          element={<Kata stepsJson={run} />}
        />
      </Routes>
    </div>
  );
}

export default App;
