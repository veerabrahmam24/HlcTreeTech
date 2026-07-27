import React, { useState, useEffect } from "react";
import "./Hero.css";
import Popup from "../popup";

const slides = [
  {
    image: "./images/bg.webp",
    subtitle: "WELCOME TO HLC TREE TECHNOLOGIES",
    title: "Best Learning Expertise",
    desc: "At HLC Tree Technologies, we provide hands-on training, expert guidance, and real-world learning to help you build a strong tech career.",
  },
  {
    image: "./images/back.webp",
    subtitle: "LEARN FROM THE BEST",
    title: "Learn From Industry Professionals",
    desc: "Our certified instructors bring real industry experience to every lesson, guiding you from fundamentals to job-ready skills.",
  },
  {
    image: "./images/awrapper.webp",
    subtitle: "YOUR CAREER STARTS HERE",
    title: "Build Your Tech Career Today",
    desc: "Join thousands of successful graduates who launched their tech careers through our structured, project-based programs.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [popupOpen, setPopupOpen] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  function handlePopupSubmit(formData) {
    console.log("Form submitted from popup:", formData);
    setPopupOpen(false);
  }

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="hero-overlay" />

        <div className="container">
          <div className="row">
            <div className="hero-content">
              <span className="hero-subtitle">{slides[current].subtitle}</span>
              <h1 className="hero-title">{slides[current].title}</h1>
              <p className="hero-desc">{slides[current].desc}</p>
            </div>
          </div>
        </div>

        {/* Slide navigation dots */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        onAction={(formData) => handlePopupSubmit(formData)}
      />

      <div className="margin"></div>
    </>
  );
};

export default Hero;
