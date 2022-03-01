import React from "react";
import Section1 from "./pages/section1/section1";
import Section2 from "./pages/section2/section2";
import Section3 from "./pages/section3/section3";
import Section4 from "./pages/section4/section4";
import Footer from "./pages/footer/footer";
function HomePage() {
  return (
    <div>
      <Section1 text="We sell the things you desire, lets get you paged" />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default HomePage;
