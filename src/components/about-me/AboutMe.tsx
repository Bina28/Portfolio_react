import "./AboutMe.css";
import myPicture from "../../assets/my-picture.png";
import { JSX } from "react";

function AboutMe(): JSX.Element {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">
            <span>01. </span>About me
          </h1>
          <p>
            Hi, I'm Albina! I'm studying IT and management at USN, where I gain
            a well-rounded learning experience in IT.
          </p>
          <br />
          <p>
            I have experience from a school project where I developed a website
            for a security firm using WordPress. Later, I worked with front-end
            technologies like JavaScript and CSS, as well as back-end Firebase,
            during the development of a cocktail-generating website. I also
            built a CRUD application in Java as part of a project to deepen my
            backend skills.
          </p>
          <br />
          <p>
            Recently, I've become interested in becoming a full-stack developer,
            and I'm building a language learning website to hone my skills in
            C#, SQL Server, TypeScript, and React.
          </p>
          <br />
          <p className="skill-title">Here are a few technologies I've been working with recently:</p>
          <div className="skill-container">
          <ul className="skills-list">
            <li className="skill-point">C# (.NET)</li>
            <li className="skill-point">React</li>
            <li className="skill-point">SQL Server</li>
            <li className="skill-point">CosmosDB</li>
            <li className="skill-point">Microservices</li>
            <li className="skill-point">Azure Functions</li>
              </ul>
          </div>

        
        </div>
        <div className="about-img">
          <img src={myPicture} alt="my-picture" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
