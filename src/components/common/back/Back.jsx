import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()
  const isProjectPage = location.pathname === "/project"
  const isCoursesPage = location.pathname === "/courses"
  const isAboutPage = location.pathname === "/about"

  return (
    <>
      <section className={`back${isProjectPage ? " back--plain" : ""}${isCoursesPage ? " back--courses" : ""}${isAboutPage ? " back--about" : ""}`}>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
