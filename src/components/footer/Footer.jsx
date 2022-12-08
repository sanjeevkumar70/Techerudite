import React from "react";
import "./Footer.css";
import icon from "../image/Group 172.png";
import facebook from "../image/Group 173.png";
import twitter from "../image/Path 312.png";
import linkedin from "../image/Group 178.png";
import footimg1 from "../image/Path 305.png";
import footimg2 from "../image/footimg2.png";
import arrow from "../image/Path 304.png";
const Footer = () => {
  return (
    <>
      <footer className="container-fluid">
        <div className="footer-part">
          <div className="foot-row1">
            <img src={icon} alt="" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p>
              <span>
                <img src={facebook} alt="" />
              </span>
              <span>
                <img src={twitter} alt="" />
              </span>
              <span>
                <img src={linkedin} alt="" />
              </span>
            </p>
          </div>
          <div className="foot-row2">
            <p className="foot-heading">Quick Links</p>
            <ul>
              <li>
                <a href="">Web Development</a>
              </li>
              <li>
                <a href="">CMS & Commerce</a>
              </li>
              <li>
                <a href="">Mobile App Develoment</a>
              </li>
              <li>
                <a href="">Digital marketing</a>
              </li>
              <li>
                <a href="">UI/UX Design</a>
              </li>
            </ul>
          </div>
          <div className="foot-row3 ">
            <p className="foot-heading">Company</p>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Tearms of Services</a>
              </li>
              <li>
                <a href="">Legal Info</a>
              </li>
              <li>
                <a href="">Knowledge Base</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="foot-row4">
            <p className="foot-heading">Subscribe Our Newsletter</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's.
            </p>
            <button>
              Enter Your Email{" "}
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="footer-design">
          <img src={footimg1} className="footimage1" alt="" />
          <img src={footimg2} className="footimage2" alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
