import { useState, useEffect } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav className={`navbar navbar-expand fixed-top ${scrolled ? "navbar-light bg-white shadow" : "navbar-dark bg-transparent"}`}>

      <div className="container">

        {/* Brand */}
        <a className="navbar-brand fw-bold text-warning">
          Sagar Dev
        </a>

        {/* Menu */}
        <div className="d-flex align-items-center ms-auto">

          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>

        <button
          className="nav-link hire-btn ms-3"
          onClick={() => window.dispatchEvent(new Event("openHireModal"))}
        >
          Hire Me
        </button>

        </div>

      </div>

    </nav>

  );
}