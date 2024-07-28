import React from "react";
import Nav from "./Nav";
import Logo from "../assets/images/Logo.svg";

function Header() {
  return (
    <header>
      <div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
