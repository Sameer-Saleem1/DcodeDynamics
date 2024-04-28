import React from "react";
import chacha from "./fbf-01.png";
import Qureshi from "./Untitled-1-02.png";
import Sameer from "./fbf-04.png";
import Salat from "./fbf-03.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import "./Team.css";
function Team() {
  return (
    <>
      <div className="main">
        <h2 className="heading">Our Team</h2>
        <div className="member">
          <img className="imgs" src={Qureshi} alt="" />
          <div className="desc">
            <h2 className="naam">Haseeb Qureshi</h2>
            <h2 className="designation">Founder & CEO</h2>

            <p className="details">
              Haseeb Qureshi, a visionary leader with a Bachelor's degree in
              Computer Science, serves as the{" "}
              <span className="colorg">founder and CEO of Dcode Dynamics</span>.
              With over four years of rich and varied design experience, he
              seamlessly transitions into the realm of{" "}
              <span className="colorg">
                UI/UX design and Front-end Development
              </span>
              , where he masterfully blends technical expertise with aesthetic
              finesse. Guided by his leadership, Dcode Dynamics pioneers
              innovation, continuously crafting exceptional user experiences and
              reshaping the landscape of digital design and entrepreneurship.
              Haseeb's passion and vision serve as a beacon of inspiration,
              motivating others to strive for greatness in the industry.
            </p>
            <div className="connect">
              <MdEmail className="log" />
              <span className="design">
                {" "}
                <a
                  className="anchor"
                  href="mailto:qureshihaseebullah66@gmail.com"
                  target="_blank"
                >
                  qureshihaseebullah66@gmail.com
                </a>{" "}
              </span>
              <FaPhone className="log2" />{" "}
              <span className="design">
                <a
                  href="https://web.whatsapp.com/send?phone=923318921216"
                  className="anchor"
                  target="_blank"
                >
                  +92 331 8921216
                </a>
              </span>{" "}
              <FaLinkedin className="log2" />
              <span className="design">
                {" "}
                <a
                  href="https://www.linkedin.com/in/haseebullah-qureshi-270b1b254/"
                  className="anchor"
                  target="_blank"
                >
                  {" "}
                  Haseeb Qureshi
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="memberL">
          <div className="descr">
            <h2 className="naam">Sameer Saleem</h2>
            <h2 className="designation">Full-Stack Developer</h2>
            <p className="details">
              Meet Sameer Saleem, the{" "}
              <span className="colorg">
                Co-founder and Full Stack Developer at D-Code Dynamics
              </span>
              . With a passion for crafting dynamic and user-friendly websites,
              Sameer brings invaluable expertise to our team. Specializing in{" "}
              <span className="colorg">
                React.js, Express.js, Firebase, and MongoDB
              </span>
              , he leads the development of cutting-edge solutions that drive
              results. With over 1 year of experience in the field, Sameer’s
              commitment to excellence and innovation fuels our mission to
              deliver top-notch web solutions. Get to know Sameer and the rest
              of our talented team as we work together to shape the future of
              web development.
            </p>
            <div className="connectR">
              <MdEmail className="log" />
              <span className="design">
                {" "}
                <a
                  className="anchor"
                  href="mailto:qureshihaseebullah66@gmail.com"
                  target="_blank"
                >
                  sameersaleemq75@gmail.com
                </a>{" "}
              </span>
              <FaPhone className="log2" />{" "}
              <span className="design">
                <a
                  href="https://web.whatsapp.com/send?phone=923079318977"
                  className="anchor"
                  target="_blank"
                >
                  +92 307 9318977
                </a>
              </span>{" "}
              <FaLinkedin className="log2" />
              <span className="design">
                {" "}
                <a
                  href="https://www.linkedin.com/in/sameer-saleem-4898b0221/"
                  className="anchor"
                  target="_blank"
                >
                  {" "}
                  Sameer Saleem
                </a>
              </span>
            </div>
          </div>
          <img className="imgsr" src={Sameer} alt="" />
        </div>

        <div className="member">
          <img className="imgs" src={chacha} alt="" />
          <div className="desc">
            <h2 className="naam">Huzaifa Shaikh</h2>
            <h2 className="designation">Front-End Developer</h2>
            <p className="details">
              Huzaifa Shaikh,{" "}
              <span className="colorg">
                {" "}
                co-founder and full-stack developer at Dcode Dynamics
              </span>
              , excels in both frontend and backend development. With expertise
              across a wide range of technologies and frameworks, including{" "}
              <span className="colorg">
                React.js, Node.js, Python, and Mongo DB
              </span>
              , Huzaifa drives innovation and efficiency in software
              development. His versatile skill set enables him to deliver
              comprehensive solutions that meet diverse project requirements.
              With a keen eye for detail and a commitment to excellence, Huzaifa
              plays a pivotal role in shaping Dcode Dynamics' success and
              driving its mission forward in the digital realm.
            </p>
            <div className="connect">
              <MdEmail className="log" />
              <span className="design">
                {" "}
                <a
                  className="anchor"
                  href="mailto:huzaifahs90@gmail.com"
                  target="_blank"
                >
                  huzaifahs90@gmail.com
                </a>{" "}
              </span>
              <FaPhone className="log2" />{" "}
              <span className="design">
                <a
                  href="https://web.whatsapp.com/send?phone=923113404111"
                  className="anchor"
                  target="_blank"
                >
                  +92 311 3404111
                </a>
              </span>{" "}
              <FaLinkedin className="log2" />
              <span className="design">
                {" "}
                <a
                  href="https://www.linkedin.com/in/muhammad-huzaifa-shaikh-039682289/"
                  className="anchor"
                  target="_blank"
                >
                  {" "}
                  Huzaifa Sheikh
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="memberL">
          <div className="descr">
            <h2 className="naam">Aba Salat</h2>
            <h2 className="designation">Front-end & WordPress Developer</h2>
            <p className="details">
              Aba Salat,{" "}
              <span className="colorg">
                co-founder and front-end developer at Dcode Dynamics
              </span>
              , specializes in React.js and WordPress development. Proficient in{" "}
              <span className="colorg">
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
            <div className="connectR">
              <MdEmail className="log" />
              <span className="design">
                {" "}
                <a
                  className="anchor"
                  href="mailto:abasalat2023@gmail.com"
                  target="_blank"
                >
                  abasalat2023@gmail.com
                </a>{" "}
              </span>
              <FaPhone className="log2" />{" "}
              <span className="design">
                <a
                  href="https://web.whatsapp.com/send?phone=923138023211"
                  className="anchor"
                  target="_blank"
                >
                  +92 313 8023211
                </a>
              </span>{" "}
              <FaLinkedin className="log2" />
              <span className="design">
                {" "}
                <a
                  href="https://www.linkedin.com/in/aba-salat-bhanbhro-72a00b239/"
                  className="anchor"
                  target="_blank"
                >
                  {" "}
                  Aba Salat
                </a>
              </span>
            </div>
          </div>
          <img className="imgsr" src={Salat} alt="" />
        </div>

        <div className="Goal">
          <h2 className="heading">Our Goal</h2>
          <p className="details" style={{ textAlign: "center" }}>
            <span className="colorg">"</span>At Dcode Dynamics, collaboration
            lies at the heart of our ethos. We believe in the power of teamwork
            to fuel creativity and drive results. Our interdisciplinary approach
            brings together talented individuals from diverse backgrounds, each
            contributing their unique skills and perspectives to every project.
            From developers and designers to project managers and marketers, we
            work seamlessly together, united by a shared goal: to exceed our
            clients' expectations. Through open communication, mutual respect,
            and a spirit of innovation, we foster an environment where ideas
            flourish and solutions emerge. Together, we transform visions into
            reality, delivering outstanding outcomes that propel our clients'
            success in the digital landscape.<span className="colorg">"</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Team;
