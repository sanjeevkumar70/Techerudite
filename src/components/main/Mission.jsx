import React from "react";
import missionimg1 from "../image/Group 51.png";
import missionimg2 from "../image/Group 3.png";
import "./Mission.css";
const Mission = () => {
  return (
    <div>
      <div className="container-fluid mission-back">
        <div className="mission">
          <div className=" mission-left">
            <p className="mission-heading">Our Mission</p>
            <p className="mission-para">
              We believe in serving quality services which can meet
              customersrequirements. Our vision is to bring out the best in
              people, technology andprocesses with top-notch quality. We build
              customer experience. Our mission is to place a consistent
              innovation to bring about an ultimate crest of triumph as our
              service.
            </p>
          </div>
          <div className="mission-right">
            <img src={missionimg1} alt="" />
          </div>
        </div>
        <div className="mission-logo">
          <img className="mission-bottom" src={missionimg2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
