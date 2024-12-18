import CallStack from "./CallStack";

function SidePane({ codeImage }) {
  return (
    <section className="side-pane-container">
      <section className="code-image">
        <img src={codeImage} alt="A screenshot of the code being analysed" />
      </section>
      <div className="call-stack-container">
        <CallStack />
      </div>
    </section>
  );
}

export default SidePane;
