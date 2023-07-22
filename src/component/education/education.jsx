import React from "react";
import "./education.css";
import Data from "./data";
import Card from "./card";
function education() {
  return (
    <section className="education container section" id="#education">
      <div className="section__details">
        <h1 className="section__title">Qualification</h1>
        <h4>My Educational Qualification & Work Experience</h4>
      </div>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((Data,id) => {
            if (Data.category === "education") {
              return (
                <Card
                  key={id}
                  icons={Data.icon}
                  title={Data.title}
                  year={Data.year}
                  desc={Data.desc}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icons={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default education;
