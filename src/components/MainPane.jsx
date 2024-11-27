import ExecutionContextDiagram from "./ExecutionContextDiagram";

function MainPane() {
  return (
    <section className="main-pane-container pane-borders">
      <ExecutionContextDiagram levels={10} />
    </section>
  );
}

export default MainPane;
