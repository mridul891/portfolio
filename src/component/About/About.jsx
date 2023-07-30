import React from "react";
import "./About.css";
import Image from "../../asset/avatar-2.svg";
import resume from "../../asset/MridulResume.docx"
function about() {

  return (
    <section className="about container section" id="#about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} className="about__img" alt="loogs" />
        <div className="about__data ">
          <div className="about_info">
            <p className="about__description">
              Hey there,👋 I'm Mridul a 19-year-old CSE undergrad who is
              passionate about Software Development, UI/UX Design and Web
              Devlopment and Android Development . Currently, I'm pursuing my
              career as a Full Stack Web Developer 👨🏻‍💻 professionally and
              freelance.✍🏻
            </p>
            <a href={resume} className="btn">
              Resume <i className="fa-regular fa-file-lines"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
