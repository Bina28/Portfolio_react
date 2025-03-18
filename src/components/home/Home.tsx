import React, { JSX } from 'react';
import './Home.css';


function Home():JSX.Element {
  return (
<main className="container">
      <p className="intro-text">Hi, my name is</p>
      <h1 className="name">Albina Diakova.</h1>
      <h2 className="subtitle">I build things for the web.</h2>
      <p className="description">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
        Currently, I’m focused on building accessible, human-centered products at <span className="highlight">Upstatement</span>.
      </p>

    </main>
  );
}

export default Home;