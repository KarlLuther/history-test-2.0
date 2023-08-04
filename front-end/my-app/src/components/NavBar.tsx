import { Link } from "react-router-dom";
import "../componentsStyling/NavBarCSS.css";

interface childComponentProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: boolean;
}

const NavBar: React.FC<childComponentProps> = ({
  setActiveMenu,
  activeMenu,
}) => {
  const changeClasses = () => {
    setActiveMenu((currentState) => !currentState);
  };

  return (
    <header>
      <h3 className="logo">History Test 2.0</h3>

      <nav className="full-nav">
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/ClassicTests">
          Classic Tests
        </Link>

        <Link className="nav-link" to="/AdvancedTests">
          Advanced Tests
        </Link>

        <Link className="nav-link" to="/UserProgress">
          Your Progress
        </Link>
      </nav>
      <label className="btn-hamburger">
        <input type="checkbox" onClick={changeClasses}></input>
      </label>
    </header>
  );
};

export default NavBar;
