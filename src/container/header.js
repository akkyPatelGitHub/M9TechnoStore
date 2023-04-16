import React, { useEffect, useRef, useState } from "react";
import "../css/style.css";
import "../lib/animate/animate.min.css";
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../css/bootstrap.min.css";
import "../css/customFont.css";
import "../css/customIconeTwo.css";
import "../css/customIconeOne.css";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    spinner();
  }, []);
  const [spinnerTime, setSpinnerTime] = useState(true);
  const spinner = () => {
    setTimeout(function () {
      setSpinnerTime(false);
    }, 5);
  };

  return (
    <>
      {/* <!-- Spinner Start --> */}
      <div
        id="spinner"
        className={`${
          window.location.href.split("/").pop() == "" && spinnerTime
            ? "show"
            : ""
        } bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center`}
      >
        <div className="spinner-border text-primary" role="status"></div>
      </div>
      {/* <!-- Spinner End --> */}
      {/* <!-- Navbar Start --> */}
      <div
        className="container-fluid fixed-top px-0 wow fadeIn MiddleInDadeInClass"
        data-wow-delay="0.1s"
      >
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <small style={{ cursor: "pointer" }}>
              <a
                href="https://goo.gl/maps/hgcg7iNGuLbz68N67"
                target="_blank"
                style={{ textDecoration: "none", color: "#555" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-map-pin"
                  style={{ marginRight: "2px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                803 Devstree, Ahem, Indea
              </a>
            </small>
            <small className="ms-4">
              <a
                href="mailto:akash.devstree@gmail.com"
                target="_blank"
                style={{ textDecoration: "none", color: "#555" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-mail"
                  style={{ marginRight: "2px" }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@example.com
              </a>
            </small>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <a className="text-body ms-3" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a className="text-body ms-3" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a className="text-body ms-3" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a className="text-body ms-3" href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-instagram"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <nav
          className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <a href="/" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="fw-bold text-primary m-0">
              F<span className="text-secondary">oo</span>dy
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link
                to="/"
                className={`nav-item nav-link ${
                  window.location.href.split("/").pop() == "" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${
                  window.location.href.split("/").pop() == "about"
                    ? "active"
                    : ""
                }`}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className={`nav-item nav-link ${
                  window.location.href.split("/").pop() == "products"
                    ? "active"
                    : ""
                }`}
              >
                Products
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-item nav-link ${
                    window.location.href.split("/").pop() == "blogs" ||
                    window.location.href.split("/").pop() == "features" ||
                    window.location.href.split("/").pop() == "testimonials"
                      ? "active"
                      : ""
                  }`}
                  data-bs-toggle="dropdown"
                >
                  Pages
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-down"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </a>

                <div className="dropdown-menu m-0">
                  <Link to="/blogs" className="dropdown-item active">
                    Blog Grid
                  </Link>
                  <Link to="/features" className="dropdown-item">
                    Our Features
                  </Link>
                  <Link to="/testimonials" className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className={`nav-item nav-link ${
                  window.location.href.split("/").pop() == "contact"
                    ? "active"
                    : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
            <div className="d-none d-lg-flex ms-2">
              <div
                className="btn-sm-square bg-white rounded-circle ms-3"
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div
                className="btn-sm-square bg-white rounded-circle ms-3"
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div
                className="btn-sm-square bg-white rounded-circle ms-3"
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-cart"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default Header;
