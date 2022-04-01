import React from "react";
import { FaMailBulk, FaPhoneAlt, FaAddressCard } from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="container mt-5" id="contact">
        <h3 className="contact-heading">Contact Me</h3>
        <div className="row mt-5">
          <div className="col-md-6 p-5" style={{ backgroundColor: "white" }}>
            <h2 style={{ color: "#105652", fontSize: "26px" }} className='mt-5'>
              Let's connect
            </h2>
            <p style={{ color: "#333333" }} className='mt-3'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta…
            </p>
            <div className="contact-info">
              <div className="row mt-5">
                <div className="col-md-1">
                  <FaMailBulk />
                </div>
                <div className="col-md-1">
                  <p>n2chawra@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <FaPhoneAlt />
                </div>
                <div className="col-md-1">
                  <p>9754209231</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                  <FaAddressCard />
                </div>
                <div className="col-md-1">Bilaspur,CG</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-5" style={{ backgroundColor: '#FBF3E4' }}>
            <h3 style={{ color: "#105652", fontSize: "26px" }}>
              Send me a message
            </h3>

            <form>
              <div className="form-group">
                <label className="mt-3">First & Last Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label className="mt-3">Phone No</label>
                <input type="number" className="form-control" />
              </div>
              <div className="form-group">
                <label className="mt-3">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="form-group">
                <label className="mt-3">Message</label>
                <textarea
                  cols="30"
                  rows="3"
                  className="form-control"
                ></textarea>
              </div>
            </form>
            <button className="btn btn-send mt-4">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
