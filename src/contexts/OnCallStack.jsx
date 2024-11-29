import { createContext } from "react";

export const OnCallStackContext = createContext();

export function OnCallStackProvider(props) {
  return (
    <OnCallStackContext.Provider value={[{ name: "run", args: 2 }]}>
      {props.children}
    </OnCallStackContext.Provider>
  );
}
