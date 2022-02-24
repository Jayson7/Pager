import React from "react";
import "./section3.css";
import { AiFillCar, AiFillPhone, AiFillShopping } from "react-icons/ai";
function Section3() {
  return (
    <div>
      <div className="section3">
        <div className="section3-title">
          <h4>Offers</h4>
          <h1>What we offer</h1>
        </div>
        <div className="section3-box-wrapper">
          <div className="box-section3">
            <div className="box-icon">
              <div>
                <AiFillCar />
              </div>
              <div className="overlay"></div>
              <div className="text-box-icon">
                <h4>we deliver instantly </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, non?, Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Tenetur, consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="box-section3">
            <div className="box-icon">
              <div>
                <AiFillPhone />
              </div>
              <div className="overlay"></div>
              <div className="text-box-icon">
                <h4>24 hours service </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, non?, Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Tenetur, consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="box-section3">
            <div className="box-icon">
              <div>
                <AiFillShopping />
              </div>
              <div className="overlay"></div>
              <div className="text-box-icon">
                <h4>world best discount </h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laborum, non?, Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Tenetur, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
