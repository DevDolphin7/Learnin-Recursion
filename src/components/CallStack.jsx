import { useContext } from "react";
import { OnCallStackContext } from "../contexts/OnCallStack";
import CallStackItem from "./CallStackItem";

function CallStack() {
  const onCallStack = useContext(OnCallStackContext);

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
