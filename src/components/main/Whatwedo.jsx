import React from "react";
import whatimg1 from "../image/WHAT WE DO.png";
// import whatimg2 from "../image/Group 131.png";
import whatimg3 from "../image/Group 135.png";
import whatimg4 from "../image/Group 137.png";
import whatimg5 from "../image/Group 136.png";
import whatimg6 from "../image/Group 139.png";
import "./Whatwedo.css";
const Whatwedo = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="whatwedo">
          <div className="whatwedo-top">
            <img className="what-logo" src={whatimg1} alt="" />
            <p className="what-heading">What do we do to remembered for?</p>
            <div className="what-summary">
              <p>
                To connect smart actions and execute it with laser-like focus is
                our success mantra. Exploring client’s business for online
                exposure is an ultimately worthy goal for us. We want to be a
                voice of client’s success.
              </p>
              <input type="submit" value="GET IN TOUCH" />
            </div>

            <div className="what-grid my-5">
              <div className="what-left">
                <img src={whatimg3} alt="" />
              </div>
              <div className="what-right">
                <p className="what-head">LET’S HAVE A CUP OF COFFEE:</p>
                <p className="what-child-summary">
                  Initiate a meeting to understand the requirements and goals of
                  the client.
                </p>
              </div>
            </div>
            <div className="what-grid py-5">
              <div className="what-left">
                <p className="what-head">PLAN FOR THE SUCCESS:</p>
                <p className="what-child-summary">
                  Initiate a meeting to understand the requirements and goals of
                  the client.
                </p>
              </div>
              <div className="what-right">
                <img src={whatimg4} alt="" />
              </div>
            </div>
            <div className="what-grid">
              <div className="what-left">
                <img src={whatimg5} alt="" />
              </div>
              <div className="what-right">
                <p className="what-head">QUALITY SOLUTIONS:</p>
                <p className="what-child-summary">
                  Initiate a meeting to understand the requirements and goals of
                  the client.
                </p>
              </div>
            </div>
            <div className="what-grid py-5">
              <div className="what-left">
                <p className="what-head">YOUR DREAMOUR GOAL:</p>
                <p className="what-child-summary">
                  Initiate a meeting to understand the requirements and goals of
                  the client.
                </p>
              </div>
              <div className="what-right">
                <img src={whatimg6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
