import React, { JSX } from "react";
import "./Home.css";

function Home(): JSX.Element {
  return (
    <section id="home">
      <main className="container">
        <p className="intro-text">Hi, my name is</p>
        <h1 className="name">Albina Diakova.</h1>
        <h2 className="subtitle">I develop web applications.</h2>
        <p className="description">
          I'm a student completing my bachelor's degree in IT and Management.
          Currently, I'm expanding my skills by learning .NET and React, diving
          into both front-end and back-end development.
        </p>
      </main>
    </section>
  );
}

export default Home;
