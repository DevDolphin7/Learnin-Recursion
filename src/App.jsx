import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Kata from "./routes/Kata";

// Import any new JSON files and code images here
import run from "./katas/run.json";
import runCodeImg from "./assets/run-code-screenshot.png";

function App() {
  // Add any new kata objects here
  const katas = [
    {
      name: "Recursive run",
      url: "/recursive-run",
      json: run,
      image: runCodeImg,
    },
  ];

  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<Home katas={katas} />} />

        {katas.map((kata, index) => (
          <Route
            key={index}
            path={kata.url}
            element={<Kata stepsJson={kata.json} codeImage={kata.image} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
