import React from "react";
import "./galComponent.css";
import image1 from "../../../images/clothes and shoes/3.jpg";
function GalComponent() {
  return (
    <div>
      <div className="gallery">
        <div className="box-gallery">
          {" "}
          <img src={image1} alt="gallery" />{" "}
        </div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
        <div className="box-gallery"></div>
      </div>
    </div>
  );
}

export default GalComponent;
