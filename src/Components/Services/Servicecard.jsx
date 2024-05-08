import React, { useState, useEffect } from "react";
import data from "./ServiceData";
import styles from "./Service.module.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { Link } from "react-router-dom";

const Servicecard = () => {
  // const isMobile = window.innerWidth <= 768; //slidesPerView={`${isMobile === true ? 1 : 3}`}
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={styles.Servicecard}>
      <center className={styles.heading}>Services we offer</center>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        modules={[EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={"auto"}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 4,
        }}
        className={styles.swiper1}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={item.title}
            className={`${styles.swiperslides} ${
              activeIndex === index ? styles.activeSlide : ""
            }`}
            style={{
              height: "325px",
              width: "300px",
            }}
          >
            <img className={styles.image} src={item.image} alt="" />
            <div className={styles.description}>
              <h1 className={styles.websitename}>{item.title}</h1>
              <div className={styles.logos}>
                <div className={styles.logo}>
                  <img className={styles.techoimg} src={item.logo1} alt="" />
                </div>
                <div className={styles.logo}>
                  <img className={styles.techoimg} src={item.logo2} alt="" />
                </div>
                <div className={styles.logo}>
                  <img className={styles.techoimg} src={item.logo3} alt="" />
                </div>
                <div className={styles.logo}>
                  <img className={styles.techoimg} src={item.logo4} alt="" />
                </div>
                <Link to={"./services"}>
                  {" "}
                  <GoPlusCircle className={styles.plusicon} />
                </Link>
              </div>
            </div>
            <Link to={"./services"}>
              <button
                className={`${styles.movebotton} ${
                  activeIndex === index ? styles.activeButton : ""
                }`}
              >
                <MdOutlineArrowOutward className={styles.arrow} />
              </button>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Servicecard;
