import React from "react";
import "./Expertise.css";
import expimg1 from "../image/Group 72.png";
import expimg2 from "../image/Group 104.png";
import expimg3 from "../image/Group 93.png";
import expimg4 from "../image/Group 119.png";
import expimg5 from "../image/Group 123.png";
import expimg6 from "../image/Group 126.png";
const Expertise = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="exp-container">
          <p className="exp-heading">Our Area Expertise</p>

          <div className="expertise">
            <div className="exp-row">
              <div className="exp-content">
                <img src={expimg1} alt="" />
                <p>Web Development</p>
              </div>
            </div>

            <div className="exp-row">
              <div className="exp-content">
                <img src={expimg2} alt="" />
                <p>eCommerce Web Development</p>
              </div>
            </div>

            <div className="exp-row">
              <div className="exp-content">
                <img src={expimg3} alt="" />
                <p>Mobile Application Development</p>
              </div>
            </div>

            <div className="exp-row">
              <div className="exp-content">
                <img src={expimg4} alt="" />
                <p>UI/UX Designing</p>
              </div>
            </div>

            <div className="exp-row">
              <div className="exp-content">
                <img src={expimg5} alt="" />
                <p>Digital Marketing</p>
              </div>
            </div>

            <div className="exp-row">
              <div className="exp-content">
                <img src={expimg6} alt="" />
                <p>Website & App Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
