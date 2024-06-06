import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    console.log("clicked");
    setOpenMenu(!openMenu);
  };
  return (
    <nav>
      <div className="left">
        <Link to={"/"}>
          <img src="/logo.png" alt="" />
        </Link>
        <Link to={"/"} className="link">
          Home
        </Link>
        <Link to={""} className="link">
          About
        </Link>
        <Link to={""} className="link">
          Contact
        </Link>
        <Link to={""} className="link">
          Agents
        </Link>
      </div>
      <div className="right">
        <Link to={""} className="link">
          Sign in
        </Link>
        <Link to={""} className="register link">
          Sign up
        </Link>
        <div className="menuIcon">
          <img src="/menu.png" alt="" onClick={handleClick} />
        </div>
        <div className={openMenu ? "menu active" : "menu"}>
          <Link to={""}>Home</Link>
          <Link to={""}>About</Link>
          <Link to={""}>Contact</Link>
          <Link to={""}>Agents</Link>
          <Link to={""}>Sign in</Link>
          <Link to={""}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
