import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Wireframes</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Prototypes</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Data Visualization</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Desgin Quality Control</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Web Applications Design</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Database Programming</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Dynamic Sites</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Responsive Sites</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck className="service_list-icon" />
              <p>Photography</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>HQ Video Edition</p>
            </li>
            <li>
              <BsCheck className="service_list-icon" />
              <p>Social Media Growth</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
