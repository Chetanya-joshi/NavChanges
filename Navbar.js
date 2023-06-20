

import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import logo4 from './images/logo.png';
// import Dropdown from 'react-bootstrap/Dropdown';



const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-md navbar-dark  ${isNavOpen ? 'show' : ''}`}>
      <div className="container-fluid">

        <NavLink className="navbar-brand" to="/home">
          <img src={logo4} alt="Your Logo" width="100px" height="100"
            className="d-inline-block align-text-top" />
        </NavLink>


        <button className="navbar-toggler" type="button" onClick={toggleNav} data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded={isNavOpen ? "true" : "false"} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" onClick={handleNavClick} >Home</NavLink>
            </li>
            
            <li className="nav-item dropdown">
              <NavLink className=" nav-link dropdown-toggle " to="#" id="navbarDropdownMenuLink" role="button"
                data-bs-toggle="dropdown" aria-expanded="false" style={{color:'#808080'}} >
                Services
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                <li><NavLink className="dropdown-item" to="/services" onClick={handleNavClick}>Digital Marketing</NavLink></li>
                <li><NavLink className="dropdown-item" to="/event" onClick={handleNavClick}>Events</NavLink></li>
                <li><NavLink className="dropdown-item" to="/public" onClick={handleNavClick}>Public Relation</NavLink></li>
                <li><NavLink className="dropdown-item" to="/production" onClick={handleNavClick}>Production</NavLink></li>
                <li><NavLink className="dropdown-item" to="/web" onClick={handleNavClick}>Web Development</NavLink></li>
                <li><NavLink className="dropdown-item" to="/mice" onClick={handleNavClick}>MICE</NavLink></li>
                <li><NavLink className="dropdown-item" to="/marketing" onClick={handleNavClick}>Influencer Marketing</NavLink></li>

             </ul>

              
              
            </li>

            
            
            
            <li className="nav-item">
             < NavLink className="nav-link" to="/Work1" onClick={handleNavClick}>Work</NavLink>
            </li>
            <li className="nav-item">
             < NavLink className="nav-link" to="/about" onClick={handleNavClick}>About Us</NavLink>
            </li>
            {/* <li className="nav-item">
             < NavLink className="nav-link" to="/chat">Chat</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="https://mycitymyvoice.in/" onClick={handleNavClick}>MCMV</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sectionfashion" onClick={handleNavClick}>
                Fashion
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogger" onClick={handleNavClick}>Blogger's Mela</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Eshower" onClick={handleNavClick}>E-Shower</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/careers" onClick={handleNavClick}>Careers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs" onClick={handleNavClick}>Contact us</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
