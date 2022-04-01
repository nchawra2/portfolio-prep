import React from "react";
import img1 from "../assets/p-1.JPG";
import img2 from "../assets/p-2.JPG";
import img3 from "../assets/p-3.JPG";
import img4 from "../assets/p-4.JPG";
import img5 from "../assets/p-5.JPG";

function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <h2 className="port-heading">My Portfolio</h2>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 mb-3">
              <a href="https://nchawra2.github.io/todo-app-mobile/index.html">
                <img src={img1} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href="https://nchawra2.github.io/clock-app-js/">
                <img src={img2} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="col-md-4 mb-3">
              <a href="https://nchawra2.github.io/todo-app-js/">
                <img src={img3} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-md-4 mb-3 m-auto">
              <a href="https://naishadh-blog-react.netlify.app/">
                <img src={img4} alt="" className="img-fluid" />
              </a>
            </div>
            <div className="col-md-4 mb-3 m-auto">
              <a href="https://laughing-wright-07d303.netlify.app/">
                <img src={img5} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
