import React from "react";
import styles from "./style.module.scss";
const WeAre = () => {
  return (
    <section className={`${styles.weAre_section}`} id="weAre_section">
      <h2 className="d-none">weAre section</h2>
      <div className={`${styles.main_container} main_container`}>
        <div className={`${styles.weAre_section_header_container}`}>
          <h2 className={`${styles.weAre_section_header} text-uppercase`}>
            we are Valorant
          </h2>
        </div>
        <div className={`${styles.weAre_section_content_container}`}>
          <div className="row justify-content-between m-0 p-0">
            <div className="col-12 col-md col-lg-4">
              <div className={`${styles.weAre_section_content_left}`}>
                <h3
                  className={`${styles.weAre_section_content_left_header} text-uppercase`}
                >
                  defy the limits
                </h3>
                <p className={`${styles.weAre_section_content_left_para}`}>
                  Blend your style and experience on a global, competitive
                  stage. You have 13 rounds to attack and defend your side using
                  sharp gunplay and tactical abilities. And, with one life
                  per-round, you'll need to think faster than your opponent if
                  you want to survive. Take on foes across Competitive and
                  Unranked modes as well as Deathmatch and Spike Rush.
                </p>
                <div
                  className={`${styles.weAre_section_content_btn_container}`}
                >
                  <div
                    className={`${styles.weAre_section_btn_border} btn_border`}
                  >
                    <a
                      className={`${styles.weAre_section_primary_btn} primary_btn text-decoration-none d-block text-uppercase`}
                      title="learn the game"
                      onMouseOver={(e) => {
                        e.stopPropagation();
                        e.target.setAttribute("title", "");
                      }}
                      onFocus={(e) => {
                        e.stopPropagation();
                        e.target.setAttribute("title", "");
                      }}
                    >
                      learn the game
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md col-lg-7">
              <div className={`${styles.weAre_section_content_right}`}>
                <div className={`${styles.boxes}`}>
                  <span className={`${styles.box}`} />
                  <span className={`${styles.box}`} />
                </div>
                <div
                  className={`${styles.weAre_section_content_right_video_container}`}
                >
                  <video
                    className={`${styles.weAre_section_video}`}
                    autoPlay
                    muted
                    loop
                  >
                    <source src="/assets/videos/weAre-section-video.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
