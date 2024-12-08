import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret from "../../assets/caret_icon.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <NavLink exact to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="right-nav">
        <img src={search} alt="search" />

        <p>Children</p>

        <img src={bell} alt="bell" />

        <div className="navbar-profile">
          <NavLink exact to="/login">
            <img src={profile} alt="profile" className="profile" />
          </NavLink>
          <img src={caret} alt="caret" />

          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
