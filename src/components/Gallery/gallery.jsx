import React from "react";
import "./gallery.css";
import GalComponent from "./pages/footerComponent/galComponent";
import Section1 from "../HomePage/pages/section1/section1";
import Footer from "../HomePage/pages/footer/footer";
function Gallery() {
  return (
    <div>
      <Section1 />
      <GalComponent />
      <Footer />
    </div>
  );
}

export default Gallery;
