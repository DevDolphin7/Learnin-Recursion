import { createContext, useState } from "react";

export const StepInformationContext = createContext();

export function StepInformationProvider(props) {
  const [stepInfo, setStepInfo] = useState({
    currentStep: 0,
    steps: [
      {
        text: "",
        thread: [],
        envVars: [],
        callStack: [],
        level: 1,
      },
    ],
  });

  const { thread, envVars, level } = stepInfo.steps[0];
  const [diagramInfo, setDiagramInfo] = useState({ thread, envVars, level });

  const { text } = stepInfo.steps[0];
  const [userInstructions, setUserInstructions] = useState(text);

  const { callStack } = stepInfo.steps[0];
  const [onCallStack, setOnCallStack] = useState(callStack);

  return (
    <StepInformationContext.Provider
      value={{
        stepInfo,
        setStepInfo,
        onCallStack,
        setOnCallStack,
        diagramInfo,
        setDiagramInfo,
        userInstructions,
        setUserInstructions,
      }}
    >
      {props.children}
    </StepInformationContext.Provider>
  );
}
