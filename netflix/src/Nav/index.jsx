import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  // SHOW BLACK BACKGROUND NAV
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <div className="nav-contents">
        <Link to="/">
          <img
            className="nav-logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        </Link>
        <Link to="/profile">
          <img
            className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
