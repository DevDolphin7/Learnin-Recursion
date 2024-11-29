function CallStackItem({ invoke, args, noInvokedFunction }) {
  const call = invoke + (!noInvokedFunction ? `(${args})` : args);
  return <div className="call-stack-item">{call}</div>;
}

export default CallStackItem;
