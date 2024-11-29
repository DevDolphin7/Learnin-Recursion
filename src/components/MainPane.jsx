import ExecutionContextDiagram from "./ExecutionContextDiagram";

function MainPane() {
  return (
    <section className="main-pane-container pane-borders">
      <ExecutionContextDiagram level={4} />
    </section>
  );
}

export default MainPane;
