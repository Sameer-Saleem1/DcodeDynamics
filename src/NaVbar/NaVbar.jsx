import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css"; // Importing App.css
import { Link } from "react-router-dom";
import Logo from "./D-codeLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const NaVbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setShowNavLinks(false);
  };

  return (
    <>
      <div className="nav-barL">
        <Link
          to="/team"
          className={`link-decoM ${activeLink === "team" ? "active" : ""}`}
          onClick={() => handleLinkClick("team")}
        >
          Our Team
        </Link>

        <Link
          to="/services"
          className={`link-decoM ${activeLink === "services" ? "active" : ""}`}
          onClick={() => handleLinkClick("services")}
        >
          Services
        </Link>

        <Link
          to="/tech"
          className={`link-decoM ${
            activeLink === "technology" ? "active" : ""
          }`}
          onClick={() => handleLinkClick("technology")}
        >
          Technology
        </Link>

        <div className="Mlogo">
          <Link to="./">
            {" "}
            <img src={Logo} alt="" className="DcodeM" />
          </Link>
        </div>
        <Link
          to="/order"
          className={`link-decoM ${activeLink === "order-now" ? "active" : ""}`}
          onClick={() => handleLinkClick("order-now")}
        >
          Order now
        </Link>
        <Link
          to="#footer"
          className={`link-decoM ${activeLink === "contact" ? "active" : ""}`}
          onClick={() => handleLinkClick("contact-us")}
        >
          Contact us
        </Link>
        <Link className="link-decoM">
          <MdOutlineShoppingCart />
        </Link>
      </div>

      {/* Small screensize navbar */}
      <div className="nav-barpp">
        <div className="hamclick" onClick={toggleNavLinks}>
          <Link>
            <RxHamburgerMenu className="icons" />
          </Link>
          {showNavLinks && (
            <div className="navlinks">
              <Link
                to="/team"
                className={`link-deco ${activeLink === "team" ? "active" : ""}`}
                onClick={() => handleLinkClick("team")}
              >
                Our Team
              </Link>
              <Link
                to="/services"
                className={`link-deco ${
                  activeLink === "services" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("services")}
              >
                Services
              </Link>
              <Link
                to="/tech"
                className={`link-deco ${
                  activeLink === "technology" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("technology")}
              >
                Technology
              </Link>
              <Link
                to="/order"
                className={`link-deco ${
                  activeLink === "order" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("order-now")}
              >
                Order now
              </Link>
              <Link
                to="#footer"
                className={`link-deco ${
                  activeLink === "contact-us" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("contact-us")}
              >
                Contact us
              </Link>
            </div>
          )}
        </div>
        <Link to={"./"}>
          <img src={Logo} alt="" className="Dcode" />
        </Link>
        <MdOutlineShoppingCart className="icons" />
      </div>
    </>
  );
};

export default NaVbar;
