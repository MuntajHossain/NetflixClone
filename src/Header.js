import React from "react";
import logo from "./Assets/Images/Netflix.svg";
import "./Header.css"
import profile_pic from "./Assets/Images/blank-profile-picture.webp";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <a href="/">
          <img src={logo} />
        </a>
      </div>
      <div className="header-middle">
        <div className="header-menu">Home</div>
        <div className="header-menu">Movies</div>
        <div className="header-menu">TV Shows</div>
        <div className="header-menu">Sports</div>
        <div className="header-menu">My Library</div>
      </div>
      <div className="header-right">
        <div className="profile">
          <img src={profile_pic} alt="profile_pic" />
        </div>
      </div>
    </header>
  );
}
