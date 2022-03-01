import React from "react";
import "./galComponent.css";
import image1 from "../../../images/clothes and shoes/3.jpg";
import image2 from "../../../images/clothes and shoes/1.jpg";
import image3 from "../../../images/clothes and shoes/2.jpg";
import image4 from "../../../images/clothes and shoes/4.jpg";
import image5 from "../../../images/clothes and shoes/5.jpg";
import image6 from "../../../images/clothes and shoes/11.jpg";
import image7 from "../../../images/clothes and shoes/21.jpg";
import image8 from "../../../images/clothes and shoes/22.jpg";
import image9 from "../../../images/clothes and shoes/55.jpg";
import image10 from "../../../images/clothes and shoes/c.jpg";
import image11 from "../../../images/clothes and shoes/d.jpg";
import image12 from "../../../images/clothes and shoes/g.jpg";
import image13 from "../../../images/clothes and shoes/h.jpg";
import image14 from "../../../images/clothes and shoes/66.jpg";
function GalComponent() {
  return (
    <div>
      <div className="gallery">
        <div className="gallery-title">
          <h4>More Products</h4>
          <h1> Gallery</h1>
        </div>
        <div className="gallery-grid">
          <div className="box-gallery">
            <img src={image1} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image2} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image3} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image4} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image5} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image6} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image7} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image8} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image9} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image10} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image11} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image12} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image13} alt="gallery" />
          </div>
          <div className="box-gallery">
            <img src={image14} alt="gallery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalComponent;
