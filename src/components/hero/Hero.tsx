import React, { JSX } from "react";
import "./Hero.css";

function Hero(): JSX.Element {
  return (
    <section id="hero" className="hero-section">
      <p className="hero-intro highlight">Hi, my name is</p>
      <h1 className="hero-name">Albina Diakova.</h1>
      <h2 className="hero-subtitle">I'm a fullstack web developer.</h2>
      <p className="hero-description">
        I'm passionate about building modern web applications using .NET and
        React, working across both front-end and back-end to create responsive,
        user-focused solutions.
      </p>
    </section>
  );
}

export default Hero;
