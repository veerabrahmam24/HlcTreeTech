import React from "react"
import { useParams } from "react-router-dom"
import { coursesCard } from "../../dummydata"
import Back from "../common/back/Back"
import "./courses.css"

const CourseDetails = () => {
  const { courseSlug } = useParams()
  const course = coursesCard.find(
    (item) => item.coursesName.toLowerCase().replace(/\s+/g, "-") === courseSlug
  )

  if (!course) {
    return (
      <>
        <Back title='Course Not Found' />
        <section className='coursesCard'>
          <div className='container'>
            <p>Requested course could not be found.</p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Back title={`${course.coursesName} Course Details`} />
      <section className='courseDetailsPage'>
        <div className='container'>
          <div className='courseDetailsCard'>
            <div className='courseDetailTop'>
              <div className='courseDetailTopCopy'>
                <div className='courseDetailsHeader'>
                  <h1>{course.coursesName}</h1>
                  <p>{course.priceAll}</p>
                </div>
                <div className='courseDetailsBody'>
                  <div className='courseDetailsInfo'>
                    <h3>Instructor</h3>
                    <p>{course.courTeacher[0]?.name}</p>
                    <h3>Duration</h3>
                    <p>{course.courTeacher[0]?.totalTime}</p>
                    <h3>Course Summary</h3>
                    <p>
                      This {course.coursesName} course is designed to help learners build strong skills
                      through practical projects and guided lessons.
                    </p>
                  </div>
                  <div className='courseDetailsActions'>
                    <button className='outline-btn'>ENROLL NOW !</button>
                  </div>
                </div>
              </div>

              <div className='courseDetailBranding'>
                <div className='courseDetailBrandingMark'>HLC</div>
                <img className='courseDetailBrandingLogo' src='/images/logo.png' alt='HLC logo' />
                <span>Tree Technologies</span>
                <div className='pattern' aria-hidden='true'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseDetails
