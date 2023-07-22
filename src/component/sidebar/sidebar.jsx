import React from "react";
import "./sidebar.css";

import Logo from "../../asset/M.png";
function sidebar() {
  const Links = [
    {
      id: 1,
      link: "Home",
      clas: "icon-home",
    },
    {
      id: 2,
      link: "Skill",
      clas: "icon-user-following",
    },
    {
      id: 3,
      link: "Experience",
      clas: "icon-graduation",
    },
    {
      id: 4,
      link: "Project",
      clas: "icon-layers",
    },
    {
      id: 5,
      link: "GetIntouch",
      clas: "icon-bubble",
    },
  ];
  
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt=""/>
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            {Links.map(({ id, link, clas }) => (
              <li className="nav__item" key={id}>
                <a href={link} className="nav__link">
                  <i className={clas}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023-2024</span>
      </div>
    </aside>
  );
}

export default sidebar;
