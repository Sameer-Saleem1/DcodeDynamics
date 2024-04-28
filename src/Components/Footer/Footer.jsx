import React from "react";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="svg"
      >
        <path
          fill="#2FF360"
          fillOpacity="100"
          d="M0,160L80,138.7C160,117,320,75,480,90.7C640,107,800,181,960,213.3C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <div className="box">
        <div className="head">
          <h2 className="contactUs">Contact us</h2>
          <div className="contactDetails">
            <section>
              <MdCall style={{ fontSize: "24px", marginBottom: "10px" }} />
            </section>
            <section>
              <MdEmail style={{ fontSize: "24px", marginBottom: "10px" }} />
            </section>
            <section>
              <FaLinkedin style={{ fontSize: "24px", marginBottom: "10px" }} />
            </section>
            <section>
              <FaMapLocationDot
                style={{ fontSize: "24px", marginBottom: "10px" }}
              />
            </section>
          </div>
        </div>
        <div className="text">
          <p>+92 3318921216</p>
          <p>dcodedynamics01@gmail.com</p>
          <p>dcodedynamics</p>
          <p>Mission road, beside Aqsa tower, Sukkur</p>
        </div>

        <div className="query">
          <textarea
            className="TA textName"
            name="text"
            id=""
            placeholder="Full name"
            style={{ caretColor: "white" }}
          ></textarea>

          <textarea
            className="TA email"
            name="text"
            id=""
            cols="150"
            rows="6"
            placeholder="Email or Phone"
            style={{ caretColor: "white" }}
          ></textarea>
          <textarea
            className="TA inquire"
            name="text"
            id=""
            cols="150"
            rows="4"
            placeholder="Send us your queries or report a problem here"
            style={{ caretColor: "white" }}
          ></textarea>

          <FaLocationArrow className="sendicon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

// checkig
