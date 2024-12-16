import CallStack from "./CallStack";

function SidePane({ codeImage }) {
  return (
    <section className="side-pane-container pane-borders">
      <section className="code-image">
        <img
          src={codeImage}
          alt="A screenshot of a recursive function that counts down the number of kilometers left in a run"
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
          }}
        />
      </section>
      <div className="call-stack-container">
        <CallStack />
      </div>
    </section>
  );
}

export default SidePane;
