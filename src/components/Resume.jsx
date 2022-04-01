import React from "react";
import img from "../assets/p-img.jpg";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <div className="resume" id="resume">
        <div className="container">
          <div className="resume-heading">Resume</div>

          <div className="row mt-5">
            <div className="col-md-8">
              <h3 className="education-heading">Education</h3>
              <hr />

              <div className="edu-details">
                <div className="design">
                  <div className="circle"></div>
                  <div className="v-hr"></div>
                </div>
                <div className="details">
                  <div className="uni-detail">
                    <p className="uni">
                      Chattisgarh Swami Vivekanand University
                    </p>
                    <button className="pass-out">2016-2020</button>
                  </div>
                  <p className="degree">
                    Bachelor of Technology [ Information Technology ]
                  </p>
                  <p className="degree-info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae numquam, at sint enim officiis similique porro
                    temporibus corrupti excepturi amet?
                  </p>
                </div>
              </div>

              <div className="edu-details">
                <div className="design">
                  <div className="circle"></div>
                  <div className="v-hr"></div>
                </div>
                <div className="details">
                  <div className="uni-detail">
                    <p className="uni">Kendriya Vidyalaya Bilaspur</p>
                    <button className="pass-out">2016</button>
                  </div>
                  <p className="degree">Senior Secondary Education</p>
                  <p className="degree-info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae numquam, at sint enim officiis similique porro
                    temporibus corrupti excepturi amet?
                  </p>
                </div>
              </div>

              <div className="edu-details">
                <div className="design">
                  <div className="circle"></div>
                  <div className="v-hr"></div>
                </div>
                <div className="details">
                  <div className="uni-detail">
                    <p className="uni">Kendriya Vidyalaya Bilaspur</p>
                    <button className="pass-out">2014</button>
                  </div>
                  <p className="degree">Higher Secondary Education</p>
                  <p className="degree-info">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repudiandae numquam, at sint enim officiis similique porro
                    temporibus corrupti excepturi amet?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src={img} alt="" className="img-fluid img-3" />
              <div className="p-links">
                <FaLinkedin size={50} />
                <FaGithubSquare size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
