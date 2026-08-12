import React from "react"
import "./PlacementPopup.css"

const PlacementPopup = ({ onClose }) => {
  const youtubeUrl = "https://www.youtube.com/@hlctechsolutions?si=ESsaKrf7-TpW9pfE"

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
            <h1 className="placement-popup-title">React &amp; DevOps</h1>
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
