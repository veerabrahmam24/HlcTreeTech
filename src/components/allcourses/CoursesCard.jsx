import React, { useState } from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import Popup from "../home/popup"

const CoursesCard = () => {
  const [popupOpen, setPopupOpen] = useState(false)

  function handlePopupSubmit(formData) {
    console.log("Form submitted from popup:", formData)
    setPopupOpen(false)
  }

  return (
    <>
      <section className='coursesCard padding' id='courses-catalog'>
        <div className='container'>
          <div className='courses-grid'>
            {coursesCard.map((val) => (
              <div className='course-tile shadow' key={val.coursesName}>
                <div className='course-tile-media'>
                  <div className='course-tile-icon'><i className={val.icon}></i></div>
                  <span className='course-price-badge'>{val.priceAll}</span>
                </div>
                <div className='course-tile-body'>
                  <h3>{val.coursesName}</h3>
                  <div className='course-tile-meta'>
                    {val.courTeacher.map((details) => (
                      <div className='course-instructor-row' key={details.name}>
                        {details.dcover && <img src={details.dcover} alt={details.name} className='course-instructor-photo' />}
                        <span className='course-instructor'>{details.name}</span>
                        <span className='course-duration'>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                  <div className='course-tile-footer'>
                    <span className='course-per'>{val.pricePer}</span>
                    <button className='primary-btn' onClick={() => setPopupOpen(true)}>Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        onAction={(formData) => handlePopupSubmit(formData)}
      />
    </>
  )
}

export default CoursesCard
