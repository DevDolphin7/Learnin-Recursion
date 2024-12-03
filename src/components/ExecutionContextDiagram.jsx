import { useContext } from "react";
import { StepInformationContext } from "../contexts/StepInformation";
import RecursiveExecutionContextDiagram from "./ExecutionContextDiagram";

function ExecutionContextDiagram() {
  const { diagramInfo } = useContext(StepInformationContext);
  const { thread, envVars, level } = diagramInfo;

  if (level === 0) return;

  if (level > 4) {
    alert("More than 4 recursive loops, this app wasn't designed for that!");
    return;
  }

  const recursiveComponentCall = () => {
    diagramInfo.level--;
    return <RecursiveExecutionContextDiagram key={diagramInfo.level} />;
  };

  const threadContent = (newDiagram = false) => {
    const formattedThreads = thread.map((lineOfJS, index) => (
      <p key={index}>{lineOfJS}</p>
    ));
    if (newDiagram) {
      formattedThreads.push(recursiveComponentCall());
    }
    return formattedThreads;
  };

  return (
    <section className="execution-context-diagram-container">
      <header className="ecd-header-thread">
        {level === 1 ? "Thread" : null}
      </header>
      <header className="ecd-header-environment-variables">E. V.</header>

      {level !== 1 ? (
        <div className="new-ecd-container">
          {threadContent({ newDiagram: true })}
        </div>
      ) : (
        <div className="ecd-main-thread">{threadContent()}</div>
      )}

      <div className="ecd-main-environment-variables">
        {envVars.map((envVar, index) => (
          <p key={index}>{envVar}</p>
        ))}
      </div>
    </section>
  );
}

export default ExecutionContextDiagram;
