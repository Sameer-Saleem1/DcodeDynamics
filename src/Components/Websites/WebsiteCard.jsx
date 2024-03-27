import "./Websites.css";
import mui from "./img/mui.png";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function WebsiteCard({ name, price }) {
  return (
    <div className="website-card">
      <div className="web-image">
        <img src={mui} alt="" />
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
          <p>${price}</p>
        </div>

        <div className="circle">
          <MdOutlineAddShoppingCart className="cart" />
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
