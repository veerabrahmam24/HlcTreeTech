import React from "react"
import { useParams } from "react-router-dom"
import { coursesCard } from "../../dummydata"
import Back from "../common/back/Back"
import "./courses.css"

const courseDetailData = {
  "devops": {
    intro: "This DevOps Training is designed to make an individual expert in all DevOps concepts from the basics. The course is delivered by real-time professionals and covers practical IT scenarios, challenges, and modern deployment workflows.",
    objectives: ["Understand DevOps concepts and DevOps tools.", "Deploy the main DevOps tools in real environments.", "Implement automated system updates and the DevOps lifecycle.", "Understand virtualization, performance, and infrastructure efficiency.", "Provide strong security for the entire infrastructure."],
    whoShould: ["Software Developers", "Project Managers", "IT Managers", "Development Managers", "Architects"],
    prerequisites: ["Basic knowledge of object-oriented programming is enough."],
    curriculum: ["Introduction to DevOps", "Linux Concepts", "Automation Concepts", "Revision Control System", "Configuration Management", "Build Automation", "Tomcat Web Server", "Nexus Artifacts/Proxy Tool", "Jenkins Framework", "LAMP Setup", "Apache/HTTPD Web Service", "MySQL Database", "Installation of WordPress with LAMP", "Working with Docker", "System Monitoring", "DevOps Project Work"],
    priceAll: "₹16,000",
    pricePer: "₹2,000",
    duration: "30 lectures (125 hrs)",
    difficulty: "Intermediate",
    students: "1,850+",
    rating: 4.9,
    reviews: 342,
    startDate: "Next Batch: Aug 18",
    seatsLeft: 12,
    instructor: {
      name: "Priya Iyer",
      title: "DevOps Architect",
      bio: "12+ years of DevOps and cloud infrastructure expertise.",
      image: "./images/back.webp"
    }
  },
  "react js": {
    intro: "React is a declarative, efficient, and flexible JavaScript library for building Web Applications. It follows a component-based approach, making it easy to create smaller components and build large-scale applications.",
    objectives: [
      "Provide awareness about ReactJS and keep learners updated with the latest trends.",
      "Teach how to create smaller components to build interactive user interfaces.",
      "Help learners build large-scale, high-performance applications with reusable stateful components."
    ],
    whoShould: [
      "Anyone who is trying to learn the fastest growing UI framework and one of the top 3 frameworks.",
      "Learners who want to build component-driven applications.",
      "Developers who want to expand their frontend skills with React."
    ],
    prerequisites: ["HTML and JavaScript"],
    curriculum: ["JavaScript – Basics and In-depth", "React – Basics and In-depth", "Node – Basics", "React with Node"],
    priceAll: "₹8,000",
    pricePer: "₹1,200",
    duration: "50 lectures (190 hrs)",
    difficulty: "Beginner",
    students: "2,500+",
    rating: 5.0,
    reviews: 485,
    startDate: "Next Batch: Aug 15",
    seatsLeft: 8,
    instructor: {
      name: "Arjun Sharma",
      title: "Senior React Developer",
      bio: "10+ years of experience in web development and React architecture.",
      image: "./images/back.webp"
    }
  },
  "html, css": {
    intro: "This course builds a strong foundation in modern web design and development using HTML5 and CSS3.",
    objectives: ["Create responsive and visually appealing web pages.", "Understand semantic HTML and modern CSS layout techniques.", "Build reusable styling systems for real-world websites."],
    whoShould: ["Beginners who want to start web development.", "Students and professionals looking to build frontend skills.", "Designers who want to implement their ideas in code."],
    prerequisites: ["Basic computer literacy"],
    curriculum: ["HTML Structure", "Forms and Inputs", "CSS Selectors", "Flexbox and Grid", "Responsive Design"],
    priceAll: "₹4,000",
    pricePer: "₹400",
    duration: "50 lectures (50 hrs)",
    difficulty: "Beginner",
    students: "3,200+",
    rating: 4.8,
    reviews: 612,
    startDate: "Next Batch: Aug 12",
    seatsLeft: 15,
    instructor: {
      name: "Kavitha Reddy",
      title: "Frontend Specialist",
      bio: "8+ years in web design and frontend development.",
      image: "./images/back.webp"
    }
  },
  "node js": {
    intro: "Node.js training helps learners build fast, scalable backend services and APIs with JavaScript.",
    objectives: ["Understand the Node.js runtime and event-driven model.", "Create REST APIs and server-side applications.", "Work with databases, packages, and deployment workflows."],
    whoShould: ["Backend developers", "Full-stack learners", "Developers moving from frontend to server-side programming"],
    prerequisites: ["Basic JavaScript knowledge"],
    curriculum: ["Node.js fundamentals", "Modules and NPM", "File system operations", "Express.js basics", "REST APIs"],
    priceAll: "₹2,500",
    pricePer: "₹250",
    duration: "20 lectures (20 hrs)",
    difficulty: "Intermediate",
    students: "1,450+",
    rating: 4.9,
    reviews: 298,
    startDate: "Next Batch: Aug 20",
    seatsLeft: 6,
    instructor: {
      name: "Vikram Deshmukh",
      title: "Full-Stack Developer",
      bio: "9+ years in backend development and API design.",
      image: "./images/back.webp"
    }
  },
  javascript: {
    intro: "JavaScript training focuses on core programming concepts and modern client-side development skills.",
    objectives: ["Master JavaScript syntax and core concepts.", "Write clean interactive code for websites.", "Work confidently with arrays, objects, functions, and events."],
    whoShould: ["Beginners", "Frontend developers", "Anyone preparing for modern web development"],
    prerequisites: ["Basic computer skills"],
    curriculum: ["Variables and data types", "Functions and scope", "DOM manipulation", "Arrays and objects", "ES6 features"],
    priceAll: "₹25,000",
    pricePer: "₹2,500",
    duration: "100 lectures (150 hrs)",
    difficulty: "Beginner",
    students: "4,100+",
    rating: 5.0,
    reviews: 756,
    startDate: "Next Batch: Aug 10",
    seatsLeft: 10,
    instructor: {
      name: "Sneha Kulkarni",
      title: "JavaScript Expert",
      bio: "11+ years specializing in JavaScript and ES6+ development.",
      image: "./images/back.webp"
    }
  },
  ai: {
    intro: "AI training introduces learners to machine learning concepts, practical models, and the tools used in real-world AI solutions.",
    objectives: ["Understand AI and machine learning fundamentals.", "Build simple predictive models and workflows.", "Explore NLP, computer vision, and practical AI applications."],
    whoShould: ["Data enthusiasts", "Developers", "Professionals exploring intelligent systems"],
    prerequisites: ["Python basics and logical thinking"],
    curriculum: ["AI overview", "Supervised learning", "Unsupervised learning", "Neural networks", "Model evaluation"],
    priceAll: "₹40,000",
    pricePer: "₹6,500",
    duration: "200 lectures (300 hrs)",
    difficulty: "Advanced",
    students: "920+",
    rating: 4.9,
    reviews: 185,
    startDate: "Next Batch: Aug 25",
    seatsLeft: 3,
    instructor: {
      name: "Rajesh Venkataraman",
      title: "AI & ML Specialist",
      bio: "15+ years in machine learning, deep learning, and AI architecture.",
      image: "./images/back.webp"
    }
  },
  "data science": {
    intro: "Data Science training equips learners to work with data, uncover insights, and build analytical models.",
    objectives: ["Analyze datasets and summarize findings.", "Use statistics and visualization effectively.", "Build predictive models and present outcomes clearly."],
    whoShould: ["Analysts", "Students", "Professionals transitioning into analytics"],
    prerequisites: ["Basic mathematics and Excel familiarity"],
    curriculum: ["Data analysis", "Statistics", "Visualization", "Machine learning", "Business insights"],
    priceAll: "₹1,600",
    pricePer: "₹150",
    duration: "20 lectures (50 hrs)",
    difficulty: "Intermediate",
    students: "1,680+",
    rating: 4.8,
    reviews: 423,
    startDate: "Next Batch: Aug 22",
    seatsLeft: 9,
    instructor: {
      name: "Ananya Pillai",
      title: "Data Scientist",
      bio: "10+ years in data science, analytics, and statistical modeling.",
      image: "./images/back.webp"
    }
  },
  "data engineering": {
    intro: "Data Engineering training focuses on building reliable pipelines, storage systems, and data workflows for modern businesses.",
    objectives: ["Design and maintain data pipelines.", "Work with databases, cloud storage, and processing tools.", "Ensure data quality, reliability, and scalability."],
    whoShould: ["Developers", "Data professionals", "Engineers moving into big data workflows"],
    prerequisites: ["SQL basics and programming familiarity"],
    curriculum: ["Data modeling", "ETL/ELT", "Data lakes", "Streaming data", "Cloud data platforms"],
    priceAll: "₹16,000",
    pricePer: "₹3,200",
    duration: "80 lectures (200 hrs)",
    difficulty: "Advanced",
    students: "780+",
    rating: 4.9,
    reviews: 156,
    startDate: "Next Batch: Aug 28",
    seatsLeft: 5,
    instructor: {
      name: "Manoj Tiwari",
      title: "Data Engineering Lead",
      bio: "13+ years in data engineering, big data, and cloud platforms.",
      image: "./images/back.webp"
    }
  },
  "data analyst": {
    intro: "Data Analyst training helps learners turn raw data into actionable business insights through reporting and analysis.",
    objectives: ["Interpret datasets and identify trends.", "Create dashboards and business-ready reports.", "Use SQL and visualization tools effectively."],
    whoShould: ["Business analysts", "Startup professionals", "Anyone looking to work with business data"],
    prerequisites: ["Basic Excel and logical reasoning"],
    curriculum: ["Data analysis basics", "SQL queries", "Dashboard creation", "Reporting", "Business storytelling"],
    priceAll: "₹1,600",
    pricePer: "₹250",
    duration: "50 lectures (50 hrs)",
    difficulty: "Beginner",
    students: "2,340+",
    rating: 4.9,
    reviews: 567,
    startDate: "Next Batch: Aug 16",
    seatsLeft: 7,
    instructor: {
      name: "Deepika Nair",
      title: "Business Analytics Expert",
      bio: "9+ years in data analysis, business intelligence, and reporting.",
      image: "./images/back.webp"
    }
  }
}

