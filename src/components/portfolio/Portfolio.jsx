import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "RGB Calculator",
    github: "https://github.com/ClaudioIrianni/rgbDeg",
    demo: "https://claudioirianni.github.io/rgbDeg/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather",
    github: "https://github.com/ClaudioIrianni/rgbDeg",
    demo: "https://claudioirianni.github.io/rgbDeg/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Vaccine",
    github: "https://github.com/ClaudioIrianni/rgbDeg",
    demo: "https://claudioirianni.github.io/rgbDeg/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="__blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn"
                  target="__blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio;
