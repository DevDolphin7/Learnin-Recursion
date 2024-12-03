import { useContext, useEffect } from "react";
import { StepInformationContext } from "../contexts/StepInformation";

function UserInterfacePane() {
  const {
    stepInfo,
    setOnCallStack,
    setDiagramInfo,
    userInstructions,
    setUserInstructions,
  } = useContext(StepInformationContext);

  const handlePrevious = () => {
    if (stepInfo.currentStep === 0) return;

    stepInfo.currentStep--;
    renderComponents(stepInfo.steps[stepInfo.currentStep]);
  };

  const handleNext = () => {
    if (stepInfo.currentStep === stepInfo.steps.length - 1) return;

    stepInfo.currentStep++;
    renderComponents(stepInfo.steps[stepInfo.currentStep]);
  };

  const renderComponents = (newStep) => {
    setUserInstructions(newStep.text);

    const { thread, envVars, level } = newStep;
    setDiagramInfo({ thread, envVars, level });

    setOnCallStack(newStep.callStack);
  };

  useEffect(() => {
    renderComponents(stepInfo.steps[stepInfo.currentStep]);
  }, []);

  return (
    <section className="ui-pane-container pane-borders">
      <div className="comment-box">
        <p>{userInstructions}</p>
      </div>
      <a className="step-arrow" onClick={handlePrevious}>
        ⬅️
      </a>
      <a className="step-arrow" onClick={handleNext}>
        ➡️
      </a>
    </section>
  );
}

export default UserInterfacePane;
