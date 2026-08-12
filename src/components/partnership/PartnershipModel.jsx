import React from "react"
import { Link } from "react-router-dom"
import Back from "../common/back/Back"
import "./partnership.css"

const steps = [
  {
    icon: "fa-solid fa-chart-line",
    title: "Requirement Analysis",
    desc: "We conduct a deep dive into your current tech stack, company culture, and project needs to define the ideal candidate profile.",
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Intensive Training",
    desc: "Candidates undergo a rigorous, customized bootcamp, mastering the specific tools and methodologies your team relies on.",
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Guaranteed Interviews",
    desc: "You meet exclusively with the top performers who have successfully completed the specialized training and proven their capability.",
  },
  {
    icon: "fa-solid fa-user-plus",
    title: "Hire & Onboard",
    desc: "Select the candidates for your team. They arrive ready to contribute from day one, significantly reducing your time-to-productivity.",
    final: true,
  },
]

const commitments = [
  {
    icon: "fa-solid fa-arrow-trend-down",
    title: "Zero Recruitment Cost",
    desc: "Eliminate traditional agency fees and reduce overhead.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Rapid Onboarding",
    desc: "Candidates already know your tech stack and workflows.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "De-risked Hiring",
    desc: "Only commit to candidates who have proven their abilities.",
  },
]

const PartnershipModel = () => {
  return (
    <>
      <Back
        title='The Path to Exceptional Talent'
        desc='A streamlined, risk-free partnership model designed to seamlessly integrate elite, specialized tech talent directly into your existing teams.'
      />

      <section className='partnerSteps'>
        <div className='container'>
          <div className='partnerSteps-grid'>
            {steps.map((step, i) => (
              <div className={`partnerStep${step.final ? " is-final" : ""}`} key={step.title}>
                <div className='partnerStep-top'>
                  <span className='partnerStep-num'>{i + 1}</span>
                  <i className={step.icon}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='partnerCommit'>
        <div className='container'>
          <div className='partnerCommit-panel'>
            <div className='partnerCommit-grid'>
              <div className='partnerCommit-text'>
                <span className='partnerCommit-eyebrow'>The Commitment</span>
                <h2>Mutual Growth, Shared Success</h2>
                <p>
                  Our partnership model is built on mutual investment. We take on the initial cost
                  and risk of training, ensuring you only hire proven talent tailored to your
                  specific ecosystem.
                </p>
                <Link to='/contact' className='primary-btn'>Become a Partner</Link>
              </div>
              <div className='partnerGlass-cards'>
                {commitments.map((c) => (
                  <div className='partnerGlass-card' key={c.title}>
                    <i className={c.icon}></i>
                    <div>
                      <h4>{c.title}</h4>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PartnershipModel
