import React, { useState } from "react";
import data from "./ServiceData";
import styles from "./Service.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { GoPlusCircle } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const Servicecard = () => {
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
        slidesPerView={3}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        className={styles.swiper}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={item.title}
            className={`${styles.swiperslides} ${
              activeIndex === index ? styles.activeSlide : ""
            }`}
            style={{
              height: "350px",
              width: "300px",
            }}
          >
            <img className={styles.image} src={item.image} alt="" />
            <div className={styles.description}>
              <h1 className={styles.websitename}>{item.title}</h1>
              <div className={styles.logos}>
                <div className={styles.logo}></div>
                <div className={styles.logo}></div>
                <div className={styles.logo}></div>
                <div className={styles.logo}></div>
                <GoPlusCircle className={styles.plusicon} />
              </div>
            </div>
            <button
              className={`${styles.movebotton} ${
                activeIndex === index ? styles.activeButton : ""
              }`}
            >
              <HiArrowLongRight className={styles.arrow} />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Servicecard;