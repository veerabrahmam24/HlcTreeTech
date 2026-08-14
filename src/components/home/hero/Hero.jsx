import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Popup from "../popup";

const Hero = ({ placementPopupOpen }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  // Wait for the placement popup to close before showing the advisor popup,
  // so the two never overlap on screen (especially on mobile).
  useEffect(() => {
    if (!placementPopupOpen) {
      setPopupOpen(true);
    }
  }, [placementPopupOpen]);

  function handlePopupSubmit(formData) {
    console.log("Form submitted from popup:", formData);
    setPopupOpen(false);
  }

  return (
    <>
      <section className="hero2">
        <div className="hero2-glow hero2-glow-1" />
        <div className="hero2-glow hero2-glow-2" />

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
