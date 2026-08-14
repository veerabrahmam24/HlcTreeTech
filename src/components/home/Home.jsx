import React from "react"
import AboutCard from "../about/AboutCard"
import Awrapper from "../about/Awrapper"
import Hero from "./hero/Hero"
import HomeCourses from "./HomeCourses"

const Home = ({ placementPopupOpen }) => {
  return (
    <>
      <Hero placementPopupOpen={placementPopupOpen} />
      <Awrapper />
      <AboutCard />
      <HomeCourses />
    </>
  )
}

export default Home
