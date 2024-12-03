import { createContext } from "react";

export const StepInformationContext = createContext();

export function StepInformationProvider(props) {
  return (
    <StepInformationContext.Provider
      value={{
        currentStep: 0,
        steps: [
          {
            text: "Hello, world!!!",
            thread: ["test"],
            envVars: ["test"],
            level: 1,
          },
          {
            text: "How are you?",
            thread: ["Function name yay!"],
            envVars: ["one = 'hello'"],
            level: 1,
          },
          {
            text: "Good thanks!!!",
            thread: ["Function name yay!"],
            envVars: ["one = 'hello'"],
            level: 2,
          },
        ],
      }}
    >
      {props.children}
    </StepInformationContext.Provider>
  );
}
