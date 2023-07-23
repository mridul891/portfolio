import React from "react";
import "./skills.css";
import Data from "./data";
import Card from "./card";
function skills() {
  return (
    <section className="skills               container section" id="#education">
      <div className="section__details">
        <h1 className="section__title">Skiils</h1>
        <h4>My Technical Skills</h4>
      </div>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Data.map((Data, id) => {
            if (Data.category === "Languages") {
              return (
                <Card key={id} title={Data.title}
               />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "Libraries and Framework") {
              return <Card key={index} title={val.title} />;
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, indent) => {
            if (val.category === "Tools") {
              return <Card key={indent} title={val.title} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default skills;
