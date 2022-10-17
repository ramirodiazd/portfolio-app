import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer_logo">
        RAMIRO DIAZ
      </a>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Potfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com">
          <FiLinkedin />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Ramiro Diaz Developer. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
