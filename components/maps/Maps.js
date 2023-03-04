import React from "react";
import styles from "./style.module.scss";

const Maps = () => {
  return (
    <section className={`${styles.maps_section}`} id="maps_section">
      <h2 className="d-none">maps section</h2>
      <div
        className={`${styles.maps_section_bg} text-uppercase`}
        id="maps_section_bg"
      >
        place
      </div>
      <div className={`${styles.maps_section_bg_2}`}>
        <img
          className={`${styles.maps_section_bg_2_image}`}
          alt="maps background"
          src="assets/images/maps-03ebbf2c074f13a65af1dba0c80f767e.png"
        />
      </div>
      <div className={`${styles.maps_section_bg_3}`}>
        <img
          alt="maps background"
          src="assets/images/birds-e038b522474ce3a3104f482100815770.png"
        />
      </div>
      <div className={`${styles.main_container} main_container`}>
        <div className={`${styles.maps_section_left_content}`}>
          <h2 className={`${styles.maps_section_header} text-uppercase`}>
            your maps
          </h2>
          <h3 className={`${styles.maps_section_title} text-uppercase`}>
            FIGHT AROUND THE WORLD.
          </h3>
          <p className={`${styles.maps_section_para}`}>
            Each map is a playground to showcase your creative thinking.
            Purpose-built for team strategies, spectacular plays, and clutch
            moments. Make the play others will imitate for years to come.
          </p>
          <div className={`${styles.maps_section_content_maps_container}`}>
            <div className={`${styles.maps_section_btn_border} btn_border`}>
              <a
                className={`${styles.maps_section_primary_btn} primary_btn text-decoration-none d-block text-uppercase`}
                title="view maps"
              >
                view all maps
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.maps_section_bg_2_bottom}`}>
          <img
            className={`${styles.maps_section_bg_2_image_bottom}`}
            alt="maps background"
            src="assets/images/maps-03ebbf2c074f13a65af1dba0c80f767e.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Maps;
