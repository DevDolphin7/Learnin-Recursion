import { useContext } from "react";
import { StepInformationContext } from "../contexts/StepInformation";
import RecursiveExecutionContextDiagram from "./ExecutionContextDiagram";
import { definePriorLevelSteps } from "../utils/utils";

function ExecutionContextDiagram({ level }) {
  const { stepInfo, diagramInfo } = useContext(StepInformationContext);
  const { threads, envVars, maxLevelAtStep } = diagramInfo;
  let formattedPriorLevelSteps = [];
  level = level === undefined ? maxLevelAtStep || 1 : level;

  if (level > 4) {
    alert("More than 4 recursive loops, this app wasn't designed for that!");
    return;
  }

  if (level > 1) {
    const priorLevelStep = definePriorLevelSteps(stepInfo);
    formattedPriorLevelSteps = Object.values(priorLevelStep).reverse();
  }

  const defineThreadContent = (newDiagram = false) => {
    const threadContent = [];

    for (let i = 4; i >= 2; i--) {
      if (level === i) {
        threadContent.push(
          stepInfo.steps[formattedPriorLevelSteps[i - 2]].threads.map(
            (lineOfJS, index) => <p key={index}>{lineOfJS}</p>
          )
        );
      }
    }

    if (level === 1) {
      threadContent.push(
        threads.map((lineOfJS, index) => <p key={index}>{lineOfJS}</p>)
      );
    }

    if (newDiagram) {
      threadContent.push(
        <RecursiveExecutionContextDiagram key={level} level={level - 1} />
      );
    }

    return threadContent;
  };

  const defineEnvVarContent = () => {
    const envVarContent = [];

    for (let i = 4; i >= 2; i--) {
      if (level === i) {
        envVarContent.push(
          stepInfo.steps[formattedPriorLevelSteps[i - 2]].envVars.map(
            (envVar, index) => <p key={index}>{envVar}</p>
          )
        );
      }
    }

    if (level === 1) {
      envVarContent.push(
        envVars.map((envVar, index) => <p key={index}>{envVar}</p>)
      );
    }

    return envVarContent;
  };

  return (
    <section className="execution-context-diagram-container">
      <header className="ecd-header-thread">
        {level === 1 ? "Thread" : null}
      </header>
      <header className="ecd-header-environment-variables">E. V.</header>

      {level !== 1 ? (
        <div className="new-ecd-container">
          <div className="ecd-main-thread">
            {defineThreadContent({ newDiagram: true })}
          </div>
        </div>
      ) : (
        <div className="ecd-main-thread">{defineThreadContent()}</div>
      )}

      <div className="ecd-main-environment-variables">
        {defineEnvVarContent()}
      </div>
    </section>
  );
}

export default ExecutionContextDiagram;
