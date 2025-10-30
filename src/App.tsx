import React, { JSX } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/hero/Hero";
import AboutMe from "./components/about-me/AboutMe";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import Contact from  "./components/contact/Contact";
import { projects } from "./components/projects/ProjectList";

function App(): JSX.Element {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects projects={projects} />    
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
