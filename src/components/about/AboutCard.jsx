import React from "react"
import "./about.css"
import { homeAbout } from "../../dummydata"

const AboutCard = () => {
  return (
    <section className='benefits2'>
      <div className='container'>
        <div className='benefits2-intro'>
          <span className='benefits2-eyebrow'>Learn Anything</span>
          <h2>Benefits About Online Learning Expertise</h2>
        </div>
        <div className='benefits2-grid'>
          {homeAbout.map((val) => (
            <div className='benefits2-card' key={val.title}>
              <div className='benefits2-blob' />
              <div className='benefits2-icon'>
                <i className={val.icon}></i>
              </div>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutCard
