import React from "react";
import styles from "./style.module.scss";

const Dimensions = () => {
  return (
    <section className={`${styles.dimension_section}`} id="dimension_section">
      <h2 className="d-none">dimensionsection</h2>
      <div className={`${styles.main_container} main_container`}>
        <div className={`${styles.line}`} />
        <div className={`${styles.dimension_section_content_container}`}>
          <p
            className={`${styles.dimension_section_content_para}  text-uppercase`}
          >
            EPISODE_5 // ACT III / YR 2
          </p>
          <h3
            className={`${styles.dimension_section_content_header} text-uppercase`}
          >
            dimension
          </h3>
          <div
            className={`${styles.dimension_section_content_dimension_container}`}
          >
            <div
              className={`btn_border`}
            >
              <a
                className={`primary_btn ${styles.dimension_section_primary_btn} text-decoration-none d-block text-uppercase`}
                title="ACT III OVERVIEW"
                onMouseOver={(e) => {
                  e.stopPropagation();
                  e.target.setAttribute("title", "");
                }}
                onFocus={(e) => {
                  e.stopPropagation();
                  e.target.setAttribute("title", "");
                }}
              >
                ACT III OVERVIEW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dimensions;
