import React from "react";
import "./Achievement.css";
import achimg1 from "../image/Group 140.png";
import achimg2 from "../image/Group 144.png";
import achimg3 from "../image/Group 149.png";
import achimg4 from "../image/Group 151.png";
const Achievement = () => {
  return (
    <div className="container-fluid">
      <div className="achievement">
        <div className="acv-row">
          <img src={achimg1} alt="" />
          <p className="rank">90+</p>
          <p className="rank-desc">Projects</p>
        </div>
        <div className="acv-row">
          <img src={achimg2} alt="" />
          <p className="rank">85+</p>
          <p className="rank-desc">Clients</p>
        </div>
        <div className="acv-row">
          <img src={achimg3} alt="" />
          <p className="rank">300+</p>
          <p className="rank-desc">Coffee</p>
        </div>
        <div className="acv-row">
          <img src={achimg4} alt="" />
          <p className="rank">93%</p>
          <p className="rank-desc">Retention Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
