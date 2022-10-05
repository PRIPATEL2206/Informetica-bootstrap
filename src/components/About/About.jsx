import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="blur2">
      <div className="container">
        <div className="leftContainer">
          <div className="aboutBox">
            <h1>
              Welcome to <strong>Yojana Kendra</strong>
            </h1>
            <h2>One-stop Scheme Portal for Everyone</h2>
            <p>
              Here you can find schemes which is most appropriate for you. We
              have attempted to provide you an easy and signle point access to
              information about serval welfare shcmes fo the Government and
              their various aspects including eliglbe beneficiaries, types of
              benefits, scheme details etc.
            </p>
            <div className="buttonContainer">
              <button>Explore More</button>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="box1">
            <div className="box1Heading">
              <h1>Recent Updates</h1>
            </div>
          </div>

          <div className="box2">
            <div className="updateContainer">
              <div className="updates"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
