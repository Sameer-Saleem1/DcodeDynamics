import React from "react";
import "./Websites.css";
import mui from "./img/mui.png";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function WebsitesCard({ name, img }) {
  return (
    <div>
      <div className="website-card">
        <div className="web-image">
          <img src={img} alt="" />
        </div>
        <div className="web-desc">
          <h2>{name}</h2>
          <div className="stars">
            <p>
              <RiStarSFill className="star-color" />
              <RiStarSFill className="star-color" />
              <RiStarSFill className="star-color" />
              <RiStarSFill className="star-color" />
              <RiStarSFill style={{ fontSize: "20px" }} />
            </p>
            <p>$25</p>
          </div>

          <div className="circle">
            <MdOutlineAddShoppingCart className="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsitesCard;
