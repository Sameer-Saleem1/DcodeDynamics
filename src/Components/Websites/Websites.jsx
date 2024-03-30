import "./Websites.css";
import mui from "./img/mui.png";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function Websites() {
  return (
    <div className="website-container">
      <div className="website-container-heading">
        <h1>Order ready-made websites</h1>
      </div>

      <div className="cards">
        <div className="website-card">
          <div className="web-image">
            <img src={mui} alt="" />
          </div>
          <div className="web-desc">
            <h2>E-commerce website</h2>
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

        <div className="website-card">
          <div className="web-image">
            <img src={mui} alt="" />
          </div>
          <div className="web-desc">
            <h2>Portfolio Website</h2>
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

        <div className="website-card">
          <div className="web-image">
            <img src={mui} alt="" />
          </div>
          <div className="web-desc">
            <h2>Blog Website</h2>
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

      <button className="btn">View More </button>
    </div>
  );
}

export default Websites;
