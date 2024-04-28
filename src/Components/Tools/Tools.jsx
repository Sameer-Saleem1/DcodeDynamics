import React from "react";
import "./Tools.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import list from "./Toolslist";
import ToolsCard from "./ToolsCard";

function Tools() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="tools-container">
      <h1>Tools we use</h1>
      <div className="octagon-main-container">
        <Carousel
          responsive={responsive}
          slidesToSlide={1}
          draggable={true}
          swipeable={true}
          arrows={true}
          infinite={true}
        >
          {list.map((list) => (
            <div className="octagon-container">
              <ToolsCard key={list.img} name={list.name} img={list.img} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Tools;
