import RecursiveExecutionContextDiagram from "./ExecutionContextDiagram";

function ExecutionContextDiagram({ levels }) {
  return (
    <section>
      Test text
      {levels > 0 ? (
        <RecursiveExecutionContextDiagram levels={levels - 1} />
      ) : (
        <div>finished</div>
      )}
    </section>
  );
}

export default ExecutionContextDiagram;
