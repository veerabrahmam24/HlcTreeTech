import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()
  const page = (location && location.pathname && location.pathname.split("/")[1]) || ""
  const isShortMargin = page === "courses" || page === "about"

  return (
    <>
      <section className='back'>
        {/* <h2>Home / {location.pathname.split("/")[1]}</h2> */}
        <h1>{title}</h1>
      </section>
      <div className={`margin ${isShortMargin ? "margin--short" : ""}`}></div>
    </>
  )
}

export default Back
