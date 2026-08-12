import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Popup from "../popup";

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(true);

  function handlePopupSubmit(formData) {
    console.log("Form submitted from popup:", formData);
    setPopupOpen(false);
  }

  return (
    <>
      <section className="hero2">
        <div className="hero2-glow hero2-glow-1" />
        <div className="hero2-glow hero2-glow-2" />
        <div className="hero2-grid" />

        <div className="container hero2-inner">
          <div className="hero2-content">
            <span className="hero2-badge">Your Career Starts Here</span>
            <h1 className="hero2-title">Build Your Tech Career Today</h1>
            <p className="hero2-desc">
              Join thousands of successful graduates who launched their tech careers through our
              structured, project-based programs.
            </p>
            <div className="hero2-buttons">
              <Link to="/courses" className="hero2-btn-primary">Explore Programs</Link>
              <button
                type="button"
                className="hero2-btn-outline"
                onClick={() => setPopupOpen(true)}
              >
                Speak to an Advisor
              </button>
            </div>
          </div>

          <div className="hero2-illustration">
            <div className="hero2-code-card">
              <div className="hero2-code-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="hero2-code-lines">
                <p><span className="tok-kw">const</span> <span className="tok-var">developer</span> = <span className="tok-kw">new</span> <span className="tok-fn">Career</span>();</p>
                <p><span className="tok-var">developer</span>.<span className="tok-fn">learn</span>([<span className="tok-str">'React'</span>, <span className="tok-str">'Node'</span>, <span className="tok-str">'AI'</span>]);</p>
                <p><span className="tok-kw">await</span> <span className="tok-var">developer</span>.<span className="tok-fn">launch</span>();</p>
              </div>
            </div>

            <div className="hero2-skill-card">
              <div className="hero2-skill-top">
                <div className="hero2-skill-icon"><i className="fa-solid fa-arrow-trend-up"></i></div>
                <div>
                  <div className="hero2-skill-title">Skill Progression</div>
                  <div className="hero2-skill-sub">Advanced Level Reached</div>
                </div>
              </div>
              <div className="hero2-skill-bar">
                <div className="hero2-skill-bar-fill" />
              </div>
            </div>

            <div className="hero2-orbit">
              <i className="fa-solid fa-code"></i>
            </div>
          </div>
        </div>
      </section>

      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        onAction={(formData) => handlePopupSubmit(formData)}
      />
    </>
  );
};

export default Hero;
