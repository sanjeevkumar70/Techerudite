import React from "react";
import "./Navbar.css";
import logo from "../image/Group 420.png";
import search1 from "../image/Path 4.png";
import navimg1 from "../image/Rectangle 80.png";
import eclipse1 from "../image/Ellipse 162.png";
import eclipse2 from "../image/Ellipse 163.png";
import team from "../image/Team-cuate 1.png";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <img src={logo} alt="" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  WHAT WE DO
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HIRE EXPERTS
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  COMPANY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SAY HELLO!
                </a>
              </li>
              <li class="nav-item">
                <img src={search1} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
