import React, { JSX } from 'react';
import './App.css';
import Navbar  from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import Projects  from './components/projects/Projects';

function App(): JSX.Element {
  return (
     <div className="app-container">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
