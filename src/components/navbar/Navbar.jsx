import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <div className="left">
        <a href="">
          <img src="/logo.png" alt="" />
        </a>
        <a href="" className="link">
          Home
        </a>
        <a href="" className="link">
          About
        </a>
        <a href="" className="link">
          Contact
        </a>
        <a href="" className="link">
          Agents
        </a>
      </div>
      <div className="right">
        <a href="" className="link">
          Sign in
        </a>
        <a href="" className="register link">
          Sign up
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={handleClick} />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign in</a>
          <a href="">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
