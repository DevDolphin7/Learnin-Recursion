import { Link } from "react-router-dom";
import NCiconSmall from "../assets/NCiconSmall.png";
import NCsecondaryLogo from "../assets/NCsecondaryLogo.png";

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <img
          className="home-button"
          src={NCiconSmall}
          alt="Navigate to home"
        ></img>
      </Link>
      <Link to="/">
        <img src={NCsecondaryLogo} alt="The northcoders logo"></img>
      </Link>
    </header>
  );
}

export default Header;
