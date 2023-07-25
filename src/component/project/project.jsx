import React, { useEffect, useState } from "react";
import "./project.css";
import { urlFor, client } from "../../client";
import { motion } from "framer-motion";
const Projects = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    const projectquery = '*[_type == "project"]';
    client.fetch(projectquery).then((data) => {
      setProject(data);
    });
  }, []);

  return (
    <section className="containers section">
      <h2 className=" container skill section__title">Project </h2>
      <div className="container project__view">
        <motion.div>
          {projects.map((project) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className=" app__flex"
              key={project.name}
            >
              <div>
                
              </div>
              <div className="app__flex">
                <div className="image_detail">
                  <img src={urlFor(project.icon)} alt="{project.name} " />
                </div>
                <div className="text">
                  <div className="projects__details">
                  <h3 className="p-text">{project.name}</h3>
                  <p className="para">{project.description}</p>
                  </div>
                  <div className="skills">
                    <h1 className="btn1">{project.Skillname}</h1>
                    <h1 className="btn1">{project.Skillname1}</h1>
                  </div>
                  <div className="getcode">
                    <a href={project.url} className="Links">
                      Get Code{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
