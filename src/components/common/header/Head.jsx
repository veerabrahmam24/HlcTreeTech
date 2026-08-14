// import React from "react";

// const Head = () => {
//   return (
//     <>
//       <section className="head">

//         <div className="container head__bar">
//           <div className="logo">
//             <img src="/images/logo.png" alt="Logo" className="logo__img" />

//             <div>
//               <h1>HLC Tree Technologies</h1>
//               <span>Learn Today. Build Your Tomorrow. With Our Support</span>
//             </div>
//           </div>

//           <div className="social head__social">
//             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//               <i className='fab fa-facebook-f icon'></i>
//             </a>
//             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//               <i className='fab fa-twitter icon'></i>
//             </a>
//             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//               <i className='fab fa-instagram icon'></i>
//             </a>
//           </div>
//         </div>

//         {/* NEW SCROLL BAR */}
//         <div className="head__scroll">
//           <div className="scroll__content">
//             Welcome to HLC Tree Technologies — Admissions Open | New Batches Starting Soon | Contact Support for Assistance
//           </div>
//         </div>

//       </section>
//     </>
//   );
// };

// export default Head;






import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./headNew.css";

const HeadNew = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const isProjectPage = location.pathname === "/project";
  const scrollText = isProjectPage ? (
    <>
      <span className="hn-scroll-highlight">Exclusive</span>{" "}
      Summer Internships & Final Year Projects Available Now!
    </>
  ) : (
    "HLC Tree Technologies: Admissions Now Open for Our Career-Focused Programs. New Batch Starts on the 07th Mar. Enroll Today and Contact Support for Assistance."
  );

  return (
    <>
      <header className="hn-header">

        {/* TOP BAR */}
        <div className="hn-container">

          {/* LEFT SECTION */}
          <div className="hn-left">
            {/* HAMBURGER (Mobile only) */}
            <button
              className="hn-hamburger"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>

            {/* LOGO + COMPANY NAME */}
            <div className="hn-logo-wrap">
              <img src="/images/logo.png" alt="Logo" className="hn-logo-img" />

              <div>
                <h1 className="hn-title">HLC Tree Technologies</h1>
                <span className="hn-sub">
                  Learn Today. Build Your Tomorrow. With Our Support
                </span>
              </div>
            </div>
          </div>

          {/* NAV (desktop) */}
          <nav className="hn-nav" aria-label="Primary">
            <ul>
              <li>
               <a href="/" className="nav-link">
                 Home
               </a>
             </li>
              <li>
               <a href="/courses" className="nav-link">
                 All Courses
               </a>
             </li>
             <li>
               <a href="/about" className="nav-link">
                 About
              </a>
             </li>
             <li>
               <a href="/project" className="nav-link">
                 Project
               </a>
             </li>
             {/* <li>
               <a href="/works" className="nav-link">
                 Works
              </a>
             </li>
             <li className="hn-has-dropdown">
               <a href="/partnership" className="nav-link">
                 Partnership <i className="fa-solid fa-chevron-down hn-caret"></i>
              </a>
              <ul className="hn-dropdown">
                <li><a href="/partnership" className="nav-link">Partnership Overview</a></li>
                <li><a href="/partnership-model" className="nav-link">Partnership Model</a></li>
                <li><a href="/talent-pool" className="nav-link">Talent Pool</a></li>
              </ul>
             </li> */}
             <li>
               {/* <a href="/contact" className="nav-link">
                 Contact
              </a> */}
             </li>
            </ul>
          </nav>

          {/* SOCIAL ICONS (Hidden on mobile) */}
          <div className="hn-right">
            <div className="hn-social">
              <a href="https://www.facebook.com/profile.php?id=61584417224002" target="_blank" rel="noopener noreferrer" aria-label="facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/@hlctechsolutions?si=ESsaKrf7-TpW9pfE" target="_blank" rel="noopener noreferrer" aria-label="twitter">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/hlc_tree_technologies?idsh=MWg5eWx0MXhhZ2Fodg==" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

        {/* MOBILE DROPDOWN CONTENT */}
        {open && (
          <div className="hn-mobile-menu" role="dialog" aria-label="Mobile menu">
            <div className="hn-mobile-nav">
              <ul>
                <li><a href="/" className="nav-link" onClick={() => setOpen(false)}>Home</a></li>
                <li><a href="/courses" className="nav-link" onClick={() => setOpen(false)}>All Courses</a></li>
                <li><a href="/about" className="nav-link" onClick={() => setOpen(false)}>About</a></li>
                <li><a href="/project" className="nav-link" onClick={() => setOpen(false)}>Project</a></li>
                <li><a href="/works" className="nav-link" onClick={() => setOpen(false)}>Works</a></li>
                <li className="hn-mobile-group-label">Partnership</li>
                <li><a href="/partnership" className="nav-link hn-mobile-sublink" onClick={() => setOpen(false)}>Partnership Overview</a></li>
                <li><a href="/partnership-model" className="nav-link hn-mobile-sublink" onClick={() => setOpen(false)}>Partnership Model</a></li>
                <li><a href="/talent-pool" className="nav-link hn-mobile-sublink" onClick={() => setOpen(false)}>Talent Pool</a></li>
                <li><a href="/contact" className="nav-link" onClick={() => setOpen(false)}>Contact</a></li>
              </ul>
            </div>

            <div className="hn-mobile-social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        )}

      </header>

      {/* MARQUEE SCROLL BAR */}
      <div className={`hn-scroll${isProjectPage ? " project-scroll" : ""}`}>
        <div className={`hn-scroll-content${isProjectPage ? " project-scroll-content" : ""}`}>
          {scrollText}
        </div>
      </div>
    </>
  );
};

export default HeadNew;
