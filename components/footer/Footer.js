import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <footer className={`black-background m-0 p-0`}>
      <div className={`text-light m-0 py-4 px-2`}>
        <div
          className={`row justify-content-between align-items-center m-0 p-0`}
        >
          <div className="col-12 col-md-4 m-0 p-0">
            <div className="w-50 m-auto p-0">
              <a
                className="navbar-brand m-0 p-0"
                href="https://www.facebook.com/pyromancergames"
              >
                <img
                  className={`w-100`}
                  src="assets/images/logo/lOGO_PNG.png"
                  alt="pyromancergames logo"
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-8 m-0 mt-4 m-md-0 p-0">
            <div className="flex-column justify-content-between align-items-center m-0 p-0">
              <div className={`m-0 p-0 text-center`}>
                <a
                  className={`${styles.footer__socialMedia} m-0 me-3 p-2 d-inline-block rounded-3`}
                  href="#"
                >
                  <svg
                    className="bottom-nav-icon"
                    width={22}
                    height={22}
                    viewBox="0 0 16.67 13.54"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.24 13.54a9.66 9.66 0 009.73-9.73v-.44a6.85 6.85 0 001.71-1.77 6.79 6.79 0 01-2 .54A3.45 3.45 0 0016.19.25a7.33 7.33 0 01-2.17.83 3.42 3.42 0 00-5.83 3.11 9.63 9.63 0 01-7-3.57 3.39 3.39 0 00-.37 2.49 3.43 3.43 0 001.43 2.08A3.5 3.5 0 01.7 4.76a3.4 3.4 0 002.74 3.35 3.34 3.34 0 01-1.54.06 3.41 3.41 0 001.21 1.7 3.48 3.48 0 002 .68 6.82 6.82 0 01-4.25 1.46 5.51 5.51 0 01-.81-.05 9.63 9.63 0 005.24 1.54" />
                  </svg>
                </a>
                <a
                  className={`${styles.footer__socialMedia} m-0 me-3 p-2 d-inline-block rounded-3`}
                  href="#"
                >
                  <svg
                    className="bottom-nav-icon"
                    width={22}
                    height={22}
                    viewBox="0 0 15 15"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15 7.54A7.5 7.5 0 106.33 15V9.73h-1.9V7.54h1.9V5.91a2.65 2.65 0 012.83-3 12.09 12.09 0 011.68.14v1.86H9.9a1.09 1.09 0 00-1.23 1.18V7.5h2.08l-.33 2.19H8.67v5.27A7.54 7.54 0 0015 7.54z" />
                  </svg>
                </a>
                <a
                  className={`${styles.footer__socialMedia} m-0 p-2 d-inline-block rounded-3`}
                  href="#"
                >
                  <svg
                    className="bottom-nav-icon"
                    width={22}
                    height={22}
                    viewBox="0 0 13.26 13.3"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
              </div>
              <div className="mb-0 mt-4 ms-auto me-auto w-75 p-0 text-center">
                <p className="m-0 p-0 text-capitalize">
                  all copyrights are reserved 2023
                </p>
                <p className="m-0 p-0">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nisi, nesciunt dolorum mollitia dolore possimus sint at.
                  Praesentium, officia pariatur? Magni quis vero ipsa sapiente
                  magnam placeat ipsum! Minus, libero ducimus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
