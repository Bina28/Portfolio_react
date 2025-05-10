import React, { JSX } from "react";
import './Navbar.css';
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from '../../assets/logo.png';
import { useCallback } from "react";
import { List } from "phosphor-react";
import {X} from "phosphor-react";


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
      {screenSize > 750 && (
        <nav className="nav-container">
            <a href="/" className="logo">
    <img src={logo} alt="Logo" />
  </a>
          <ul className="nav-list">
            <li className="nav-item"><a href="#about"><span>01.</span>About</a></li>
            <li className="nav-item"><a href="#projects"><span>02.</span>Projects</a></li>
                  <li className="nav-item"><a href="#contact"><span>03.</span>Contact</a></li>
            <li className="nav-item"><button onClick={handleDownload}>Resume</button></li>
          </ul>
        </nav>
      )}

      {/* Mobile Navigation */}
      {screenSize <= 750 && (
        <div className="navBarContainer">
              <a href="/" className="logo">
    <img src={logo} alt="Logo" />
  </a>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <List size={32}  />
          </div>

          {/* Mobile Menu Popup */}
          {menuOpen && (
            <div className="popupContainer" onClick={() => setMenuOpen(false)}>
              <div className="dialogStyle" onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <div className="boxStyle">
                <div className="mainContent">
                <div className="popupHeader">
                  <button className="closeButton" onClick={() => setMenuOpen(false)}>
                    <X size={32}  />
                  </button>
                  </div>
                  </div>
                  <div className="verticalNav">
                    <a href="#">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>                    
                    <a href="#contact">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;


