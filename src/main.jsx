import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SufficientScreenDimensionsProvider } from "./contexts/SufficientScreenDimensions.jsx";
import { StepInformationProvider } from "./contexts/StepInformation.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SufficientScreenDimensionsProvider>
      <StepInformationProvider>
        <App />
      </StepInformationProvider>
    </SufficientScreenDimensionsProvider>
  </BrowserRouter>
);
