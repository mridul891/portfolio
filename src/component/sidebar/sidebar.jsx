import React from "react";
import "./sidebar.css";
import Social from "../Home/Social"
function sidebar() {
  return (
    <div className="mains">
      <aside className="aside">
        <a href="#home" className="nav__logo">
          <h1 >Mridul</h1>
        </a>

       <Social/>

        <div className="nav__footer">
          <button className="btn">Contact Now </button>
        </div>
      </aside>
      </div>
  );
}

export default sidebar;
