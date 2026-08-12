import React, { useState } from "react"
import Back from "../common/back/Back"
import "./project.css"

const projectData = [
  {
    title: "Python AI Projects",
    category: "Artificial Intelligence",
    description: "Build smart automation systems, chatbots, and predictive AI solutions.",
    icon: "🤖",
    badge: "AI",
  },
  {
    title: "Web Development Projects",
    category: "Frontend & UI",
    description: "Create polished React, HTML, CSS, and JavaScript experiences.",
    icon: "💻",
    badge: "Web",
  },
  {
    title: "AI Projects",
    category: "Artificial Intelligence",
    description: "Artificial Intelligence, Intelligent Systems & AI Applications",
    icon: "🤖",
    badge: "AI",
  },
  {
    title: "Mobile App Development",
    category: "Android & Cross Platform",
    description: "Develop mobile-first apps with modern UI and real-world workflows.",
    icon: "📱",
    badge: "App",
  },
  {
    title: "IoT Projects",
    category: "Smart Devices",
    description: "Build connected systems using sensors, embedded hardware, and automation.",
    icon: "🔌",
    badge: "IoT",
  },
  {
    title: "Deep Learning Projects",
    category: "Neural Networks",
    description: "Neural Networks, Computer Vision & Deep Learning Models",
    icon: "🧠",
    badge: "Deep Learning",
  },
  {
    title: "Machine Learning Projects",
    category: "Predictive Models",
    description: "Predictive Models, Classification, Regression & AI Solutions",
    icon: "📈",
    badge: "ML",
  },
  {
    title: "Cloud Computing Projects",
    category: "Scalable Deployment",
    description: "Deploy modern solutions on AWS, Azure, and cloud-native infrastructure.",
    icon: "☁️",
    badge: "Cloud",
  },
]

const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send"
const EMAILJS_SERVICE_ID = "service_3tefgzd"
const EMAILJS_TEMPLATE_ID = "template_8zpkrs4"
const EMAILJS_USER_ID = "tyj2mjcSSRNT3poKH"

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [formData, setFormData] = useState({ name: "", contact: "", email: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const openModal = (project) => {
    setSelectedProject(project)
    setFormData({ name: "", contact: "", email: "" })
    setErrorMessage("")
  }

  const closeModal = () => {
    setSelectedProject(null)
    setFormData({ name: "", contact: "", email: "" })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage("")

    const { name, contact, email } = formData
    if (!name.trim() || !contact.trim() || !email.trim()) {
      setErrorMessage("Please complete all fields before submitting.")
      return
    }

    setIsSubmitting(true)

    const payload = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_USER_ID,
      template_params: {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.contact.trim(),
        purpose: "Project Application",
        trainingCourse: selectedProject?.title || "",
        experienceYears: "",
        supportHours: "",
        freelanceType: "",
        date: new Date().toLocaleDateString("en-IN"),
        time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
        firstLetter: formData.name.trim()[0]?.toUpperCase() || "",
      },
    }

    try {
      const response = await fetch(EMAILJS_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const text = await response.text()
        throw new Error(`EmailJS failed: ${response.status} ${text}`)
      }

      alert("Thank you! We received your request.")
      setFormData({ name: "", contact: "", email: "" })
      setSelectedProject(null)
    } catch (error) {
      console.error(error)
      setErrorMessage("Unable to send the application. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Back title='Student Projects' />
      <section className='project'>
        <div className='container project__content'>
          <div className='project__hero'>
           <h2>Explore Available Student Projects</h2>
            <p>
              Discover premium, industry-aligned tech projects designed for students ready
              to build skills, showcase work, and apply for internships with confidence.
            </p>
          </div>

          <div className='project__stats'>
            <div className='project__stat'>
              <strong>8+</strong>
              <span>Live opportunities</span>
            </div>
            <div className='project__stat'>
              <strong>100%</strong>
              <span>Career-ready projects</span>
            </div>
            <div className='project__stat'>
              <strong>24/7</strong>
              <span>Application support</span>
            </div>
          </div>

          <div className='project__grid'>
            {projectData.map((project) => (
              <article
                className='project__card'
                key={project.title}
                onClick={() => openModal(project)}
              >
                <div className='project__card-top'>
                  <div className='project__icon'>{project.icon}</div>
                  <span className='project__badge'>{project.badge}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='project__meta'>
                  <span>{project.category}</span>
                </div>
                <button
                  type='button'
                  className='project__button'
                  onClick={(e) => {
                    e.stopPropagation()
                    openModal(project)
                  }}
                >
                  Apply Now
                </button>
              </article>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className='project__modal-overlay' onClick={closeModal}>
            <div className='project__modal' onClick={(e) => e.stopPropagation()}>
              <button type='button' className='project__modal-close' onClick={closeModal}>
                ×
              </button>

              <div className='project__modal-header'>
                <span className='project__modal-chip'>Application Form</span>
                <h3>{selectedProject.title}</h3>
                <p>Share your details to apply for this project opportunity.</p>
              </div>

              <form className='project__modal-form' onSubmit={handleSubmit}>
                <label>
                  <span>Student Name</span>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter your full name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <span>Contact Number</span>
                  <input
                    type='tel'
                    name='contact'
                    placeholder='Enter contact number'
                    value={formData.contact}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <span>Email Address</span>
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button type='submit' className='project__submit-btn' disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Application"}
                </button>

                {errorMessage && (
                  <p className='project__error'>{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Project
