import React, { useState, useEffect } from "react";
import styles from "./Technology.module.css";
import data from "./Technologydata";

const Technology = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState(isMobile ? 2 : 5);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const handleLoadMore = () => {
    setVisibleItems(
      (prevVisibleItems) => prevVisibleItems + (isMobile ? 2 : 5)
    );
  };
  // Add event listener to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
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
                {" "}
                <div
                  className={`${styles.triangle} ${
                    index === expandedIndex ? styles.triangle1 : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className={styles.description}>
              {index === expandedIndex && (
                <div className={styles.textcontaier}>
                  <p className={styles.text}>
                    React is a JavaScript library for building user interfaces,
                    developed by Facebook
                  </p>
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
