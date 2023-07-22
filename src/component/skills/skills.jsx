import React from "react";
import "./skills.css";
function skills() {
  const skill = [
    {
      id: 1,
      name: "Languages",
      desc: "Languages that I have picked over the years",
      skills: ["Python", "Javascript", "C++", "SASS"],
    },
    {
      id: 2,
      name: "Libraries & Framework",
      desc: "Libraries & Framework that I Prefer to work with  ",

      skills: ["React", "Tailwind", "Bootstrap"],
    },
    {
      id: 3,
      name: "Tools",
      desc: "Tools that I know and use on a daily basis",

      skills: ["Git", "Github", "Vercel", "Figma"],
    },
  ];
function display(){
  const display=document.getElementById("skills__info");
  display.style.opacity=1;
}

  return (
    <section className="skills container section" id="#skills">
      <div className="section__details">
        <h1 className="section__title">Skills</h1>
        <h4>My Technical Skills</h4>
      </div>
      <div className="Tech__skill grid">
        {skill.map((skill, id) => {
          return (
            <div key={id}>
              <h2 className="skill__heading ">{skill.name}</h2>
              <div className="arrow">
                <p>{skill.desc}</p>
                <i className="fa-solid fa-arrow-down"></i>
              </div>
              {skill.skills.map((skills, id) => {
                return (
                  <div key={id} className="skills__info" id="skills__info">
                    <i className={skill.class}></i>
                    <h4>{skills}</h4>
                    <hr className="underline" />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default skills;
/*class:["fa-brands fa-python","fa-brands fa-square-js","fa-regular fa-copyright","fa-brands fa-saas",],*/
