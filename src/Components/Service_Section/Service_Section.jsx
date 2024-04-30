import React, { useState, useEffect } from "react";
import "./Service_Section.css";
import { GoPlusCircle } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { TbFilterEdit } from "react-icons/tb";
import data from "./ServiceData";
import image from "./img/card3.jpg";

function Service_Section() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showOriginal, setShowOriginal] = useState(true);
  const [showAllDevelopment, setShowAllDevelopment] = useState(false);
  const [showAllDesign, setShowAllDesign] = useState(false);
  const [numInitialCards, setNumInitialCards] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        setNumInitialCards(2);
      } else if (screenWidth >= 600 && screenWidth < 882) {
        setNumInitialCards(4);
      } else {
        setNumInitialCards(8);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handleResize initially
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        filterData(search);
        setShowOriginal(false);
      } else {
        setShowOriginal(true);
        setFilteredData([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterData = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const toggleShowAllDevelopment = () => {
    setShowAllDevelopment(!showAllDevelopment);
  };

  const toggleShowAllDesign = () => {
    setShowAllDesign(!showAllDesign);
  };

  return (
    <div style={{ paddingTop: "6rem" }}>
      <div className="search">
        <div className="search-icon">
          <IoMdSearch />
          <hr />
        </div>
        <div className="search-bar">
          <input placeholder="Search" onChange={handleChange}></input>
        </div>
      </div>

      {showOriginal && renderOriginalData()}

      {!showOriginal && (
        <>
          <div className="heading">
            <h1>Search Results</h1>
          </div>
          {filteredData.length > 0 ? (
            renderFilteredData()
          ) : (
            <p style={{ textAlign: "center", color: "#2ff360" }}>
              No results found
            </p>
          )}
        </>
      )}
    </div>
  );

  function renderOriginalData() {
    return (
      <>
        <div className="heading">
          <h1>Web Development</h1>
        </div>
        <div className="cardcontainer">
          {data.slice(0, numInitialCards).map((item, index) => (
            <div key={item.title} className="card">
              <div className="left">
                <img className="image" src={image} alt="" />
              </div>
              <div className="right">
                <div className="description">
                  <h1 className="websitename">{item.title}</h1>
                  <div className="logos">
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <GoPlusCircle className="plusicon" />
                  </div>
                </div>
                <button className="movebotton">
                  <MdArrowOutward />
                </button>
              </div>
            </div>
          ))}
        </div>
        {!showAllDevelopment && (
          <div className="loadMoreButtonContainer">
            <button
              className="loadMoreButton"
              onClick={toggleShowAllDevelopment}
            >
              Load More
            </button>
          </div>
        )}

        <div className="heading">
          <h1>Design</h1>
        </div>
        <div className="cardcontainer">
          {data.slice(0, numInitialCards).map((item, index) => (
            <div key={item.title} className="card">
              <div className="left">
                <img className="image" src={image} alt="" />
              </div>
              <div className="right">
                <div className="description">
                  <h1 className="websitename">{item.title}</h1>
                  <div className="logos">
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <div className="logo"></div>
                    <GoPlusCircle className="plusicon" />
                  </div>
                </div>
                <button className="movebotton">
                  <MdArrowOutward />
                </button>
              </div>
            </div>
          ))}
        </div>
        {!showAllDesign && (
          <div className="loadMoreButtonContainer">
            <button className="loadMoreButton" onClick={toggleShowAllDesign}>
              Load More
            </button>
          </div>
        )}
      </>
    );
  }

  function renderFilteredData() {
    return (
      <div className="cardcontainer">
        {filteredData.map((item, index) => (
          <div key={item.title} className="card">
            <div className="left">
              <img className="image" src={image} alt="" />
            </div>
            <div className="right">
              <div className="description">
                <h1 className="websitename">{item.title}</h1>
                <div className="logos">
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <div className="logo"></div>
                  <GoPlusCircle className="plusicon" />
                </div>
              </div>
              <button className="movebotton">
                <MdArrowOutward />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Service_Section;
