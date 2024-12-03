import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StepInformationProvider } from "./contexts/StepInformation.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StepInformationProvider>
      <App />
    </StepInformationProvider>
  </BrowserRouter>
);
