import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Kata from "./routes/Kata";

// Import any new JSON files and code images here
import run from "./katas/run.json";
import runImage from "./assets/run-code-screenshot.png";
import findFactorial from "./katas/find-factorial.json";
import findFactorialImage from "./assets/find-factorial-screenshot.png";

function App() {
  // Add any new kata objects here
  const katas = [
    {
      name: "Recursive run",
      url: "/recursive-run",
      json: run,
      image: runImage,
    },
    {
      name: "Find Factorial",
      url: "/find-factorial",
      json: findFactorial,
      image: findFactorialImage,
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
