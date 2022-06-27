import React from "react";
import "./skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
            <h2>My Hard Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>React</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>ChakraUI</h4>
              <small className="text-light">Low</small></div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>Node.js</h4>
              <small className="text-light">Low</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>MongoDB</h4>
              <small className="text-light">Low</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
             <div><h4>MySQL</h4>
              <small className="text-light">Intermediate</small></div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div><h4>PHP</h4>
              <small className="text-light">Low</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
