import { Img2 } from "assets/source/image";
import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section>
      <div className="container mb-5 pb-5">
        <div className="row pb-5">
          <div className="col-lg-6">
            <div className="wrapper h-100">
              <div className="d-flex flex-column h-100">
                <p className="fw-bold mb-auto">The journey</p>
                <h2 className="fw-bold mb-5">
                  Curiosity drives
                  <br /> willing and creativity
                </h2>
                <p className="mb-5 w-75">
                  Founded in 2007 at Ryan Juan's small garage in Miami, Florida.
                  Start from curiosity into a hobby and now opening workshopes
                  to give back to the community and giving path to those two
                  wants to learn about crafts and arts
                </p>
                <div className="cta">
                  <Link className="border-bottom-1px d-inline pb-3" to="#">
                    Learn the story
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="wrapper d-flex align-items-end h-100">
              <figure className="m-0">
                <img className="w-100" src={Img2} alt="image-2" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
