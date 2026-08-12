import React from "react"
import AboutCard from "../about/AboutCard"
import Awrapper from "../about/Awrapper"
import Hero from "./hero/Hero"
import HomeCourses from "./HomeCourses"

const Home = () => {
  return (
    <>
      <Hero />
      <Awrapper />
      <AboutCard />
      <HomeCourses />
    </>
  )
}

export default Home
