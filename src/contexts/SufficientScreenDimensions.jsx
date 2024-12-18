import { createContext, useState } from "react";

export const SufficientScreenDimensionsContext = createContext();

export function SufficientScreenDimensionsProvider(props) {
  const [sufficientDimensions, setSufficientDimensions] = useState(false);

  return (
    <SufficientScreenDimensionsContext.Provider
      value={{ sufficientDimensions, setSufficientDimensions }}
    >
      {props.children}
    </SufficientScreenDimensionsContext.Provider>
  );
}
