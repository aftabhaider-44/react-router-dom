import React from "react";
import "./About.css";
import image55 from "./file (1).png";

function About() {
  return (
    <React.Fragment>
      <div className="about__container">
        <img className="img" src={image55} alt="man siiting on the van"></img>
        <div className="text__container">
          <h1 className="heading">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="para">
            <span>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </span>
            <br />
            <span className="second__line">
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </span>
          </p>
        </div>
        <div className="expolre__container">
          <h2>
            <span>Your destination is waiting.</span>
            <br />
            <span>Your van is ready.</span>
          </h2>
          <div className="expolre__btn__container">
            <button className="explore__btn">Explore our vans</button>
          </div>
        </div>
        <div className="about__footer">
          <p>Ⓒ 2022 #VANLIFE</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
