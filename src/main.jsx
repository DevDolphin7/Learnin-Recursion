import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { OnCallStackProvider } from "./contexts/OnCallStack";
import { StepInformationProvider } from "./contexts/StepInformation.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <OnCallStackProvider>
      <StepInformationProvider>
        <App />
      </StepInformationProvider>
    </OnCallStackProvider>
  </BrowserRouter>
);
