import React from "react";
import "./Home.css";
import Scrolldown from "./Scrolldown";
import Social from "./Social";
import Shapes from "./shapes";
import hand from "../../asset/wavinghand.png"
import Lottie from "lottie-react";
import a2 from "../../asset/a2.json";
function Home() {
  return (
    <>
      <section className="home" id="#home">
        <div className="intro">
          <div className="details">
            <div className="name">
              <h1 className="heading">
                Front-End React <br></br>Developer<img src={hand} alt="hand"></img>
              </h1>
            </div>
            <div className="about_me">
              <p>
                Hi, I'm Mridul Pandey. A passionate Front-end React Developer
                based in Delhi, India. 📍
              </p>
            </div>
            <div className="socials">
              <h3>Follow Us:</h3>
            </div>
          </div>
          <div className="image">
            <Lottie animationData={a2} />
          </div>
        </div>

        <Shapes />
      </section>
    </>
  );
}

export default Home;
