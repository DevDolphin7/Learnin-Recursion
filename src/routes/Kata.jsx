import { useContext, useEffect } from "react";
import { SufficientScreenDimensionsContext } from "../contexts/SufficientScreenDimensions";
import { StepInformationContext } from "../contexts/StepInformation";
import Header from "../components/Header";
import SidePane from "../components/SidePane";
import MainPane from "../components/MainPane";
import UserInterfacePane from "../components/UserInterfacePane";

function Kata({ stepsJson, codeImage }) {
  const { sufficientDimensions, setSufficientDimensions } = useContext(
    SufficientScreenDimensionsContext
  );
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
    <>
      <Header />
      <div className="page-content-container">
        {sufficientDimensions ? (
          <>
            <SidePane codeImage={codeImage} />
            <MainPane />
            <UserInterfacePane />
          </>
        ) : (
          <h1 className="insufficient-screen-width">
            The screen dimensions are too small to handle all the recursion!
          </h1>
        )}
      </div>
    </>
  );
}

export default Kata;
