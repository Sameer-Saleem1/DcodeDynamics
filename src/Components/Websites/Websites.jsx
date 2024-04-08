import "./Websites.css";
import WebsitesCard from "./WebsitesCard";
import data from "../Tools/Toolslist";
import { Link } from "react-router-dom";
function Websites() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="website-container">
      <div className="website-container-heading">
        <h1>Order ready-made websites</h1>
      </div>
      <div className="cards">
        {isMobile === true
          ? data
              .slice(0, 1)
              .map((item, index) => (
                <WebsitesCard key={index} name={item.name} img={item.img} />
              ))
          : data
              .slice(0, 3)
              .map((item, index) => (
                <WebsitesCard key={index} name={item.name} img={item.img} />
              ))}
      </div>
      <Link to={"./order"}>
        <button className="btn">View More</button>
      </Link>{" "}
    </div>
  );
}

export default Websites;
