import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo-react.png";
import search from "../assets/search-icon.png";
import profile from "../assets/profile-pic.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
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
      {/* <div className='search-box'>
                <input type="text" placeholder="search" />
                <img src={search} alt="" />
            </div>*/}
      <div className="Profile-btn">
        <div className="Entry">
          <button>
            <Link to="/login" style={{ textDecoration: "none" ,color:'black' }}>
              Logout
            </Link>
          </button>
        </div>

        <div className="Profile">
        <Link to="/profile" style={{ textDecoration: "none", color:'black' }}>
              
          <img src={profile} alt="profile" className="profile-pic" />
          <p className="seller-name">Stitch</p> </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
