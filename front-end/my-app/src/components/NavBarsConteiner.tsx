import NavBar from "./NavBar";
import Burger from "./Burger";
import { useState } from "react";
const NavBarContainer = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="navsContainer">
      <NavBar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <Burger setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
    </div>
  );
};

export default NavBarContainer;
