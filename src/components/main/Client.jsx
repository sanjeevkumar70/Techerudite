import React from "react";
import "./Client.css";
import clientimg1 from "../image/Rectangle 62.png";
import clientimg2 from "../image/Rectangle 61.png";
import clientimg3 from "../image/Rectangle 63.png";
import clientimg4 from "../image/Rectangle 64.png";
const Client = () => {
  return (
    <div className="container-fluid">
      <div className="client">
        <div className="client-row">
          <img src={clientimg1} alt="" />
        </div>
        <div className="client-row">
          <img style={{ width: "60%" }} src={clientimg2} alt="" />
        </div>
        <div className="client-row">
          <img src={clientimg3} alt="" />
        </div>
        <div className="client-row">
          <img src={clientimg4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Client;
