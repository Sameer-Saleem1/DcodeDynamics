import React from "react";
import styles from "./Ourteam.module.css";
import h from "./img/H.jpg";
import hs from "./img/HS.jpg";
import As from "./img/AS.jpg";
import ss from "./img/SS.jpg";

const Ourteam = () => {
  return (
    <div className={styles.maincontainer}>
      <center className={styles.heading}>Our Team</center>
      <div className={styles.first}>
        <div className={styles.firstleft}>
          <p className={styles.text}>Haseeb Qureshi</p>
          <div className={styles.mainpolygon}>
            <div className={styles.polygon}>
              <div className={styles.polygon1}>
                <img className={styles.img1} src={h} alt="" />
              </div>
            </div>
          </div>
          <p className={styles.des1}>Founder, CEO & UI/UX Designer</p>
        </div>
        <div className={styles.firstleft}>
          <p className={styles.text}>Huzaifa Shaikh</p>
          <div className={styles.mainpolygon}>
            <div className={styles.polygon}>
              <div className={styles.polygon1}>
                <img className={styles.img1} src={hs} alt="" />
              </div>
            </div>
          </div>
          <p className={styles.des1}>
            Co-Founder, Back-end Developer & Machine Learning Enthusiast
          </p>
        </div>
        <div className={styles.firstleft}>
          <p className={styles.text}>Sameer Saleem</p>
          <div className={styles.mainpolygon}>
            <div className={styles.polygon}>
              <div className={styles.polygon1}>
                <img className={styles.img1} src={ss} alt="" />
              </div>
            </div>
          </div>
          <p className={styles.des1}>
            Co-Founder, Full-Stack Developer & React Expert
          </p>
        </div>
        <div className={styles.firstleft}>
          <p className={styles.text}>Aba Salat</p>
          <div className={styles.mainpolygon}>
            <div className={styles.polygon}>
              <div className={styles.polygon1}>
                <img className={styles.img1} src={As} alt="" />
              </div>
            </div>
          </div>
          <p className={styles.des1}>
            Co-Founder, Front-end & Wordpress Developer
          </p>
        </div>
      </div>
      <center>
        <button className={styles.orderbutton}>Know more</button>
      </center>
    </div>
  );
};

export default Ourteam;
