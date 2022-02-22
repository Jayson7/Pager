import { React, useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import Contact from "../Contact/contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/home";
import Order from "../Order/order";
import Gallery from "../Gallery/gallery";
import Cart from "../Cart/cart";
import Category from "../Category/category";
import "./navbar.css";

export default function NavBar() {
  const [istoggle, setIsToggle] = useState(false);

  const triggerFunc = () => {
    if (istoggle === false) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };
  console.log(istoggle);
  return (
    <Router>
      <div>
        <div className="navbar-wrapper">
          <div className="logo">
            <Link to="/"> PaGer</Link>
          </div>

          <div className="toggle" onClick={() => triggerFunc()}>
            <AiOutlineBars />
          </div>
        </div>
        <div className={istoggle ? "active" : "notactive"}>
          <ul className=" ">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/order"> Orders</Link>
            </li>
            <li>
              <Link to="/gallery"> Gallery</Link>
            </li>
            <li>
              <Link to="/categories"> Categories</Link>
            </li>
            <li>
              <Link to="/cart"> Cart</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
        {/*
                          A <Switch> looks through all its children <Route>
                          elements and renders the first one whose path
                          matches the current URL. Use a <Switch> any time
                          you have multiple routes, but you want only one
                          of them to render at a time
                          but it has been depreciated in react-router-dom v6
                        */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route exact path="/order" element={<Order />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/categories" element={<Category />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
