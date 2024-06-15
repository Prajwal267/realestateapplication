import React, { useState, useEffect } from "react";
import "../styles/NavbarCss.css";
import logo from "../Accets/logo-react.png";
import profile from "../Accets/profile-pic.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) { // Adjust 100 to the scroll distance at which the navbar should become fixed
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ps-5 pe-5 ${isNavbarFixed ? "fixed" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setMenu("Home");
            }}
            className={menu === "Home" ? "active" : "list-item"}
          >
            Home
          </li>
        </Link>
        <Link to="/ManageProperty" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setMenu("ManageProperty");
            }}
            className={menu === "ManageProperty" ? "active" : "list-item"}
          >
            Manage Property
          </li>
        </Link>
        <Link to="/PropertyStatus" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setMenu("PropertyStatus");
            }}
            className={menu === "PropertyStatus" ? "active" : "list-item"}
          >
            Property Status
          </li>
        </Link>
        <Link to="/#" style={{ textDecoration: "none" }}>
          <li
            onClick={() => {
              setMenu("About");
            }}
            className={menu === "About" ? "active" : "list-item"}
          >
            About
          </li>
        </Link>
      </ul>

      <div className="Profile-btn">
        <div className="Entry">
          <button>
            <Link to="/login" style={{ textDecoration: "none", color: 'black' }}>
              Login
            </Link>
          </button>
        </div>

        <div className="Profile">
          <Link to="/profile" style={{ textDecoration: "none", color: 'black' }}>
            <img src={profile} alt="profile" className="profile-pic" />
            <p className="seller-name">Stitch</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
