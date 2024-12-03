import { useContext, useState } from "react";
import { StepInformationContext } from "../contexts/StepInformation";

function UserInterfacePane() {
  const stepInfo = useContext(StepInformationContext);
  const [userInstructions, setUserInstructions] = useState(
    stepInfo.steps[stepInfo.currentStep].text
  );

  const handlePrevious = () => {
    if (stepInfo.currentStep > 0) {
      stepInfo.currentStep--;
      setUserInstructions(stepInfo.steps[stepInfo.currentStep].text);
    }
  };

  const handleNext = () => {
    if (stepInfo.currentStep < stepInfo.steps.length - 1) {
      stepInfo.currentStep++;
      setUserInstructions(stepInfo.steps[stepInfo.currentStep].text);
    }
  };

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
