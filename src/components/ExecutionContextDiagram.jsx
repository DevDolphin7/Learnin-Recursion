import { useContext } from "react";
import { StepInformationContext } from "../contexts/StepInformation";
import RecursiveExecutionContextDiagram from "./ExecutionContextDiagram";

function ExecutionContextDiagram() {
  const { stepInfo, diagramInfo } = useContext(StepInformationContext);
  const { thread, envVars, level } = diagramInfo;
  let levelAbove = null;

  if (level > 4) {
    alert("More than 4 recursive loops, this app wasn't designed for that!");
    return;
  }

  if (level > 1) {
    levelAbove = level;
  }

  const recursiveComponentCall = () => {
    diagramInfo.level--;
    return <RecursiveExecutionContextDiagram key={diagramInfo.level} />;
  };

  const threadContent = (newDiagram = false) => {
    const threadContent = [];

    if (levelAbove) {
      threadContent.push(
        stepInfo.steps[levelAbove].thread.map((lineOfJS, index) => {
          return <p key={index}>{lineOfJS}</p>;
        })
      );
    }

    if (level === 1) {
      threadContent.push(
        thread.map((lineOfJS, index) => {
          return <p key={index}>{lineOfJS}</p>;
        })
      );
    }

    if (newDiagram) {
      threadContent.push(recursiveComponentCall());
    }

    return <div className="ecd-main-thread">{threadContent}</div>;
  };

  const envVarContent = () => {
    const envVarContent = [];
    if (levelAbove) {
      envVarContent.push(
        stepInfo.steps[levelAbove].envVars.map((envVar, index) => (
          <p key={index}>{envVar}</p>
        ))
      );
    }

    if (level === 1) {
      envVarContent.push(
        envVars.map((envVar, index) => <p key={index}>{envVar}</p>)
      );
    }

    return (
      <div className="ecd-main-environment-variables">{envVarContent}</div>
    );
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
        <>{threadContent()}</>
      )}

      {envVarContent()}
    </section>
  );
}

export default ExecutionContextDiagram;
