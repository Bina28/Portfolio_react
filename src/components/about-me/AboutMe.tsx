import "./AboutMe.css";
import myPicture from "../../assets/my-picture.webp";
import { JSX } from "react";

function AboutMe(): JSX.Element {
  return (
    <section id="about">
      <h1 className="first-header">
        <span>01. </span>About me
      </h1>
      <div className="about-section">
        <div className="about-text">
          <div className="about-intro">
            <p>
              During my studies, I developed a website for a security firm using
              <span className="highlight"> WordPress</span>. I later worked on a
              cocktail generator web app, where I combined front-end
              technologies like <span className="highlight">JavaScript</span>{" "}
              and
              <span className="highlight"> CSS</span> with{" "}
              <span className="highlight">Firebase</span> on the back end.
            </p>

            <p>
              Over time, I've grown more interested in
              <span className="highlight"> full-stack development</span>, and
              one of my latest projects is a language learning platform built
              with <span className="highlight">C#</span>,
              <span className="highlight"> SQL Server</span>,{" "}
              <span className="highlight">React</span>, and
              <span className="highlight"> TypeScript</span>.
            </p>
          </div>
          <p className="skill-title">
            Here are a few technologies I've been working with recently:
          </p>
          <div className="skill-container">
            <ul className="skills-list">
              <li className="skill-point">C#</li>
              <li className="skill-point">React</li>
              <li className="skill-point">SQL Server</li>
              <li className="skill-point">CosmosDB</li>
              <li className="skill-point">Microservices</li>
              <li className="skill-point">Azure Functions</li>
            </ul>
          </div>
        </div>

        <div className="about-img-container">
          <div className="about-img-wrapper">
            <img
              src={myPicture}
              className="about-img"
              alt="Picture of Albina Diakova"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
