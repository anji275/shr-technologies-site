import React, { useState } from "react";
import logo from "../assets/shrtech-logo.png"; // Make sure to place your uploaded logo in src/assets/

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo" onClick={() => scrollTo("home")}>
        <img src={logo} alt="SHR Technologies logo" className="logo-image" />
        <span className="logo-text">SHR Technologies</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-desktop">
        <ul>
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("services")}>Services</li>
          <li onClick={() => scrollTo("projects")}>Projects</li>
          <li onClick={() => scrollTo("techstack")}>Tech Stack</li>
          <li onClick={() => scrollTo("engagement")}>Engagement</li>
          <li onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="nav-mobile">
          <ul>
            <li onClick={() => scrollTo("home")}>Home</li>
            <li onClick={() => scrollTo("about")}>About</li>
            <li onClick={() => scrollTo("services")}>Services</li>
            <li onClick={() => scrollTo("projects")}>Projects</li>
            <li onClick={() => scrollTo("techstack")}>Tech Stack</li>
            <li onClick={() => scrollTo("engagement")}>Engagement</li>
            <li onClick={() => scrollTo("contact")}>Contact</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;