const normalize = (name) => name?.trim().toLowerCase()

const CourseDetails = () => {
  const { courseSlug } = useParams()
  const course = coursesCard.find(
    (item) => item.coursesName.trim().toLowerCase().replace(/\s+/g, "-") === courseSlug
  )
  const details = course ? courseDetailData[normalize(course.coursesName)] : null

  if (!course) {
    return (
      <>
        <Back title='Course Not Found' />
        <section className='coursesCard'>
          <div className='container'>
            <p>Requested course could not be found.</p>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Back title={`${course.coursesName} Course`} desc={details?.intro} />
      <section className='courseDetailsPage'>
        <div className='container'>
          <div className='courseDetailTop'>
            <div className='courseDetailTopCopy'>
              <h1>{course.coursesName} Training</h1>
              <p>{details?.intro}</p>
            </div>
            <div className='courseDetailBranding'>
              <div className='courseDetailBrandingMark'>HLC</div>
              <img className='courseDetailBrandingLogo' src='/images/logo.png' alt='HLC logo' />
              <span>Tree Technologies</span>
              <div className='pattern' aria-hidden='true'></div>
            </div>
          </div>

          <div className='courseDetailWrapper'>
            <div className='courseDetailContent'>
              {details?.objectives && (
                <div className='courseDetailSection'>
                  <h3>Objectives of the Course</h3>
                  <ul>
                    {details.objectives.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {details?.whoShould && (
                <div className='courseDetailSection'>
                  <h3>Who should do the Course</h3>
                  <ul>
                    {details.whoShould.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {details?.prerequisites && (
                <div className='courseDetailSection'>
                  <h3>Prerequisites</h3>
                  <ul>
                    {details.prerequisites.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {details?.curriculum && (
                <div className='courseDetailSection'>
                  <h3>{course.coursesName} Course Content</h3>
                  <ul>
                    {details.curriculum.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className='courseDetailSidebar'>
              <div className='pricingCard'>
                <div className='pricingHeader'>
                  <h3>Course Pricing</h3>
                </div>
                <div className='pricingBody'>
                  <div className='priceItem'>
                    <span className='priceLabel'>Full Course</span>
                    <span className='priceValue'>{details?.priceAll || course.priceAll}</span>
                  </div>
                  <div className='priceItem'>
                    <span className='priceLabel'>Per Month</span>
                    <span className='priceValue'>{details?.pricePer || course.pricePer}</span>
                  </div>
                  {details?.seatsLeft && (
                    <div className='seatsAlert'>
                      <i className='fa fa-info-circle'></i>
                      Only {details.seatsLeft} seats left!
                    </div>
                  )}
                </div>
                <button className='enrollBtn'>Enroll Now</button>
                {details?.startDate && (
                  <p className='startDate'>
                    <i className='fa fa-calendar'></i> {details.startDate}
                  </p>
                )}
              </div>

              {details && (
                <div className='quickStats'>
                  <h4>Quick Stats</h4>
                  <div className='statRow'>
                    <span className='statLabel'>Duration</span>
                    <span className='statValue'>{details.duration}</span>
                  </div>
                  <div className='statRow'>
                    <span className='statLabel'>Level</span>
                    <span className='statValue'>{details.difficulty}</span>
                  </div>
                  <div className='statRow'>
                    <span className='statLabel'>Students</span>
                    <span className='statValue'>{details.students}</span>
                  </div>
                  <div className='statRow'>
                    <span className='statLabel'>Rating</span>
                    <span className='statValue'>
                      <i className='fa fa-star' style={{ color: '#fbbf24' }}></i> {details.rating} ({details.reviews} reviews)
                    </span>
                  </div>
                </div>
              )}

              <div className='instructorCard'>
                <h4>Your Instructor</h4>
                <div className='instructorInfo'>
                  <img
                    src={details?.instructor?.image || course.courTeacher[0]?.dcover}
                    alt={details?.instructor?.name || course.courTeacher[0]?.name}
                    className='instructorImg'
                  />
                  <h5>{details?.instructor?.name || course.courTeacher[0]?.name}</h5>
                  <p className='title'>{details?.instructor?.title}</p>
                  <p className='bio'>{details?.instructor?.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseDetails
