import React from "react";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container nav">
          <div className="logo">Naishadh Chawra</div>
          <div className="links">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
