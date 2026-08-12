import React from "react"
import { Link } from "react-router-dom"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const preview = coursesCard.slice(0, 3)

const HomeCourses = () => {
  return (
    <section className='coursesCard padding'>
      <div className='container'>
        <Heading subtitle='Our Courses' title='Explore Our Popular Online Courses' />
        <div className='courses-grid'>
          {preview.map((val) => (
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
                  <Link to='/courses' className='primary-btn'>View Course</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='home-courses-cta'>
          <Link to='/courses' className='outline-btn' style={{ width: "auto", marginTop: 0 }}>View All Courses</Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCourses
