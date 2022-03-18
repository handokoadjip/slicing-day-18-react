import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="py-5">
      <div className="container border-top-fade-black-1-2px py-5 my-5">
        <div className="row w-100 pt-5">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <h3 className="fs-4 fw-bold mb-4">Pyottros</h3>
              <p className="fw-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="offset-lg-2 col-lg-2 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <h3 className="fs-6 fw-medium text-fade-black-1 mb-4">Company</h3>
              <nav>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  About
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Articles
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Classes
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-2 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <h3 className="fs-6 fw-medium text-fade-black-1 mb-4">Support</h3>
              <nav>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Help Center
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Contact us
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Cookies
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Privacy & terms
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  FAQs
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-2 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <h3 className="fs-6 fw-medium text-fade-black-1 mb-4">Social</h3>
              <nav>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Instagram
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Twitter
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Facebook
                </Link>
                <Link
                  className="text-decoration-none fw-medium mb-3 d-block"
                  to="#"
                >
                  Youtube
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center h-vh-30 py-5">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="copyright d-block d-lg-flex justify-content-lg-between align-items-lg-center text-center">
                <div className="mb-5 mb-lg-0">
                  <p className="mp-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quos, sed.
                  </p>
                </div>
                <ul className="text-uppercase d-inline mp-0">
                  <li className="d-inline">
                    <Link
                      className="nav-link fw-bold d-lg-flex align-items-center d-block"
                      to="#"
                    >
                      Back to top
                      <i className="ms-3 fa fa-arrow-up"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
