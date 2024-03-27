import "./Websites.css";
import data from "./WebsitesData";
import WebsiteCard from "./WebsiteCard";

function Websites() {
  return (
    <div className="website-container">
      {data.slice(0, 3).map((item) => (
        <WebsiteCard
          key={item.name}
          name={item.name}
          price={item.price}
          stars={item.stars}
        />
      ))}
    </div>
  );
}

export default Websites;
