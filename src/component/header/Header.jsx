import React from "react";
import "./header.css";
import Cta from "./CTA";
import Me from "../../assets/profile.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ramiro Diaz</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
