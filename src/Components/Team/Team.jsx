import React from "react";
import chacha from "./fbf-01.png";
import Qureshi from "./Untitled-1-02.png";
import Sameer from "./fbf-04.png";
import Salat from "./fbf-03.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

import "./Team.css";
function Team() {
  return (
    <>
      <div className="main">
        <div className="member">
          <div className="left">
            {" "}
            <img className="imaag" src={Qureshi} alt="" />
            <div className="icons">
              <MdEmail></MdEmail>
              <FaPhone></FaPhone>
            </div>
          </div>

          <div className="desc">
            <h2 className="naam">Haseeb Qureshi</h2>
            <h2 className="designation">Founder & CEO</h2>
            <p className="details">
              Haseeb Qureshi, a visionary leader with a Bachelor's degree in
              Computer Science, serves as the{" "}
              <span className="color">founder and CEO of Dcode Dynamics</span>.
              With over four years of rich and varied design experience, he
              seamlessly transitions into the realm of{" "}
              <span className="color">
                UI/UX design and Front-end Development
              </span>
              , where he masterfully blends technical expertise with aesthetic
              finesse. Guided by his leadership, Dcode Dynamics pioneers
              innovation, continuously crafting exceptional user experiences and
              reshaping the landscape of digital design and entrepreneurship.
              Haseeb's passion and vision serve as a beacon of inspiration,
              motivating others to strive for greatness in the industry.
            </p>
          </div>
        </div>

        <div className="member">
          <div className="left">
            {" "}
            <img className="imaag" src={Sameer} alt="" />
          </div>

          <div className="desc">
            <h2 className="naam">Sameer Saleem</h2>
            <h2 className="designation">Founder & CEO</h2>
            <p className="details">
              Meet Sameer Saleem, the{" "}
              <span className="color">
                Co-founder and Full Stack Developer at D-Code Dynamics
              </span>
              . With a passion for crafting dynamic and user-friendly websites,
              Sameer brings invaluable expertise to our team. Specializing in{" "}
              <span className="color">
                React.js, Express.js, Firebase, and MongoDB
              </span>
              , he leads the development of cutting-edge solutions that drive
              results. With over 1 year of experience in the field, Sameer’s
              commitment to excellence and innovation fuels our mission to
              deliver top-notch web solutions. Get to know Sameer and the rest
              of our talented team as we work together to shape the future of
              web development.
            </p>
          </div>
        </div>

        <div className="member">
          <div className="left">
            {" "}
            <img className="imaag" src={chacha} alt="" />
          </div>

          <div className="desc">
            <h2 className="naam">Huzaifa Shaikh</h2>
            <h2 className="designation">Founder & CEO</h2>
            <p className="details">
              Huzaifa Shaikh,{" "}
              <span>
                {" "}
                co-founder and full-stack developer at Dcode Dynamics
              </span>
              , excels in both frontend and backend development. With expertise
              across a wide range of technologies and frameworks, including{" "}
              <span className="color">
                React.js, Node.js, Python, and Mongo DB
              </span>
              , Huzaifa drives innovation and efficiency in software
              development. His versatile skill set enables him to deliver
              comprehensive solutions that meet diverse project requirements.
              With a keen eye for detail and a commitment to excellence, Huzaifa
              plays a pivotal role in shaping Dcode Dynamics' success and
              driving its mission forward in the digital realm.
            </p>
          </div>
        </div>

        <div className="member">
          <div className="left">
            {" "}
            <img className="imaag" src={Salat} alt="" />
          </div>

          <div className="desc">
            <h2 className="naam">Aba Salat</h2>
            <h2 className="designation">Founder & CEO</h2>
            <p className="details">
              Aba Salat,{" "}
              <span>co-founder and front-end developer at Dcode Dynamics</span>,
              specializes in React.js and WordPress development. Proficient in{" "}
              <span className="color">
                HTML, CSS, JavaScript, and Bootstrap
              </span>
              , Aba brings a passion for innovation and user-centric design to
              every project. With meticulous attention to detail, Aba crafts
              intuitive and visually appealing interfaces. Currently pursuing a
              bachelor's in Computer Science at Sukkur IBA University, Aba
              combines academic knowledge with practical experience to drive
              Dcode Dynamics' front-end development forward in the digital
              landscape.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
