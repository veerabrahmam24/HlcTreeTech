import React from "react"
import { Link } from "react-router-dom"
import Back from "../common/back/Back"
import "./partnership.css"

const benefits = [
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Customized Curriculum",
    desc: "We align our training directly with your tech stack and workflow requirements. Candidates arrive ready to contribute from day one.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Pre-Vetted Talent",
    desc: "Every candidate passes rigorous technical assessments and mentor reviews before they ever reach your desk. Skip the resume pile.",
  },
  {
    icon: "fa-solid fa-sack-dollar",
    title: "Zero Placement Fees",
    desc: "Our model is built on educational partnership, not recruitment bounties. You hire the talent you need without agency markup.",
  },
]

const Partnership = () => {
  return (
    <>
      <Back
        title='Scale Your Startup with Custom-Trained Talent.'
        desc='We train elite candidates to your specific tech stack. You interview, you hire, you grow — at zero recruitment cost.'
      />

      <section className='partnerHero-actions-section'>
        <div className='container partnerHero-actions'>
          <Link to='/contact' className='primary-btn'>Partner with Us</Link>
          <Link to='/talent-pool' className='outline-btn' style={{ width: "auto", marginTop: 0 }}>View Talent Pool</Link>
        </div>
      </section>

      <section className='partnerBenefits'>
        <div className='container'>
          <h2>Why Partner With Us?</h2>
          <p>Accelerate your growth with a zero-risk talent pipeline designed specifically for modern tech startups.</p>
          <div className='partnerBenefits-grid'>
            {benefits.map((val) => (
              <div className='partnerBenefit-card' key={val.title}>
                <div className='icon-tile'><i className={val.icon}></i></div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Partnership
