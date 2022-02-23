import React from "react";
import "./section2.css";
import {
  AiOutlineCheckSquare,
  AiFillAppstore,
  AiFillContacts,
  AiFillBell,
} from "react-icons/ai";

import img from "./3.jpg";
function Section2() {
  return (
    <div>
      <div className="section2">
        <div className="section2-title">
          <h4>Integrity</h4>
          <h1>Why Shop With US</h1>
        </div>
        <div className="section2-body">
          <div className="info-section2">
            <div className="division">
              <div className="check">
                <AiOutlineCheckSquare />
              </div>

              <p> Tested and Trusted </p>
            </div>
            <div className="division">
              <div className="check">
                <AiFillAppstore />
              </div>
              <p>Available worldwide</p>
            </div>
            <div className="division">
              <div className="check">
                <AiFillContacts />
              </div>
              <p>Fast and Reliable</p>
            </div>
            <div className="division">
              <div className="check">
                <AiFillBell />
              </div>
              <p>One click delivery</p>
            </div>
          </div>
          <div className="img-section2">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
