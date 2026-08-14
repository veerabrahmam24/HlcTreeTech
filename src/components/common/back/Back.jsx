import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title, desc }) => {
  const location = useLocation()
  const isProjectPage = location.pathname === "/project"
  const isCoursesPage = location.pathname === "/courses"
  const isAboutPage = location.pathname === "/about"

  return (
    <>
      <section className={`back${isProjectPage ? " back--plain" : ""}${isCoursesPage ? " back--courses" : ""}${isAboutPage ? " back--about" : ""}`}>
        <h1>{title}</h1>
        {desc && <h2 className='back-desc'>{desc}</h2>}
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back
