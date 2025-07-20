import React, { JSX } from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import logo from "../../assets/logo-mini.png";
import { useCallback } from "react";
import { List } from "phosphor-react";
import { X } from "phosphor-react";

function Navbar(): JSX.Element {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  const handleDownload = useCallback((): void => {
    const link = document.createElement("a");
    link.href = "/AlbinaDiakovaCV.pdf";
    link.setAttribute("download", "My_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      {screenSize > 785 && (
        <header className="header">
          <a href="#hero">
            <img src={logo} className="logo" alt="Portfolio Logo" />
          </a>
          <nav className="main-nav">
            <ul className="main-nav-list">
              <li>
                <a className="main-nav-link" href="#about">
                  <span>01.</span>About
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#projects">
                  <span>02.</span>Projects
                </a>
              </li>
              <li>
                <a className="main-nav-link" href="#contact">
                  <span>03.</span>Contact
                </a>
              </li>
              <li>
                <button
                  className="main-nav-link nav-btn"
                  onClick={handleDownload}
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
        </header>
      )}

      {/* Mobile Navigation */}

      {screenSize <= 785 && (
        <div className="navBarContainer">
          <a href="#hero" >
            <img src={logo} className="logo" alt="Logo" />
          </a>
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <List size={32} />
          </div>
        </div>
      )}

      {/* Mobilmeny Popup */}
      {menuOpen && (
        <div className="dialogStyle">
          <div className="popupHeader">
            <button className="closeButton" onClick={() => setMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <nav className="verticalNav">
            <ul className="verticalNavList">
              <li>
                <a href="#" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
