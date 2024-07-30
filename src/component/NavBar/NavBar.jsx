import { useContext } from "react";

import "./NavBar.css";
// import logo from "../../assest/website-logo copy.avif";
import downArrow from "../../assest/down-chevron.png";

import NavLinkScroll from "./NavLink.jsx";

//store
import { navContext } from "../store/NavStore/NavStore";

export default function NavBar() {
  const { handleShowNavBox } = useContext(navContext);

  return (
    <nav className="navbar">
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <div></div>
      <ul className="main-list">
        <NavLinkScroll>Home</NavLinkScroll>
        <NavLinkScroll>About me</NavLinkScroll>
        <li onClick={handleShowNavBox}>
          Products <img src={downArrow} alt="down arrow" className="arrow" />
        </li>
        <li onClick={handleShowNavBox}>
          Web Design <img src={downArrow} alt="down arrow" className="arrow" />
        </li>
        <NavLinkScroll>Calculations</NavLinkScroll>
      </ul>
      <button className="btn">Contact ME</button>
    </nav>
  );
}
