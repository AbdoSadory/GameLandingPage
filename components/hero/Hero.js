import React from "react";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.hero_content} w-100 text-center m-0 p-0`}>
        <div className={`${styles.hero_content_image} m-auto my-4 p-0`}>
          <img
            className="w-100"
            src="/assets/images/logo/Logopng.png"
            title="hero img"
            alt="hero img"
          />
        </div>
        <div className={`my-4 mx-auto p-0`}>
          <a
            className={`${styles.play_now} text-capitalize red-gradient-background fw-bold d-block p-2 rounded-3`}
            href="#"
          >
            play now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
