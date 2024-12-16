import { createContext, useState } from "react";

export const StepInformationContext = createContext();

export function StepInformationProvider(props) {
  const [stepInfo, setStepInfo] = useState({
    currentStep: 0,
    steps: [
      {
        text: "",
        threads: [],
        envVars: [],
        callStack: [],
        level: 1,
      },
    ],
  });

  const { threads, envVars, level } = stepInfo.steps[0];
  const [diagramInfo, setDiagramInfo] = useState({
    threads,
    envVars,
    maxLevelAtStep: level,
  });

  const { text } = stepInfo.steps[0];
  const [userInstructions, setUserInstructions] = useState(text);

  const { callStack } = stepInfo.steps[0];
  const [onCallStack, setOnCallStack] = useState(callStack);

  return (
    <StepInformationContext.Provider
      value={{
        stepInfo,
        setStepInfo,
        diagramInfo,
        setDiagramInfo,
        userInstructions,
        setUserInstructions,
        onCallStack,
        setOnCallStack,
      }}
    >
      {props.children}
    </StepInformationContext.Provider>
  );
}
