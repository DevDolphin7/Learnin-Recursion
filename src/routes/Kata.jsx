import { useState, useContext, useEffect } from "react";
import { StepInformationContext } from "../contexts/StepInformation";
import SidePane from "../components/SidePane";
import MainPane from "../components/MainPane";
import UserInterfacePane from "../components/UserInterfacePane";

function Kata({ stepsJson }) {
  const [sufficientDimensions, setSufficientDimensions] = useState(false);
  const { setStepInfo } = useContext(StepInformationContext);

  useEffect(() => {
    const { steps } = stepsJson;
    setStepInfo({ currentStep: 0, steps: steps });
  }, []);

  useEffect(() => {
    function handleResize() {
      setSufficientDimensions(
        window.innerWidth > 809 && window.innerHeight > 409
      );
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-container">
      {sufficientDimensions ? (
        <>
          <SidePane />
          <MainPane />
          <UserInterfacePane />
        </>
      ) : (
        <h1 style={{ gridColumn: "1 / span 2" }}>
          The screen dimensions are too small to handle all the recursion!
        </h1>
      )}
    </div>
  );
}

export default Kata;
