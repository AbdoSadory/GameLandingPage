import React from "react";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footer_top}`}>
        <a
          href="#"
          className={`${styles.footer_top_anchor} text-decoration-none text-uppercase`}
          title="download game client"
          onMouseOver={(e) => {
            e.stopPropagation();
            e.target.setAttribute("title", "");
          }}
          onFocus={(e) => {
            e.stopPropagation();
            e.target.setAttribute("title", "");
          }}
        >
          download game client
        </a>
        <a
          href="#"
          className={`${styles.footer_top_anchor} text-decoration-none text-uppercase`}
          title="download riot mobile companion app"
          onMouseOver={(e) => {
            e.stopPropagation();
            e.target.setAttribute("title", "");
          }}
          onFocus={(e) => {
            e.stopPropagation();
            e.target.setAttribute("title", "");
          }}
        >
          download riot mobile companion app
        </a>
      </div>
      <div className={`${styles.footer_bottom}`} id="footer_bottom">
        <div className={`${styles.footer_bottom_social_container}`}>
          <a
            className={`${styles.footer_bottom_social_container_anchor} text-decoration-none me-3`}
            title="twitter"
            href="#"
            target="_blank"
            onMouseOver={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
            onFocus={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
          >
            <svg width={20} height={20} viewBox="0 0 16.67 13.54">
              <path d="M5.24 13.54a9.66 9.66 0 009.73-9.73v-.44a6.85 6.85 0 001.71-1.77 6.79 6.79 0 01-2 .54A3.45 3.45 0 0016.19.25a7.33 7.33 0 01-2.17.83 3.42 3.42 0 00-5.83 3.11 9.63 9.63 0 01-7-3.57 3.39 3.39 0 00-.37 2.49 3.43 3.43 0 001.43 2.08A3.5 3.5 0 01.7 4.76a3.4 3.4 0 002.74 3.35 3.34 3.34 0 01-1.54.06 3.41 3.41 0 001.21 1.7 3.48 3.48 0 002 .68 6.82 6.82 0 01-4.25 1.46 5.51 5.51 0 01-.81-.05 9.63 9.63 0 005.24 1.54"></path>
            </svg>
          </a>
          <a
            className={`${styles.footer_bottom_social_container_anchor} text-decoration-none me-3`}
            title="youtube"
            href="#"
            target="_blank"
            onMouseOver={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
            onFocus={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
          >
            <svg
              width={20}
              height={20}
              stroke="#282828"
              viewBox="0 0 16.67 11.67"
            >
              <path d="M14.85.36a2.08 2.08 0 011.47 1.47 20.5 20.5 0 01.34 4 22.19 22.19 0 01-.34 4 2.1 2.1 0 01-1.47 1.47 51.13 51.13 0 01-6.52.34 48.46 48.46 0 01-6.52-.36A2.07 2.07 0 01.34 9.82a23.82 23.82 0 010-8A2.11 2.11 0 011.81.34a49.68 49.68 0 016.52-.35 48.31 48.31 0 016.52.37zm-3.84 5.48l-4.34 2.5v-5z"></path>
            </svg>
          </a>
          <a
            className={`${styles.footer_bottom_social_container_anchor} text-decoration-none me-3`}
            title="instagram"
            href="#"
            target="_blank"
            onMouseOver={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
            onFocus={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
          >
            <svg width={20} height={20} viewBox="0 0 13.26 13.3">
              <path
                d="M6.63 3.29a3.43 3.43 0 103.42 3.44 3.43 3.43 0 00-3.42-3.44zm0 5.65a2.22 2.22 0 112.22-2.22 2.21 2.21 0 01-2.22 2.22z"
                fill="#fdfefe"
                fillRule="evenodd"
              />
              <path
                d="M10.96 3.13a.8.8 0 11-.8-.8.8.8 0 01.8.8z"
                fill="#fdfefe"
              />
              <path
                d="M6.63.05H3.88a5 5 0 00-1.62.31 3.31 3.31 0 00-1.18.77 3.31 3.31 0 00-.77 1.18 5.29 5.29 0 00-.35 1.62v5.5a5.22 5.22 0 00.35 1.62 3.35 3.35 0 00.77 1.19 3.42 3.42 0 001.18.76 4.75 4.75 0 001.62.31h5.5a4.75 4.75 0 001.58-.32 3.15 3.15 0 001.18-.76 3.35 3.35 0 00.82-1.18 5 5 0 00.31-1.61V3.93a5 5 0 00-.31-1.62 3.46 3.46 0 00-2-2A5 5 0 009.33.05a26.88 26.88 0 01-2.7 0zm0 1.2h2.69a3.78 3.78 0 011.24.23 2.21 2.21 0 011.27 1.27 3.67 3.67 0 01.23 1.23v5.39a3.78 3.78 0 01-.23 1.24 2.21 2.21 0 01-1.27 1.27 3.77 3.77 0 01-1.24.22H3.96a3.77 3.77 0 01-1.24-.22 2.21 2.21 0 01-1.27-1.27 3.78 3.78 0 01-.23-1.24V3.98a3.67 3.67 0 01.21-1.23A2.21 2.21 0 012.7 1.48a3.78 3.78 0 011.26-.23c.68.01.89 0 2.67 0z"
                fill="#fdfefe"
                fillRule="evenodd"
              />
            </svg>
          </a>
          <a
            className={`${styles.footer_bottom_social_container_anchor} text-decoration-none me-3`}
            title="facebook"
            href="#"
            target="_blank"
            onMouseOver={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
            onFocus={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
          >
            <svg width={20} height={20} viewBox="0 0 15 15">
              <path d="M15 7.54A7.5 7.5 0 106.33 15V9.73h-1.9V7.54h1.9V5.91a2.65 2.65 0 012.83-3 12.09 12.09 0 011.68.14v1.86H9.9a1.09 1.09 0 00-1.23 1.18V7.5h2.08l-.33 2.19H8.67v5.27A7.54 7.54 0 0015 7.54z"></path>
            </svg>
          </a>
          <a
            className={`${styles.footer_bottom_social_container_anchor} text-decoration-none me-3`}
            title="discord"
            href="#"
            target="_blank"
            onMouseOver={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
            onFocus={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
          >
            <svg width={20} height={20} viewBox="0 0 13.33 15.21">
              <path d="M11.77.01H1.56A1.56 1.56 0 000 1.58v10.29a1.56 1.56 0 001.56 1.56h8.64l-.4-1.4 1 .9.92.85 1.64 1.45V1.57A1.56 1.56 0 0011.77.01zM8.83 9.95s-.28-.33-.5-.62a2.4 2.4 0 001.37-.9 4.85 4.85 0 01-.87.45 4.93 4.93 0 01-1.11.32 5.42 5.42 0 01-2 0 7.23 7.23 0 01-1.12-.33 4 4 0 01-.56-.26h-.06l-.21-.13a2.39 2.39 0 001.33.9c-.22.29-.51.63-.51.63a2.75 2.75 0 01-2.32-1.16 10.12 10.12 0 011.1-4.43 3.78 3.78 0 012.14-.8l.07.09a5.16 5.16 0 00-2 1l.45-.22a5.59 5.59 0 011.73-.48h.13a6.61 6.61 0 011.54 0 6 6 0 012.29.73 5.1 5.1 0 00-1.9-1l.11-.12a3.78 3.78 0 012.14.8 10.12 10.12 0 011.1 4.43 2.78 2.78 0 01-2.33 1.16zM5.29 6.4a.84.84 0 10.77.84.81.81 0 00-.77-.84zm2.78 0a.84.84 0 10.77.84.81.81 0 00-.77-.85z"></path>
            </svg>
          </a>
        </div>
        <div className={`${styles.footer_bottom_logos_container}`}>
          <a
            href="#"
            target="_blank"
            className={`${styles.footer_bottom_logos_container_anchor} text-decoration-none`}
            title="Riot Games"
            onMouseOver={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
            onFocus={(e) => {
              e.stopPropagation();
              e.target.setAttribute("title", "");
            }}
          >
            <img
              src="assets/images/val-logo-small.png"
              alt="footer logo"
              className={`${styles.logo_img}`}
            />
          </a>
        </div>
        <div className={`${styles.footer_bottom_rights_container}`}>
          <p className="text-uppercase">
            © 2023,Pyromancer games, and any associated logos are trademarks,
            service marks, and/or registered trademarks of Riot Games, Inc.
          </p>
        </div>
        <div className={`${styles.footer_bottom_terms_container}`}>
          <div>
            <a
              href="#"
              className={`${styles.footer_bottom_terms_container_anchor} text-decoration-none text-uppercase`}
              title="Privacy Notice"
              onMouseOver={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
              onFocus={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
            >
              Privacy Notice
            </a>
            <a
              href="#"
              className={`${styles.footer_bottom_terms_container_anchor} text-decoration-none text-uppercase`}
              title="Terms of Service"
              onMouseOver={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
              onFocus={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
            >
              Terms of Service
            </a>
            <a
              href="#"
              className={`${styles.footer_bottom_terms_container_anchor} text-decoration-none text-uppercase`}
              title="download riot mobile companion app"
              onMouseOver={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
              onFocus={(e) => {
                e.stopPropagation();
                e.target.setAttribute("title", "");
              }}
            >
              Cookie Preferences
            </a>
          </div>
          <img
            src="assets/images/terms-image.png"
            alt="terms logo"
            className="logo"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
