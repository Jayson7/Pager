import React from "react";
import "./section1.css";
function Section1(props) {
  return (
    <div>
      <div className="section1">
        <div className="section1-text-box">
          <h1>{props.text}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            iure id provident nam, nesciunt voluptas accusantium laudantium
            odio. Eaque, iusto. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Optio quasi aliquid molestiae repudiandae velit in
            dolor fugit eos doloribus hic non quo quidem soluta voluptatem.
          </p>
          <div className="section1-button">
            <button>Products</button>
            <button>Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
