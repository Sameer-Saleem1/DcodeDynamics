import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-side">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/team" className="nav-links">
                  Our Team
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-links">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tech" className="nav-links">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div className="middle">
            <ul className="nav-menu">
              <li className="nav-item">
                <img
                  src="src\assets\D-codeLogo.png"
                  alt="Dynamics"
                  className="nav-image"
                />
              </li>
            </ul>
          </div>

          <div className="right-side">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/order" className="nav-links">
                  Order Now
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-links">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item icon">
                <MdOutlineShoppingCart
                  style={{ fontSize: "20px", marginRight: "1rem" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
