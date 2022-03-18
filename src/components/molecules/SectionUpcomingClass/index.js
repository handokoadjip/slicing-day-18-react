import { Img3 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section>
      <div className="container-fluid me-5 pe-5 mb-5 pb-5">
        <div className="row pb-5">
          <div className="col-lg-12 p-0">
            <div className="wrapper d-flex align-items-end h-100 position-relative">
              <figure className="m-0">
                <img className="h-image-100vh w-100" src={Img3} alt="image-3" />
              </figure>
              <div className="card rounded-0 border-0 w-lg-50 w-100 position-absolute top-50 end-0 translate-middle-y me-5">
                <div className="card-body p-5 ms-3 ms-lg-0">
                  <div className="d-flex flex-column h-100">
                    <p className="fw-bold mb-5">Upcomming class</p>
                    <h2 className="fw-bold mb-4">Pottery Making</h2>
                    <p className="mb-5 pb-3 border-bottom">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus, culpa quas?
                    </p>
                    <div className="cta">
                      <a
                        className="d-flex justify-content-between align-items-center pb-3"
                        href="#"
                      >
                        Get your spot
                        <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
