import React, { useState, useEffect } from "react";
import styles from "./Technology.module.css";
import data from "./Technologydata";

const Technology = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(isMobile ? 4 : 5);
  const [rotatedTriangles, setRotatedTriangles] = useState([]);
  const [triangleColors, setTriangleColors] = useState([]);

  useEffect(() => {
    setRotatedTriangles(new Array(data.length).fill(false));
    setTriangleColors(new Array(data.length).fill("var(--dark--)"));
  }, []);

  const toggleExpand = (index) => {
    // Check if the clicked card is already expanded
    const isCurrentlyExpanded = expandedIndex === index;

    // Toggle expanded index
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));

    // Toggle rotation and color state for the clicked card
    setRotatedTriangles(new Array(data.length).fill(false));
    setRotatedTriangles((prevState) =>
      prevState.map((val, i) => (i === index ? !val : false))
    );
    setTriangleColors(new Array(data.length).fill("var(--dark--)"));
    setTriangleColors((prevState) =>
      prevState.map((color, i) =>
        i === index
          ? color === "var(--dark--)"
            ? "var(--green--)"
            : "var(--dark--)"
          : color
      )
    );

    // Reset rotation and color state for the clicked card if it was already expanded
    if (isCurrentlyExpanded) {
      setRotatedTriangles((prevState) =>
        prevState.map((val, i) => (i === index ? false : val))
      );
      setTriangleColors((prevState) =>
        prevState.map((color, i) => (i === index ? "var(--dark--)" : color))
      );
    }
  };

  const handleLoadMore = () => {
    setVisibleItems(
      (prevVisibleItems) => prevVisibleItems + (isMobile ? 4 : 5)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.cardcontainer}>
        {data.slice(0, visibleItems).map((item, index) => (
          <div
            className={`${styles.card} ${
              index === expandedIndex ? styles.cardexpand : ""
            }`}
            key={item.title}
          >
            <div
              className={`${styles.image} ${
                index === expandedIndex ? styles.expandedImage : ""
              }`}
              onClick={() => toggleExpand(index)}
            >
              <img src={item.image} alt="" />
              <div className={styles.trianglecontainer}>
                <div
                  className={styles.triangle}
                  style={{
                    backgroundColor: triangleColors[index],
                    transform: rotatedTriangles[index]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                ></div>
              </div>
            </div>
            <div className={styles.description}>
              {index === expandedIndex && (
                <div className={styles.textcontaier}>
                  <p className={styles.text}>{item.text}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {data.length > visibleItems && (
        <button className={styles.loadmore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Technology;
