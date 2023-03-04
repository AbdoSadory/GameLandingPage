import React from "react";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header id="header" className={`${styles.header_background}`}>
      <h1 className="d-none">Pyromancer Games fantasy and actions game</h1>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid py-0 px-4">
          <a
            className={`navbar-brand ${styles.header_brand_logo} d-inline-block text-center`}
            title="brand"
            href="#"
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
              className={`${styles.header_brand_logo_img}`}
              src="assets/images/val-logo-small.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.nav_icon}`} />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
              <li className={`nav-item ${styles.nav_item}`}>
                <a
                  className={`nav-link ${styles.nav_link}`}
                  title="news"
                  aria-current="page"
                  href="#news_section"
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                >
                  latest news
                </a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a
                  className={`nav-link ${styles.nav_link}`}
                  title="dimension"
                  href="#dimension_section"
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                >
                  dimension
                </a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a
                  className={`nav-link ${styles.nav_link}`}
                  title="we are"
                  href="#weAre_section"
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                >
                  we are
                </a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a
                  className={`nav-link ${styles.nav_link}`}
                  title="agents"
                  href="#agents_section"
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                >
                  agents
                </a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a
                  className={`nav-link ${styles.nav_link}`}
                  title="maps"
                  href="#maps_section"
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                >
                  maps
                </a>
              </li>
              <li className={`nav-item ${styles.nav_item}`}>
                <a
                  className={`nav-link ${styles.nav_link}`}
                  title="download"
                  href="#footer_bottom"
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                  onFocus={(e) => {
                    e.stopPropagation();
                    e.target.setAttribute("title", "");
                  }}
                >
                  download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
