import React from "react";
import img from "../assets/p-img.jpg";

function Header() {
  return (
    <>
      <header>
        <div className="row">
          <div className="col-md-6">
            <h1 className="header-text-1">Hi, I am Naishadh Chawra</h1>
            <h1 className="header-text-2">A Front-end Developer</h1>
            <p className="header-text-3">
              Get ready to turn ideas into reality
            </p>
            <button className="btn btn-hire">Hire Me</button>
            <button className="btn btn-resume">Get Resume</button>
          </div>
          <div className="col-md-6">
            <img src={img} alt="profile-img" className="p-img" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
