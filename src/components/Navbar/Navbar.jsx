// Navbar.jsx
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
// import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Importing App.css

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="left-side">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-links">Our Team</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links">Services</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links">Technology</a>
              </li>
            </ul>
          </div>

          <div className="middle">
            <ul className='nav-menu'>
              <li className='nav-item'><img src="src\assets\D-codeLogo.png" alt="Dynamics" className="nav-image" /></li>
            </ul>
          </div>

          <div className="right-side">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#" className="nav-links">Order Now</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-links">Contact Us</a>
              </li>
              <li className="nav-item icon">
                <MdOutlineShoppingCart style={{ fontSize: "20px", marginRight: "1rem" }} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
