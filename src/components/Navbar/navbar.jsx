import { React, useState } from "react";
import {
  AiOutlineBars,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
  AiFillGitlab,
} from "react-icons/ai";
import Contact from "../Contact/contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/home";

import Gallery from "../Gallery/gallery";

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
  let clickrespond = () => {
    setIsToggle(false);
  };
  // console.log(istoggle);
  return (
    <Router>
      <div>
        <div className="navbar-wrapper">
          <div className="logo">
            <Link to="/">
              <span>P</span>aGer
            </Link>
          </div>

          <div className="toggle" onClick={() => triggerFunc()}>
            <AiOutlineBars />
          </div>
        </div>
        <div className={istoggle ? "active" : "notactive"}>
          <ul className=" ">
            <li>
              <Link to="/" onClick={clickrespond}>
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={clickrespond}>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={clickrespond}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/" onClick={clickrespond}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/" onClick={clickrespond}>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={clickrespond}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="icons">
            <div className="icon">
              <AiFillFacebook />
            </div>
            <div className="icon">
              <AiFillTwitterCircle />
            </div>
            <div className="icon">
              <AiFillInstagram />
            </div>
            <div className="icon">
              <AiFillGithub />
            </div>
            <div className="icon">
              <AiFillGitlab />
            </div>
          </div>
          <div className="auth-buttons">
            <button>Sign in</button>
            <button>Register</button>
          </div>
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

          <Route exact path="/gallery" element={<Gallery />} />

          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
