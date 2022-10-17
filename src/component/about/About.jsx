import React from "react";
import "./about.css";
import picOne from "../../assets/picone.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={picOne} alt="" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
            </article>
          </div>
          <p>
            Hi! I'm a Fullstack Developer from Neuquén, Argentina. I have
            serious passion for UI effects, animations and creating dynamic user
            experience.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's make something special
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
