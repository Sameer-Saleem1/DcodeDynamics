import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "./OrderNow.css";
import "../Websites/Websites.css";
import WebsitesCard from "../Websites/WebsitesCard";
import ui from "../Tools/img/ui.png";
import graphic from "../Tools/img/graphic.png";
import web from "../Tools/img/web.png";
import app from "../Tools/img/app.png";
import data from "../Websites/WebsitesData";
import haseeb from "../Tools/img/haseeb.jpeg";
import sameer from "../Tools/img/Sameer-black-hoodie.jpg";
import salat from "../Tools/img/salat.jpeg";
import chacha from "../Tools/img/chacha.jpeg";

function OrderNow() {
  const isMobile = window.innerWidth <= 768;

  const [search, setSearch] = useState("");
  const [visibleItems, setVisibleItems] = useState(isMobile === true ? 1 : 3); // Initial number of visible items
  const [filteredData, setFilteredData] = useState(data); // State to store filtered data
  const [selectedCategory, setSelectedCategory] = useState(""); // State to track the selected category

  useEffect(() => {
    // Filter the data based on the search input
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search]);

  const filterData = (category) => {
    setSelectedCategory(category); // Update the selected category state
    const filtered = data.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleLoadMore = () => {
    // Increase the number of visible items by a certain amount when "Load More" button is clicked
    isMobile === true
      ? setVisibleItems((prevVisibleItems) => prevVisibleItems + 1)
      : setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  };

  return (
    <div className="OrderNow-container">
      <div className="search">
        <div className="search-icon">
          <IoMdSearch />
          <hr />
        </div>
        <div className="search-bar">
          <input placeholder="Search" onChange={handleChange}></input>
        </div>
      </div>

      {!search && ( // Render marquee and other elements only if there's no search query
        <>
          <marquee behavior="scroll" direction="left" scrollamount="10">
            {/* {data.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt={`Image ${index + 1}`}
                className="marquee-image"
              />
            ))}
            {data.map((item, index) => (
              <img
                key={`copy-${index}`}
                src={item.img}
                alt={`Image ${index + 1}`}
                className="marquee-image"
              />
            ))} */}

            <img
              src={haseeb}
              alt=""
              style={{ width: "150px", marginRight: "1.5rem", height: "200px" }}
              className="marquee-image"
            />
            <img
              src={chacha}
              alt=""
              style={{
                width: "150px",
                marginRight: "1.5rem",
                height: "200px",
                objectFit: "cover",
              }}
              className="marquee-image"
            />
            <img
              src={sameer}
              alt=""
              style={{ width: "150px", marginRight: "1.5rem", height: "200px" }}
              className="marquee-image"
            />
            <img
              src={salat}
              alt=""
              style={{ width: "150px", height: "200px" }}
              className="marquee-image"
            />
          </marquee>

          <div className="button-container">
            <button
              className={selectedCategory === "UI/UX Design" ? "bg-green" : ""}
              onClick={(e) => filterData("UI/UX Design")}
            >
              <img src={ui} alt="" /> <p>UI/UX Design</p>
            </button>

            <button
              className={
                selectedCategory === "Graphic Design" ? "bg-green" : ""
              }
              onClick={(e) => filterData("Graphic Design")}
            >
              <img src={graphic} alt="" />
              <p>Graphic Design</p>
            </button>

            <button
              className={
                selectedCategory === "Web Development" ? "bg-green" : ""
              }
              onClick={(e) => filterData("Web Development")}
            >
              <img src={web} alt="" />
              <p>Web Development</p>
            </button>

            <button
              className={
                selectedCategory === "App Development" ? "bg-green" : ""
              }
              onClick={(e) => filterData("App Development")}
            >
              <img src={app} alt="" style={{ width: "35px" }} />{" "}
              <p>App Development</p>
            </button>
          </div>

          <hr />
        </>
      )}

      <div className="website-container">
        <div className="cards">
          {filteredData.slice(0, visibleItems).map((item, index) => (
            <WebsitesCard key={index} name={item.name} img={item.img} />
          ))}
        </div>

        {visibleItems < filteredData.length && (
          <button className="viewMore btn" onClick={handleLoadMore}>
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderNow;
