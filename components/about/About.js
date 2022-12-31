import React from "react";
import styles from "./style.module.css";

const Hero = () => {
  return (
    <section className={`black-background m-0 p-4`}>
      <div className="row justify-content-between align-items-center m-0 p-0">
        <div className="col-12 col-md-4 col-lg-3 m-0 p-0">
          <img
            src="/assets/images/splash-art/Fight.jpg"
            className="w-100 rounded-4"
          />
        </div>
        <div
          className={`${styles.about__info} col-12 col-md-7 col-lg-8 p-0 align-self-stretch gray-background rounded-4 p-4`}
        >
          <p className="fw-bold text-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
            nesciunt dolorum mollitia dolore possimus sint at. Praesentium,
            officia pariatur? Magni quis vero ipsa sapiente magnam placeat
            ipsum! Minus, libero ducimus! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nisi, nesciunt dolorum mollitia dolore
            possimus sint at. Praesentium, officia pariatur? Magni quis vero
            ipsa sapiente magnam placeat ipsum! Minus, libero ducimus!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
