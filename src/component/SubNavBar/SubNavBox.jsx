import { useContext } from "react";

import "./SubNavBar.css";
import LinkRouter from "./LinkRouter.jsx";

// store
import { navContext } from "../store/NavStore/NavStore.jsx";

export default function SubNavBox() {
  const { showNavBox, handleShowNavBox } = useContext(navContext);

  return (
    <div className={`sub-nav ${showNavBox ? "visible" : ""}`}>
      <ul className="dropdown">
        <LinkRouter to="/CO2membrane" onClick={handleShowNavBox}>
          CO2 Separating Membranes
        </LinkRouter>
        <LinkRouter onClick={handleShowNavBox}>Testing</LinkRouter>
      </ul>
    </div>
  );
}
