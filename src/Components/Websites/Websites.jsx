import "./Websites.css";
import WebsitesCard from "./WebsitesCard";
import data from "../Tools/Toolslist";
import { Link } from "react-router-dom";
function Websites() {
  return (
    <div className="website-container">
      <div className="website-container-heading">
        <h1>Order ready-made websites</h1>
      </div>
      <div className="cards">
        {data.slice(0, 3).map((item, index) => (
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
