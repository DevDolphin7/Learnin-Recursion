function UserInterfacePane() {
  const stepText = "Hello world, how are you?";

  const handlePrevious = () => {
    console.log("Previous step");
  };

  const handleNext = () => {
    console.log("Next step");
  };

  return (
    <section className="ui-pane-container pane-borders">
      <div className="comment-box">
        <p>{stepText}</p>
      </div>
      <a className="step-arrow" onClick={handlePrevious}>
        ⬅️
      </a>
      <a className="step-arrow" onClick={handleNext}>
        ➡️
      </a>
    </section>
  );
}

export default UserInterfacePane;
