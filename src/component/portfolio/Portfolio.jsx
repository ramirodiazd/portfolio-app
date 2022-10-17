import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/lacantera.jpg";
import IMG2 from "../../assets/connect.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "La Cantera Trading & Crypto Academy",
    github: "https://www.github.com/ramirodiazd",
    demo: "https://www.lacanterainversiones.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Pilmic. Overseas Lifesuites",
    github: "https://www.github.com/ramirodiazd",
    demo: "https://www.pilmic.com",
  },
];

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className=" container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_items-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
