import "../componentsStyling/BurgerCSS.css";
import { Link } from "react-router-dom";

interface childComponentProps {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: boolean;
}

const Burger: React.FC<childComponentProps> = ({
  activeMenu,
  setActiveMenu,
}) => {
  const changeClasses = () => {
    setActiveMenu((currentState) => !currentState);
  };

  return (
    <aside className={"menu " + (activeMenu ? "active" : "")}>
      <nav className="menu-content">
        <Link className="hamburger-link" to="/" onClick={changeClasses}>
          Home
        </Link>

        <span className="link-border" />

        <Link
          className="hamburger-link"
          to="/ClassicTests"
          onClick={changeClasses}
        >
          Classic Tests
        </Link>

        <span className="link-border" />

        <Link
          className="hamburger-link"
          to="/AdvancedTests"
          onClick={changeClasses}
        >
          Advanced Tests
        </Link>

        <span className="link-border" />

        <Link
          className="hamburger-link"
          to="/UserProgress"
          onClick={changeClasses}
        >
          Your Progress
        </Link>
      </nav>
    </aside>
  );
};

export default Burger;
