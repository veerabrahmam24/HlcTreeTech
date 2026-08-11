import React, { useEffect } from "react"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import { useLocation } from "react-router-dom"

const CourseHome = () => {
  const location = useLocation()

  useEffect(() => {
    if (location && location.hash) {
      const id = location.hash.replace("#", "")
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
      }
    }
  }, [location])

  return (
    <>
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
