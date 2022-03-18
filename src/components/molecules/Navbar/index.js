import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4">
      <div className="container d-flex justify-content-between">
        <Link
          className="navbar-brand text-center fs-2 mp-0 fw-bold ls-5px"
          to="#"
        >
          Pyottros
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-uppercase ms-auto">
            <li className="nav-item px-0 px-lg-4">
              <Link
                className="nav-link text-center fw-bold"
                aria-current="page"
                to="#"
              >
                home
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center fw-bold" to="#">
                Articles
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center fw-bold" to="#">
                About
              </Link>
            </li>
            <li className="nav-item px-0 px-lg-4">
              <Link className="nav-link text-center fw-bold" to="#">
                Classes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default index;
