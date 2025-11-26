import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import Popup from "../../home/popup";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Head />
      {openPopup && (
        <Popup open={openPopup} onClose={() => setOpenPopup(false)}/>
             )}             
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
             <a href='/' className='nav-link'>Home</a>
              </li>
            <li>
              <a href='/courses' className='nav-link'>All Courses</a>
            </li>
            <li>
              <a href='/about' className='nav-link'>About</a>
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li> */}
          </ul>
<<<<<<< HEAD
          <div className="start">
            {/* ---------- OPEN POPUP ON CLICK ---------- */}
            <div
              className="button"
              onClick={() => setOpenPopup(true)} // <-- this opens popup
            >
              GET CERTIFICATE
            </div>
=======
          <div className='start'>
            <div className='button'>GET IN TOUCH</div>
>>>>>>> 2ac3394dd386d1d0568f4861b08cd06e2ff648bd
          </div>

          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
