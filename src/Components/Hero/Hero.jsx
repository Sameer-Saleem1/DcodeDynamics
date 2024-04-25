import React from "react";
import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.heading}>Transforming ideas into</h1>
        <h1 className={styles.heading}>Digital Masterpieces</h1>
        <p className={styles.text}>
          Your Partner in Digital Innovation and Growth
        </p>
        <div className={styles.buttons}>
          <Link to={"./order"}>
            <button className={styles.orderbutton}>Order Now</button>
          </Link>
          <p
            className={styles.or}
            style={{
              fontSize: "30px",
              color: "var(--light--)",
            }}
          >
            or
          </p>
          <Link to={"./services"} className={styles.services}>
            <p>View Services</p>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.ploygon3}>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
        </div>
        <div className={styles.ploygon4}>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
        </div>
        <div className={styles.ploygon3}>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>{" "}
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
        </div>
        <div className={styles.ploygon2}>
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>{" "}
          <div className={styles.ploygon}>
            <div className={styles.ploygon1}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
