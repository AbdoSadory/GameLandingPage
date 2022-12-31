import Link from "next/link";
import React from "react";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={`m-0 p-0`}>
      <nav
        className={`${styles.header_nav} navbar navbar-expand-lg m-0 py-0 px-2`}
      >
        <div className={`container-fluid m-0 p-0`}>
          <div
            className={`row justify-content-between align-items-center m-0 p-2`}
          >
            <div className={`col-lg-1 col-2 text-center p-0`}>
              <a
                className="navbar-brand m-0 p-0"
                href="https://www.facebook.com/pyromancergames"
              >
                <img
                  className={`${styles.logo}`}
                  src="assets/images/logo/lOGO_PNG.png"
                  alt="pyromancergames logo"
                />
              </a>
            </div>
            <div className={`col text-end`}>
              <div></div>
              <div>
                <button
                  className={`navbar-toggler ${styles.navbar_toggler}`}
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <span className="navbar-dark navbar-toggler-icon " />
                </button>
                <div
                  className="offcanvas offcanvas-end bg-dark"
                  tabIndex={-1}
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title text-start"
                      id="offcanvasRightLabel"
                    >
                      <img
                        className={`w-25`}
                        src="assets/images/logo/lOGO_PNG.png"
                        alt="pyromancergames logo"
                      />
                    </h5>
                    <button
                      type="button"
                      className="btn-close bg-light p-3"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="offcanvas-body">
                    <div className="row justify-content-between align-items-center m-0 p-0 w-100">
                      <div className="col-lg-10 m-0 p-0">
                        <div
                          className="navbar-collapse"
                          id="navbarNavAltMarkup"
                        >
                          <div className="navbar-nav text-light">
                            <Link
                              className={`nav-link text-center text-light ${styles.nav_link_min_992px}`}
                              aria-current="page"
                              href="#"
                            >
                              Home
                            </Link>
                            <Link
                              className={`nav-link text-center text-light ${styles.nav_link_min_992px}`}
                              href="#"
                            >
                              Features
                            </Link>
                            <Link
                              className={`nav-link text-center text-light ${styles.nav_link_min_992px}`}
                              href="#"
                            >
                              Pricing
                            </Link>
                            <Link
                              className={`nav-link text-center text-light ${styles.nav_link_min_992px}`}
                              href="#"
                            >
                              Disabled
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 m-0 p-0 text-center">
                        <a
                          href="#"
                          className={`${styles.playNow_btn_width_min_992px} w-100 d-inline-block text-uppercase text-decoration-none red-gradient-background mt-4 py-2 px-4 rounded-pill fw-bold`}
                        >
                          play now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
