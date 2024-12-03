import { useContext } from "react";
import { StepInformationContext } from "../contexts/StepInformation";
import CallStackItem from "./CallStackItem";

function CallStack() {
  const { onCallStack } = useContext(StepInformationContext);

  const invokedCallStack = onCallStack.map((callStackObj, index) => (
    <CallStackItem
      key={index}
      invoke={callStackObj.name}
      args={callStackObj.args}
    />
  ));

  return (
    <section className="call-stack">
      <CallStackItem invoke="global" args="" noInvokedFunction={true} />
      {invokedCallStack}
    </section>
  );
}

export default CallStack;
