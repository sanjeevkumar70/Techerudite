import React from 'react'
import './Navbar.css'
import navimg1 from "../image/Rectangle 80.png";
import eclipse1 from "../image/Ellipse 162.png";
import eclipse2 from "../image/Ellipse 163.png";
import team from "../image/Team-cuate 1.png";
const NavbarContent = () => {
  return (
    <div>
    
      <div className="nav-image">
   
        <div>
          <img className="nav-child1" src={navimg1} alt="" />
        </div>
        <div>
          <img className="nav-child2" src={eclipse1} alt="" />
        </div>
        <div>
          <img className="nav-child3" src={eclipse2} alt="" />
        </div>
        <div>
          
          <img className="nav-child4" src={team} alt="" />
        </div>
      </div>
      <div className='nav-text'>
      <p className='nav-head'>About Us</p>
      <p className='nav-para' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
    </div>
    </div>
  )
}

export default NavbarContent;