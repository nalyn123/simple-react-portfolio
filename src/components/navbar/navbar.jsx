import { useNavbar } from "./navbar-model";
import "./navbar.scss";
import { Logo } from "@assets/images";
import React from "react";

const Navbar = () => {
  const { hash, burgerActive, onBurgerClick, onClick } = useNavbar();

  return (
    <nav className={"navbar"}>
      <div className={"navbar__header"}>
        <div className={"navbar__logo"}>R</div>

        <button
          className={`${"navbar__btn"} ${
            burgerActive ? "navbar__btn__active" : ""
          }`}
          onClick={onBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`${"navbar__menu"} ${
          burgerActive ? "navbar__menu__active" : ""
        }`}
      >
        <ul>
          <li className={`${!hash || hash === "#home" ? "active" : ""}`}>
            <button onClick={() => onClick("home")}>Home</button>
          </li>
          <li className={`${hash === "#intro" ? "active" : ""}`}>
            <button onClick={() => onClick("intro")}>Intro</button>
          </li>
          <li className={`${hash === "#works" ? "active" : ""}`}>
            <button onClick={() => onClick("works")}>Works</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
