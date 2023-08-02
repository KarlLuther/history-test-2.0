import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h3>History Test 2.0</h3>
      <nav className="full-nav">
        <Link className="hamburger-link" to="/">
          Home
        </Link>
        <span className="link-border" />
        <Link className="hamburger-link" to="/ClassicTests">
          Classic Tests
        </Link>
        <span className="link-border" />
        <Link className="hamburger-link" to="/AdvancedTests">
          Advanced Tests
        </Link>
        <span className="link-border" />
        <Link className="hamburger-link" to="/UserProgress">
          Your Progress
        </Link>
      </nav>
      <i className="fa-solid fa-bars fa-2xl burger-btn"></i>
      <nav className="hamburger-navbar">
        <Link className="hamburger-link" to="/">
          Home
        </Link>
        <span className="link-border" />
        <Link className="hamburger-link" to="/ClassicTests">
          Classic Tests
        </Link>
        <span className="link-border" />
        <Link className="hamburger-link" to="/AdvancedTests">
          Advanced Tests
        </Link>
        <span className="link-border" />
        <Link className="hamburger-link" to="/UserProgress">
          Your Progress
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
