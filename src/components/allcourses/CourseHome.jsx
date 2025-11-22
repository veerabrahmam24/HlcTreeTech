import React, { useEffect } from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import { useLocation } from "react-router-dom"

const CourseHome = () => {
  const location = useLocation()

  useEffect(() => {
    // If there is a hash like #online, scroll that element into view
    if (location && location.hash) {
      const id = location.hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        // small timeout to ensure element is rendered
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
      }
    }
  }, [location])

  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
