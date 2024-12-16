import { useContext, useEffect } from "react";
import { StepInformationContext } from "../contexts/StepInformation";

function UserInterfacePane() {
  const {
    stepInfo,
    setStepInfo,
    setDiagramInfo,
    userInstructions,
    setUserInstructions,
    setOnCallStack,
  } = useContext(StepInformationContext);

  const handlePrevious = () => {
    if (stepInfo.currentStep === 0) return;

    setStepInfo((currentStepInfo) => {
      renderComponents(currentStepInfo.steps[currentStepInfo.currentStep - 1]);
      return { ...currentStepInfo, currentStep: stepInfo.currentStep - 1 };
    });
  };

  const handleNext = () => {
    if (stepInfo.currentStep === stepInfo.steps.length - 1) return;

    setStepInfo((currentStepInfo) => {
      renderComponents(currentStepInfo.steps[currentStepInfo.currentStep + 1]);
      return { ...currentStepInfo, currentStep: stepInfo.currentStep + 1 };
    });
  };

  const renderComponents = (newStep) => {
    setUserInstructions(newStep.text);

    const { threads, envVars, level } = newStep;
    setDiagramInfo({
      threads: [...threads],
      envVars: [...envVars],
      maxLevelAtStep: level,
    });

    setOnCallStack([...newStep.callStack]);
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
