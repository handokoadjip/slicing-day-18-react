import React from "react";

const index = () => {
  return (
    <section className="bg-gray">
      <div className="container">
        <div className="row min-vh-100 pb-5">
          <div className="col-lg-12">
            <div className="wrapper d-flex align-items-center h-100">
              <div className="w-100">
                <p>Keep notified about our classes</p>
                <h1 className="text-navbar fw-medium mb-5">
                  Subscribe to our newsletter
                </h1>
                <div className="border-bottom-1px d-flex align-items-center w-100 w-lg-25">
                  <input
                    className="form-control form-control-lg bg-transparent border-0"
                    type="text"
                  />
                  <i className="fa fa-arrow-right"></i>
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
