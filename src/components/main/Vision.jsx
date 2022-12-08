import React from "react";
import visionimg1 from "../image/5995728 1.png";
import visionimg2 from "../image/Group 354.png";
import "./Vision.css";
const Vision = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="vision pt-4">
          <div className="vision-left">
            <img src={visionimg1} alt="" />
          </div>

          <div className="vision-right">
            <p className="vision-heading">Our Vision</p>
            <p className="vision-para">
              We believe in serving quality services which can meet
              customersrequirements. Our vision is to bring out the best in
              people, technology andprocesses with top-notch quality. We build
              customer experience. Our mission is to place a consistent
              innovation to bring about an ultimate crest of triumph as our
              service.
            </p>
          </div>
        </div>
      </div>
      <div className="vision-logo">
        <img className="vision-bottom" src={visionimg2} alt="" />
      </div>
    </div>
  );
};

export default Vision;
