import React from 'react'
import "../sidebar/sidebar.css"
function social() {
    const Lims = [
      {
        id: 1,
        link: "Home",
      },
      {
        id: 2,
        link: "Skill",
      },
      {
        id: 3,
        link: "Experience",
      },
      {
        id: 4,
        link: "Project",
      },
      {
        id: 5,
        link: "Contact",
      },
    ];
  return (
    <nav className="nav">
    <div className="nav__menu">
      <ul className="nav__list">
        {Lims.map(({ id, link}) => (
          <li className="nav__item" key={id}>
            <a href={link} className="nav__link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </nav>
  );
}


export default social
