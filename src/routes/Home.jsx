import { useEffect, useContext } from "react";
import { SufficientScreenDimensionsContext } from "../contexts/SufficientScreenDimensions";
import Header from "../components/Header";
import KataList from "../components/KataList";

function Home({ katas }) {
  const { sufficientDimensions, setSufficientDimensions } = useContext(
    SufficientScreenDimensionsContext
  );

  useEffect(() => {
    function handleResize() {
      setSufficientDimensions(
        window.innerWidth > 809 && window.innerHeight > 409
      );
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      {sufficientDimensions ? (
        <>
          <main className="home-content-container">
            <h1>Welcome to Learnin' Recursion!</h1>
            <KataList katas={katas} />
          </main>
          <footer className="home-footer">
            <p>
              Icons made from{" "}
              <a href="https://www.onlinewebfonts.com/icon">svg icons</a> is
              licensed by CC BY 4.0
            </p>
            <p>Created by Dan Olver for Northcoders.</p>
          </footer>
        </>
      ) : (
        <h1 className="insufficient-screen-width">
          The screen dimensions are too small to handle all the recursion!
        </h1>
      )}
    </>
  );
}

export default Home;
