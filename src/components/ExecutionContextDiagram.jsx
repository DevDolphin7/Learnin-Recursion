import RecursiveExecutionContextDiagram from "./ExecutionContextDiagram";

function ExecutionContextDiagram({ level }) {
  if (level === 0) return;

  if (level > 4) {
    alert("More than 4 recursive loops, this app wasn't designed for that!");
    return;
  }

  return (
    <section className="execution-context-diagram-container">
      <header className="ecd-header-thread">
        {level === 1 ? "Thread" : null}
      </header>
      <header className="ecd-header-environment-variables">E. V.</header>
      {level !== 1 ? (
        <div className="new-ecd-container">
          <RecursiveExecutionContextDiagram level={level - 1} />
        </div>
      ) : (
        <div className="ecd-main-thread">finished</div>
      )}
      <div className="ecd-main-environment-variables">Test</div>
    </section>
  );
}

export default ExecutionContextDiagram;
