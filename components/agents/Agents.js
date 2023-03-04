import React from "react";
import styles from "./style.module.scss";

const Agents = () => {
  return (
    <section className={`${styles.agents_section}`} id="agents_section">
      <h2 className="d-none">agents section</h2>
      <div
        className={`${styles.agents_section_top_bg}`}
        id="agents_section_top_bg"
      />
      <div className={`${styles.main_container} main_container`}>
        <div className="row justify-content-between m-0 p-0">
          <div className="col-12 col-md p-0">
            <div className={`${styles.agents_section_left_content}`}>
              <img
                src="assets/images/10014.png"
                title="agents_section_left_image"
                className={`${styles.agents_section_left_image}`}
                id="agents_section_left_image"
              />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className={`${styles.agents_section_right_content}`}>
              <h2 className={`${styles.agents_section_header} text-uppercase`}>
                your agents
              </h2>
              <h3 className={`${styles.agents_section_title} text-uppercase`}>
                CREATIVITY IS YOUR GREATEST WEAPON.
              </h3>
              <p className={`${styles.agents_section_para}`}>
                More than guns and bullets, you’ll choose an Agent armed with
                adaptive, swift, and lethal abilities that create opportunities
                to let your gunplay shine. No two Agents play alike, just as no
                two highlight reels will look the same.
              </p>
              <div
                className={`${styles.agents_section_content_agents_container}`}
              >
                <div
                  className={`${styles.agents_section_btn_border} btn_border`}
                >
                  <a
                    className={`${styles.agents_section_primary_btn} primary_btn text-decoration-none d-block text-uppercase`}
                    title="view agents"
                  >
                    view all agents
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
