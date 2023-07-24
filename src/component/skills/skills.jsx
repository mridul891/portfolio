import React, { useEffect, useState } from "react";
import "./skills.css";
import { urlFor, client } from "../../client";
import {motion} from 'framer-motion'
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const skillsquery = '*[_type == "skills"]';
    client.fetch(skillsquery).then((data) => {
      setSkills(data);
    })
  }, []);

  return (
    <section className="containers section">
    <h2 className=" container skill section__title">Skills </h2>
    <div className="app__skills-container container">
      <motion.div className="app__skills-list">
      {skills.map((skill)=>( 
          <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{duration:0.5}}
          className="app__skills-item app__flex"
          key={skill.name}>

            <div className="app__flex" style={{backgroundColor:skill.bgcolor}}>
              <img src={urlFor(skill.icon)} alt="{skill.name}"/>
            </div>
            <p className="p-text">{skill.name}</p>
            </motion.div>
        ))}
      </motion.div>

    </div>
    </section>
  );
};

export default Skills;
