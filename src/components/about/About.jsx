import React from "react"
import { Link } from "react-router-dom"
import "./aboutPage.css"
import Back from "../common/back/Back"
import Heading from "../common/heading/Heading"
import { homeAbout } from "../../dummydata"

const bentoStats = [
  { data: "50+", label: "Enterprise Partners" },
  { data: "100k", label: "Active Learners" },
]

const benefits = homeAbout.filter((val) => val.title !== "Online Courses")

const About = () => {
  return (
    <>
      <Back
        title='About Us'
        desc='Hands-on tech training built around real projects, real mentors, and real outcomes.'
      />

      <section className='aboutMission'>
        <div className='container aboutMission-grid'>
          <div className='aboutMission-text'>
            <span className='eyebrow'>Our Mission</span>
            <h1>Empowering Enterprise Education.</h1>
            <p>
              We build hands-on, project-based learning programs that bridge the gap between classroom
              fundamentals and real, job-ready skills — guiding every learner from their first class to
              their first offer letter.
            </p>
            <Link to='/courses' className='primary-btn'>Explore Our Platform</Link>
          </div>
          <div className='aboutMission-media'>
            <img src='./images/stitch/about-desktop-hero.jpg' alt='Team collaborating at HLC Tree Technologies' />
          </div>
        </div>
      </section>

      <section className='aboutBento'>
        <div className='container'>
          <Heading subtitle='Who We Are' title='About Us' />
          <div className='bento-grid'>
            <div className='bento-cell bento-text'>
              <h3>Driven by Innovation</h3>
              <p>
                Founded to revolutionize hands-on tech education, we merge industry mentorship with
                real-world projects, ensuring every learner stays adaptable and highly skilled in a
                rapidly evolving market.
              </p>
            </div>
            <div
              className='bento-cell bento-media'
              style={{ backgroundImage: "url(./images/stitch/about-bento.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
            />
            {bentoStats.map((val) => (
              <div className='bento-cell bento-stat' key={val.label}>
                <span className='bento-number'>{val.data}</span>
                <span className='bento-label'>{val.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='aboutBenefits padding'>
        <div className='container'>
          <Heading subtitle='Why HLC Tree Tech' title='Platform Benefits' />
          <div className='benefits-grid'>
            {benefits.map((val) => (
              <div className='benefit-card shadow' key={val.title}>
                <div className='benefit-icon'>
                  <img src={val.cover} alt='' />
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
