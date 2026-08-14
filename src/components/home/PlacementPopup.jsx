import React, { useState, useEffect } from "react"
import "./PlacementPopup.css"
import { coursesCard } from "../../dummydata"

const courseNames = coursesCard.map((c) => c.coursesName.trim())

const PlacementPopup = ({ onClose }) => {
  const youtubeUrl = "https://www.youtube.com/@hlctechsolutions?si=ESsaKrf7-TpW9pfE"
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (courseNames.length <= 1) return
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % courseNames.length)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  const openYoutubeLink = (event) => {
    event?.stopPropagation()
    window.open(youtubeUrl, "_blank", "noopener,noreferrer")
  }

  const handleOverlayClick = (event) => {
    event?.stopPropagation()
    onClose()
  }

  const handleCardClick = (event) => {
    event?.stopPropagation()
    openYoutubeLink(event)
  }

  return (
    <div className="placement-popup-overlay" onClick={handleOverlayClick}>
      <div className="placement-popup-card" role="dialog" aria-modal="true" onClick={handleCardClick}>
        <div className="placement-popup-blob placement-popup-blob-1" aria-hidden="true"></div>
        <div className="placement-popup-blob placement-popup-blob-2" aria-hidden="true"></div>
        <button
          className="placement-popup-close"
          onClick={(event) => {
            event.stopPropagation()
            onClose()
          }}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="placement-popup-inner placement-popup-no-image">
          <div className="placement-popup-copy placement-popup-copy-full">
            <div className="placement-popup-brand">
              <span className="placement-popup-logo">HLC</span>
              <span className="placement-popup-brand-name">Tree Technologies</span>
            </div>
            <p className="placement-popup-topline">Placement Assistance Program On</p>
            <h1 className="placement-popup-title" aria-live="off">
              <span key={activeIndex} className="placement-popup-title-word">
                {courseNames[activeIndex]}
              </span>
            </h1>
            <div className="placement-popup-dots" aria-hidden="true">
              {courseNames.map((name, i) => (
                <span
                  key={name + i}
                  className={`placement-popup-dot ${i === activeIndex ? "placement-popup-dot-active" : ""}`}
                />
              ))}
            </div>
            <p className="placement-popup-description">
              Gain real-world skills, practical training, and placement support with HLC Tree Technologies.
            </p>
            <button className="placement-popup-button" type="button" onClick={openYoutubeLink}>
              New Batch Starting
            </button>
          </div>
          <div className="placement-popup-footer-band">
            <p className="placement-popup-note">Click anywhere in this popup to view our YouTube batch details.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementPopup
