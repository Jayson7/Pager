import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="foot1">
            <h4>Do you love to code ?</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              quis quibusdam sed nulla maiores non ipsum vero, rerum sequi
              officia ratione nesciunt cupiditate dolor dolorem expedita totam
              quas inventore tempore veniam quidem a adipisci. Sapiente harum
              nesciunt aliquam rem?
            </p>
          </div>
          <div className="foot2">
            <ul>
              <li>Kitchen Materials</li>
              <li>Phone Accesories</li>
              <li>Laptops</li>
              <li>Clothes</li>
              <li>Shoes</li>
              <li>Wrist watches</li>
            </ul>
          </div>
        </div>
        <div className="copy">&copy; Jayson</div>
      </div>
    </div>
  );
}

export default Footer;
