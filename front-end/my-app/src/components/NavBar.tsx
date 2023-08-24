import { Link } from "react-router-dom";
import "../componentsStyling/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-md navbar-styles">
      <div className="container" id="nav-container">
        <div className="col-3">
          <a href="#" className="navbar-brand mb-0 h1">
            History Test 2.0
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-6 collapse navbar-collapse" id="navbarNav">
          <div className="container d-flex justify-content-end">
            <ul
              className="navbar-nav d-flex justify-content-end w-100"
              id="navbar-ul"
            >
              <li className="nav active">
                <a href="" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  id="navBarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tests
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Classic Tests
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Interactive Tests
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav active">
                <a href="#" className="nav-link active">
                  Your Progress
                </a>
              </li>

              <li className="nav active" id="menu-sign-in">
                <a href="#" className="nav-link active ">
                  Sign in
                </a>
              </li>

              <li className="nav active" id="menu-sign-up">
                <a href="#" className="nav-link active">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3 collapse navbar-collapse ">
          <div className="container d-flex justify-content-center">
            <button type="button" className="btn btn-primary" id="nav-sign-in">
              Sign in
            </button>
            <button type="button" className="btn btn-primary " id="nav-sign-up">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
