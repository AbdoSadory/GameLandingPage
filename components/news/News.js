import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from "./style.module.scss";
const News = () => {
  return (
    <section className={`${styles.news_section}`} id="news_section">
      <h2 className="d-none">news section</h2>
      <div className={`${styles.news_section_container}`}>
        <div className={`${styles.news_section_container_background}`}>
          <span className="text-uppercase">we are Valorant</span>
        </div>
        <div className={`${styles.news_section_container_points}`} />
        <div className={`${styles.main_container} main_container`}>
          <div className={`${styles.news_section_container_header}`}>
            <h2 className={`${styles.news_header} text-uppercase`}>
              the latest
            </h2>
            <a
              className={`${styles.news_anchor} text-decoration-none text-uppercase`}
              href="#"
              title="to news"
              onMouseOver={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
              onFocus={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
            >
              go to news page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 15"
                width={20}
                height={20}
              >
                <path
                  d="M16.2.5 19.9 4m4.6 3.5-8.3 7"
                  fill="none"
                  stroke="#ff4655"
                ></path>
                <path
                  fill="none"
                  stroke="#ff4655"
                  strokeMiterlimit={10}
                  d="M16 7.5H0"
                ></path>
              </svg>
            </a>
          </div>
          <div className={`${styles.news_section_container_content}`}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: false,
              }}
              modules={[Pagination]}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                575: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                991: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className={`text-start`}>
                  <a
                    href="#"
                    title="news link"
                    className={`${styles.news_section_card_anchor} text-decoration-none`}
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                    onFocus={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                  >
                    <div
                      className={`${styles.news_section_card_img_container}`}
                    >
                      <img
                        className={`${styles.news_section_card_img}`}
                        alt="news card image"
                        src="assets/images/122422_VCT23_Masters_Location_Announcement_Banner.webp"
                      />
                    </div>
                    <div
                      className={`${styles.news_section_card_date_cate_container} mx-0 my-3 text-uppercase`}
                    >
                      <p className={`${styles.date}`}>
                        12/24/22 .{" "}
                        <span className={`${styles.cate} text-uppercase`}>
                          esports
                        </span>
                      </p>
                    </div>
                    <div
                      className={`${styles.news_section_card_header_container}`}
                    >
                      <h3 className="text-uppercase">
                        Valorant Systems Health Series - Smurf Detection
                      </h3>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`text-start`}>
                  <a
                    href="#"
                    title="news link"
                    className={`${styles.news_section_card_anchor} text-decoration-none`}
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                    onFocus={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                  >
                    <div
                      className={`${styles.news_section_card_img_container}`}
                    >
                      <img
                        className={`${styles.news_section_card_img}`}
                        alt="news card image"
                        src="assets/images/Article_Banner_system_health_1920x1080.webp"
                      />
                    </div>
                    <div
                      className={`${styles.news_section_card_date_cate_container} mx-0 my-3 text-uppercase`}
                    >
                      <p className={`${styles.date}`}>
                        12/24/22 .{" "}
                        <span className={`${styles.cate}  text-uppercase`}>
                          esports
                        </span>
                      </p>
                    </div>
                    <div
                      className={`${styles.news_section_card_header_container}`}
                    >
                      <h3 className="text-uppercase">
                        Valorant Systems Health Series - Smurf Detection
                      </h3>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`text-start`}>
                  <a
                    href="#"
                    title="news link"
                    className={`${styles.news_section_card_anchor} text-decoration-none`}
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                    onFocus={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                  >
                    <div
                      className={`${styles.news_section_card_img_container}`}
                    >
                      <img
                        className={`${styles.news_section_card_img}`}
                        alt="news card image"
                        src="assets/images/VAL_9-3Curse_Banner_1920x1080.webp"
                      />
                    </div>
                    <div
                      className={`${styles.news_section_card_date_cate_container}  mx-0 my-3 text-uppercase`}
                    >
                      <p className={`${styles.date}`}>
                        12/24/22 .{" "}
                        <span className={`${styles.cate} text-uppercase`}>
                          esports
                        </span>
                      </p>
                    </div>
                    <div
                      className={`${styles.news_section_card_header_container}`}
                    >
                      <h3 className="text-uppercase">
                        Valorant Systems Health Series - Smurf Detection
                      </h3>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`text-start`}>
                  <a
                    href="#"
                    title="news link"
                    className={`${styles.news_section_card_anchor} text-decoration-none`}
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                    onFocus={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                  >
                    <div
                      className={`${styles.news_section_card_img_container}`}
                    >
                      <img
                        className={`${styles.news_section_card_img}`}
                        alt="news card image"
                        src="assets/images/Article_Banner_system_health_1920x1080.webp"
                      />
                    </div>
                    <div
                      className={`${styles.news_section_card_date_cate_container} mx-0 my-3 text-uppercase`}
                    >
                      <p className={`${styles.date}`}>
                        12/24/22 .{" "}
                        <span className={`${styles.cate}  text-uppercase`}>
                          esports
                        </span>
                      </p>
                    </div>
                    <div
                      className={`${styles.news_section_card_header_container}`}
                    >
                      <h3 className="text-uppercase">
                        Valorant Systems Health Series - Smurf Detection
                      </h3>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`text-start`}>
                  <a
                    href="#"
                    title="news link"
                    className={`${styles.news_section_card_anchor} text-decoration-none`}
                    onMouseOver={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                    onFocus={(e) => {
                      e.stopPropagation();
                      e.target.setAttribute("title", "");
                    }}
                  >
                    <div
                      className={`${styles.news_section_card_img_container}`}
                    >
                      <img
                        className={`${styles.news_section_card_img}`}
                        alt="news card image"
                        src="assets/images/VAL_9-3Curse_Banner_1920x1080.webp"
                      />
                    </div>
                    <div
                      className={`${styles.news_section_card_date_cate_container}  mx-0 my-3 text-uppercase`}
                    >
                      <p className={`${styles.date}`}>
                        12/24/22 .{" "}
                        <span className={`${styles.cate} text-uppercase`}>
                          esports
                        </span>
                      </p>
                    </div>
                    <div
                      className={`${styles.news_section_card_header_container}`}
                    >
                      <h3 className="text-uppercase">
                        Valorant Systems Health Series - Smurf Detection
                      </h3>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
