import React from "react";
import styles from "./Ourteam.module.css";
import h from "./img/H.jpg";
import hs from "./img/HS.jpg";
import As from "./img/AS.jpg";
import ss from "./img/SS.jpg";

const Ourteam = () => {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.diagonaline}></div>
      <div className={styles.diagonaline1}></div>
      <div className={styles.diagonaline2}></div>

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
            <p className={styles.des1} style={{ width: "45%" }}>
              Founder, CEO & UI/UX Designer
            </p>
          </div>
        </div>
        <div className={styles.firstright}>
          <p className={styles.text}>Huzaifa Shaikh</p>
          <div className={styles.mainpolygon}>
            <div className={styles.polygon}>
              <div className={styles.polygon1}>
                <img className={styles.img1} src={hs} alt="" />
              </div>
            </div>
            <p className={styles.des1}>
              Co-Founder, Back-end Developer & Machine Learning Enthusiast
            </p>
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.secondleft}>
          <div className={styles.mainpolygon}>
            <div className={styles.polygon}>
              <div className={styles.polygon1}>
                <img className={styles.img1} src={ss} alt="" />
              </div>
            </div>
            <p className={styles.des2} style={{ width: "65%" }}>
              Co-Founder, Full-Stack Developer & React Expert
            </p>
          </div>
          <p className={styles.text1}>Sameer Saleem</p>
        </div>
        <div className={styles.secondright}>
          <div className={styles.mainpolygon}>
            <div className={styles.polygon}>
              <div className={styles.polygon1}>
                <img className={styles.img1} src={As} alt="" />
              </div>
            </div>
            <p className={styles.des2} style={{ width: "60%" }}>
              Co-Founder, Front-end & Wordpress Developer
            </p>
          </div>
          <p className={styles.text1} style={{ marginLeft: "2rem" }}>
            Aba Salat
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
