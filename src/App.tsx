import React, { JSX } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutMe from "./components/about-me/AboutMe";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from  "./components/Contact/Contact";

function App(): JSX.Element {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />    
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
