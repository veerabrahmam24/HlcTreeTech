import React, { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"
import "./contact.css"

const bentoItems = [
  {
    icon: "fa-solid fa-rocket",
    title: "Accelerated Onboarding",
    desc: "Our talent isn't just skilled; they're trained in modern, agile workflows — cutting ramp-up time so your product gets to market faster.",
    wide: true,
    quote: { name: "Sarah J., Founder", role: "TechNova", cover: "./images/stitch/contact-testimonial.jpg" },
  },
  {
    icon: "fa-solid fa-handshake",
    title: "Cultural Fit Focus",
    desc: "We match candidates not just on tech stack, but on startup mindset — adaptability, ownership, and grit.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Scalable Pipeline",
    desc: "Need one engineer today and a whole squad next quarter? Our continuous pipeline adapts to your burn rate and runway.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Zero-Risk Trial Period",
    desc: "Experience the talent firsthand with a two-week sprint integration phase before committing to a long-term partnership.",
    wide: true,
  },
]

const Contact = () => {
  useEffect(() => {
    emailjs.init("tyj2mjcSSRNT3poKH")
  }, [])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [techStack, setTechStack] = useState("")
  const [timeline, setTimeline] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
      name,
      email,
      company,
      purpose: "Partnership Inquiry",
      techStack,
      timeline,
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
    }

    emailjs
      .send("service_3tefgzd", "template_8zpkrs4", formData)
      .then(() => alert("Thank you! We received your partnership inquiry."))
      .catch(() => alert("Submitted successfully!"))
      .finally(() => {
        setIsSubmitting(false)
        setName("")
        setEmail("")
        setCompany("")
        setTechStack("")
        setTimeline("")
      })
  }

  return (
    <>
      <Back
        title='Ready to Build Your Core Team?'
        desc="Partner with HLC Tree Technologies to integrate elite, vetted talent directly into your startup ecosystem. Tell us your tech stack requirements, and we'll engineer the perfect hiring pipeline."
      />

      <section className='contactFormSection'>
        <div className='container'>
          <div className='contactHero-checks'>
            <span><i className='fa-solid fa-circle-check'></i> Seamless Integration</span>
            <span><i className='fa-solid fa-circle-check'></i> Pre-vetted Skills</span>
          </div>

          <form className='contactForm' onSubmit={handleSubmit}>
            <h3>Partnership Inquiry</h3>

            <div className='field'>
              <label htmlFor='c-name'>Name</label>
              <input id='c-name' type='text' placeholder='Jane Doe' value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className='field'>
              <label htmlFor='c-email'>Email</label>
              <input id='c-email' type='email' placeholder='you@company.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className='field'>
              <label htmlFor='c-company'>Company Name</label>
              <input id='c-company' type='text' placeholder='Acme Startup Inc.' value={company} onChange={(e) => setCompany(e.target.value)} required />
            </div>

            <div className='field'>
              <label htmlFor='c-tech'>Tech Stack Requirements</label>
              <select id='c-tech' value={techStack} onChange={(e) => setTechStack(e.target.value)} required>
                <option value=''>Select Primary Stack...</option>
                <option value='React / Node.js'>React / Node.js</option>
                <option value='Python / Machine Learning'>Python / Machine Learning</option>
                <option value='Java / Spring Boot'>Java / Spring Boot</option>
                <option value='iOS / Android Native'>iOS / Android Native</option>
              </select>
            </div>

            <div className='field'>
              <label htmlFor='c-timeline'>Estimated Hiring Timeline</label>
              <select id='c-timeline' value={timeline} onChange={(e) => setTimeline(e.target.value)} required>
                <option value=''>Select Timeline...</option>
                <option value='Immediate (1-2 weeks)'>Immediate (1-2 weeks)</option>
                <option value='1-3 Months'>1-3 Months</option>
                <option value='3+ Months'>3+ Months</option>
              </select>
            </div>

            <button type='submit' className='primary-btn' disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
            <p className='fine-print'>By submitting, you agree to our Partnership Terms.</p>
          </form>
        </div>
      </section>

      <section className='contactBento'>
        <div className='container'>
          <Heading subtitle='Why Startups Choose Us' title='Built for Fast-Moving Teams' />
          <div className='contactBento-grid'>
            {bentoItems.map((item) => (
              <div className={`contactBento-cell${item.wide ? " wide" : ""}`} key={item.title}>
                <i className={item.icon}></i>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                {item.quote && (
                  <div className='contactBento-quote'>
                    <img src={item.quote.cover} alt={item.quote.name} />
                    <span>
                      <span className='name'>{item.quote.name}</span>
                      <span className='role'>{item.quote.role}</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
