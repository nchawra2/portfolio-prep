import React from "react";
import img from "../assets/p-img.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";

function About() {
  return (
    <div className="container mt-5">
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6">
            <img src={img} alt="" className="p-img-2" />
          </div>
          <div className="col-md-6">
            <span className="about-heading">About Me</span>
            <p className="about-text-1">
              I'm a very passionate web developer. Skilled in various front end
              technologies like html,css,javascript,bootstrap,react and i have a
              very good hold on the UI development. I am able to replicate the
              design very well.
            </p>
            <p className="about-text-2">
              I'm always ready to learn new and modern tech stack related to
              development and add them to my portfolio. I believe i will be a
              valuable asset for your organization.
            </p>
            <div className="techs">
              <p className="tech-heading">Languages/Library/Technology</p>
              <FaHtml5 color="#E44D26" className="icon-tech" />
              <FaCss3Alt color="#3CADDD" className="icon-tech" />
              <FaBootstrap color="#563D7C" className="icon-tech" />
              <FaJs color="#F8E12E" className="icon-tech" />
              <FaReact color="#6CDDFB" className="icon-tech" />
              <FaGithub color="#000000" className="icon-tech" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
