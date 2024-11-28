import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <main>
        <h1>Welcome to Learnin Recursion!</h1>
        <p>Click a button below to get started:</p>
        <Link to="/recursive-kata/1">
          <button>Kata 1</button>
        </Link>
      </main>
      <footer className="home-footer">
        Created by Daniel Olver for Northcoders
      </footer>
    </div>
  );
}

export default Home;
