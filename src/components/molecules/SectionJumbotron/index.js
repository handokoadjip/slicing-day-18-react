import { Img1 } from "assets/source/image";
import React from "react";

const index = () => {
  return (
    <section>
      <div className="container-fluid ms-5 ps-5 mb-5 pb-5">
        <div className="row pb-5">
          <div className="col-lg-12">
            <div className="wrapper d-flex align-items-end h-100">
              <figure className="m-0">
                <img className="h-image-100vh w-100" src={Img1} alt="image-1" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
