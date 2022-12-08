import React from "react";
import "./Testimonial.css";
import testimg1 from "../image/TESTIMONAILS.png";
import testimg2 from "../image/Group 158.png";
import testimg3 from "../image/Group 155.png";
const Testimonial = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="testimonial">
          <p className="test-heading">Few Words From Our Clients</p>
          <img className="test-logo" src={testimg1} alt="" />

          <p className="test-summary">
            Some valuable words from our loving and ever growing customers.
          </p>
          <div className="test-client">
            <p>
              <span>
                {" "}
                <img src={testimg3} alt="" />{" "}
              </span>
              For my react native applications, Tejash and his team has provided
              me very professional and captivative app. They worked dedicatedly
              and keep me updated with project updates. I think that is the best
              support from the team for me. Thank you for the best application.
            </p>
            <img src={testimg2} alt="" />
            <p className="ceo-name">Rashiem Page</p>
            <p>CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
