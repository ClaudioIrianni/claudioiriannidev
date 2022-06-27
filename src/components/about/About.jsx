import React from "react";
import "./about.css";
import ME from "../../assets/me2.png";
import { RiServiceLine } from "react-icons/ri";
import { GiTeamUpgrade } from "react-icons/gi";
import { BsHandThumbsUpFill} from "react-icons/bs"

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Claudio Alexis Irianni" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiServiceLine/>
              <h5>Empathy</h5>
            </article>

            <article className="about__card">
              <GiTeamUpgrade/>
              <h5>Teamwork</h5>
            </article>

            <article className="about__card">
              <BsHandThumbsUpFill/>
              <h5>Adaptability</h5>
            </article>
          </div>

          <p>
          Self-taught, willing to learn and develop in the best possible way in new technologies, assuming challenges that can develop me professionally; always responsible and committed to my duty
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
