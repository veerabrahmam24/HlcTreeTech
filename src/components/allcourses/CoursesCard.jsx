import React, { useState } from "react"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import Popup from "../home/popup"

const courseDetailData = {
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
    topLevelContent: ["JavaScript – Basics and In-depth", "React – Basics and In-depth", "Node – Basics", "React with Node"],
    javascript: ["Basics of JavaScript.", "JavaScript in depth.", "Creating classes", "Creating private/public/global fields", "Creating private/public/global functions", "Dynamic rendering with JavaScript", "Events"],
    react: ["Introduction to React", "Original DOM vs Virtual DOM", "React Components", "React Components with JSX", "React Components with ES6", "Props and state"],
    node: ["Basics of Node and installation.", "Introduction to Node", "Adding and removing modules"],
    reactWithNode: ["Creating an application using Create React App.", "Life Cycle", "Debugging", "Default values", "State in depth", "Creating Forms", "Creating Table", "Handling Events", "Applying Filters", "JSX in depth", "Validations", "Applying Styles", "Backend calls", "Stateful Components", "Stateless Components", "Local Storage", "Routing", "Basic Routing and Passing Params", "Hyperlinks", "Master Pages", "Reconciliation", "Creating Reusable Components", "React Component vs React pure Component", "Composition vs Inheritance", "Code Reusability and Optimization", "Fragments", "Bundling", "Deploying"],
    integrationModules: ["Google Maps", "Bootstrap Controls", "Material UI", "Toast Messages for notifications"],
    others: ["Other Debugging Options", "Developer Tools", "Current Applications developed in React", "Future of React.", "Introduction to Starter Kits", "Integration with other libraries"],
    categories: "Online Training",
    tags: "Bangalore",
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
  devops: {
    intro: "This DevOps Training is designed to make an individual expert in all DevOps concepts from the basics. The course is delivered by real-time professionals and covers practical IT scenarios, challenges, and modern deployment workflows.",
    objectives: ["Understand DevOps concepts and DevOps tools.", "Deploy the main DevOps tools in real environments.", "Implement automated system updates and the DevOps lifecycle.", "Understand virtualization, performance, and infrastructure efficiency.", "Provide strong security for the entire infrastructure."],
    whoShould: ["Software Developers", "Project Managers", "IT Managers", "Development Managers", "Architects"],
    prerequisites: ["Basic knowledge of object-oriented programming is enough."],
    topLevelContent: ["Introduction to DevOps", "Linux Concepts", "Automation Concepts", "Revision Control System", "Configuration Management", "Build Automation", "Tomcat Web Server", "Nexus Artifacts/Proxy Tool", "Jenkins Framework", "LAMP Setup", "Apache/HTTPD Web Service", "MySQL Database", "Installation of WordPress with LAMP", "Working with Docker", "System Monitoring", "DevOps Project Work"],
    javascript: ["What is DevOps?", "History of DevOps", "Dev and Ops", "DevOps definitions, software development life cycle, and main objectives", "Infrastructure as Code", "Prerequisites for DevOps", "Tools such as Jenkins, Chef, Docker, Vagrant, and more", "Continuous Integration and Development"],
    react: ["Linux installation and user management", "Package management and networking", "OS basics, shell scripting, variables, and conditions", "Database concepts, shell loops, redirectors, and exit status"],
    node: ["Subversion controls and Git", "Working with local and remote repositories", "Branching, merging, cloning, fetch, and pull", "Installation of Git server"],
    reactWithNode: ["Chef, Puppet, and Ansible introduction", "Chef server hands-on, workstation setup, and concepts", "Attributes, resources, cookbook, run list, recipes, and supermarket"],
    integrationModules: ["Introduction to Maven", "Maven structure and phases", "Installation of Maven and configuration", "Jar/war project structure"],
    others: ["Tomcat installation and configuration", "Tomcat manager and application deployment methods", "Nexus introduction, installation, repository management, and Maven integration", "Jenkins installation, user management, security, plugins, builds, and Git/Maven/Tomcat integration", "Docker introduction, installation, image creation, and hands-on workflows", "Nagios concepts, installation, and monitoring hands-on", "LAMP setup, Apache, PHP integration, MySQL database management, and WordPress installation"],
    categories: "Online Training",
    tags: "Bangalore",
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
  "html, css": {
    intro: "This course builds a strong foundation in modern web design and development using HTML5 and CSS3.",
    objectives: ["Create responsive and visually appealing web pages.", "Understand semantic HTML and modern CSS layout techniques.", "Build reusable styling systems for real-world websites."],
    whoShould: ["Beginners who want to start web development.", "Students and professionals looking to build frontend skills.", "Designers who want to implement their ideas in code."],
    prerequisites: ["Basic computer literacy"],
    topLevelContent: ["HTML Structure", "Forms and Inputs", "CSS Selectors", "Flexbox and Grid", "Responsive Design"],
    javascript: ["HTML semantics", "Accessible markup", "CSS variables", "Pseudo-classes", "Media queries"],
    react: ["Layout fundamentals", "Spacing and typography", "Color systems", "UI consistency"],
    node: ["Project structure", "Static file hosting", "Browser developer tools"],
    reactWithNode: ["Build a landing page", "Create reusable components", "Deploy a static site"],
    integrationModules: ["Bootstrap basics", "Font Awesome", "Google Fonts"],
    others: ["Best practices", "Cross-browser compatibility", "Performance basics"],
    categories: "Frontend Training",
    tags: "Bangalore",
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
    topLevelContent: ["Node.js fundamentals", "Modules and NPM", "File system operations", "Express.js basics", "REST APIs"],
    javascript: ["Asynchronous JavaScript", "Callbacks and Promises", "Streams", "Error handling"],
    react: ["Server-side architecture", "Middleware", "Authentication basics"],
    node: ["Routing", "Environment variables", "Database integration"],
    reactWithNode: ["CRUD APIs", "JWT basics", "Deployment to cloud"],
    integrationModules: ["MongoDB", "MySQL", "Postman"],
    others: ["Logging", "Testing", "Performance tuning"],
    categories: "Backend Training",
    tags: "Bangalore",
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
    topLevelContent: ["Variables and data types", "Functions and scope", "DOM manipulation", "Arrays and objects", "ES6 features"],
    javascript: ["Closures", "Hoisting", "Promises", "Async/Await", "Modules"],
    react: ["DOM events", "Event delegation", "Form handling"],
    node: ["Browser APIs", "Storage", "Debugging"],
    reactWithNode: ["Mini projects", "Interactivity", "API calls"],
    integrationModules: ["Fetch API", "JSON", "Local storage"],
    others: ["Best practices", "Code optimization", "Problem solving"],
    categories: "Programming Training",
    tags: "Bangalore",
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
    topLevelContent: ["AI overview", "Supervised learning", "Unsupervised learning", "Neural networks", "Model evaluation"],
    javascript: ["Python foundations", "Libraries", "Data preparation"],
    react: ["Model training", "Evaluation metrics", "Deployment basics"],
    node: ["Automation", "APIs", "Workflow orchestration"],
    reactWithNode: ["Hands-on projects", "Chatbots", "Recommendation systems"],
    integrationModules: ["TensorFlow", "PyTorch", "Scikit-learn"],
    others: ["Ethics", "Bias", "Real-world use cases"],
    categories: "AI Training",
    tags: "Bangalore",
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
    topLevelContent: ["Data analysis", "Statistics", "Visualization", "Machine learning", "Business insights"],
    javascript: ["Python for data", "Pandas", "NumPy", "Matplotlib"],
    react: ["Data cleaning", "Exploratory analysis", "Regression models"],
    node: ["Storytelling with data", "Dashboards", "Reporting"],
    reactWithNode: ["Capstone project", "Model deployment", "Presentation skills"],
    integrationModules: ["SQL", "Tableau", "Power BI"],
    others: ["Real-world datasets", "Case studies", "Interview prep"],
    categories: "Analytics Training",
    tags: "Bangalore",
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
    topLevelContent: ["Data modeling", "ETL/ELT", "Data lakes", "Streaming data", "Cloud data platforms"],
    javascript: ["ETL concepts", "Schema design", "Batch processing"],
    react: ["Data warehouses", "Data quality", "Monitoring"],
    node: ["Pipeline orchestration", "Automation", "Scheduling"],
    reactWithNode: ["Hands-on projects", "Cloud integration", "Performance tuning"],
    integrationModules: ["Spark", "Airflow", "Azure SQL"],
    others: ["Security", "Governance", "Observability"],
    categories: "Data Platform Training",
    tags: "Bangalore",
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
    topLevelContent: ["Data analysis basics", "SQL queries", "Dashboard creation", "Reporting", "Business storytelling"],
    javascript: ["Excel formulas", "Data cleaning", "Metrics", "Charts"],
    react: ["SQL joins", "Aggregations", "Case statements"],
    node: ["BI tools", "KPIs", "Automation"],
    reactWithNode: ["Case study", "Presentation", "Portfolio project"],
    integrationModules: ["Power BI", "Tableau", "Excel"],
    others: ["Interview preparation", "Reporting best practices", "Decision-making"],
    categories: "Business Analytics Training",
    tags: "Bangalore",
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
};

const CoursesCard = () => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  function handlePopupSubmit(formData) {
    console.log("Form submitted from popup:", formData)
    setPopupOpen(false)
  }

  const normalizeCourseName = (name) => name?.trim().toLowerCase()

  const shouldShowViewCourse = (name) => {
    const visibleCourseNames = [
      "react js",
      "devops",
      "html, css",
      "node js",
      "javascript",
      "ai",
      "data science",
      "data engineering",
      "data analyst"
    ]

    return visibleCourseNames.includes(normalizeCourseName(name))
  }

  const handleViewCourse = (course) => {
    setSelectedCourse(course)
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 20)
  }

  const details = selectedCourse ? courseDetailData[normalizeCourseName(selectedCourse.coursesName)] : null

  return (
    <>
      {selectedCourse ? (
        <section className='courseDetailPage'>
          <div className='courseDetailOverlay' />
          <div className='courseDetailInner container'>
            <div className='courseDetailTop'>
              <div className='courseDetailTopCopy'>
                <span className='courseBadge'>{selectedCourse.coursesName} Course</span>
                <h1>{selectedCourse.coursesName} Training</h1>
                <p>
                  Explore the {selectedCourse.coursesName} syllabus with an in-depth, modern curriculum built for hands-on learning.
                  This inline detail view replaces the default course grid while the user is reviewing the course.
                </p>
                <a
                  href='#'
                  className='back-to-courses'
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedCourse(null)
                  }}
                >
                  Back to all courses
                </a>
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
                <div className='courseDetailSection'>
                  <h3>{selectedCourse.coursesName} Training Overview</h3>
                  <p>{details?.intro}</p>
                </div>

              <div className='courseDetailSection'>
                <h3>Objectives of the Course</h3>
                <ul>
                  {details?.objectives?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Who should do the Course</h3>
                <ul>
                  {details?.whoShould.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Prerequisites</h3>
                <ul>
                  {details?.prerequisites.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>{selectedCourse.coursesName} Course Content</h3>
                <ul>
                  {details?.topLevelContent.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Core Concepts</h3>
                <ul>
                  {details?.javascript.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Operating Systems & Automation</h3>
                <ul>
                  {details?.react.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Version Control & Configuration</h3>
                <ul>
                  {details?.node.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Build & Deployment</h3>
                <ul>
                  {details?.reactWithNode.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Tools & Integrations</h3>
                <ul>
                  {details?.integrationModules.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Additional Topics</h3>
                <ul>
                  {details?.others.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className='courseDetailSection'>
                <h3>Categories & Tags</h3>
                <p>{details?.categories} | Tags: {details?.tags}</p>
              </div>
              </div>

              <div className='courseDetailSidebar'>
                <div className='pricingCard'>
                  <div className='pricingHeader'>
                    <h3>Course Pricing</h3>
                  </div>
                  <div className='pricingBody'>
                    <div className='priceItem'>
                      <span className='priceLabel'>Full Course</span>
                      <span className='priceValue'>{details?.priceAll}</span>
                    </div>
                    <div className='priceItem'>
                      <span className='priceLabel'>Per Month</span>
                      <span className='priceValue'>{details?.pricePer}</span>
                    </div>
                    <div className='seatsAlert'>
                      <i className='fa fa-info-circle'></i>
                      Only {details?.seatsLeft} seats left!
                    </div>
                  </div>
                  <button className='primary-btn enrollBtn' onClick={() => setPopupOpen(true)}>
                    Enroll Now
                  </button>
                  <p className='startDate'>
                    <i className='fa fa-calendar'></i> {details?.startDate}
                  </p>
                </div>

                <div className='quickStats'>
                  <h4>Quick Stats</h4>
                  <div className='statRow'>
                    <span className='statLabel'>Duration</span>
                    <span className='statValue'>{details?.duration}</span>
                  </div>
                  <div className='statRow'>
                    <span className='statLabel'>Level</span>
                    <span className='statValue'>{details?.difficulty}</span>
                  </div>
                  <div className='statRow'>
                    <span className='statLabel'>Students</span>
                    <span className='statValue'>{details?.students}</span>
                  </div>
                  <div className='statRow'>
                    <span className='statLabel'>Rating</span>
                    <span className='statValue'>
                      <i className='fa fa-star' style={{color: '#fbbf24'}}></i> {details?.rating} ({details?.reviews} reviews)
                    </span>
                  </div>
                </div>

                <div className='instructorCard'>
                  <h4>Your Instructor</h4>
                  <div className='instructorInfo'>
                    <img src={details?.instructor?.image} alt={details?.instructor?.name} className='instructorImg' />
                    <h5>{details?.instructor?.name}</h5>
                    <p className='title'>{details?.instructor?.title}</p>
                    <p className='bio'>{details?.instructor?.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className='coursesCard'>
          <div className='container grid2'>
            {coursesCard.map((val) => (
              <div className='items' key={val.id}>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                  </div>
                  <div className='text'>
                    <div className='cardHeading'>
                      <h1>{val.coursesName}</h1>
                    </div>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <label htmlFor=''> (5.0)</label>
                    </div>
                    <div className='details'>
                      {val.courTeacher.map((details, index) => (
                        <React.Fragment key={index}>
                          <div className='box'>
                            <div className='dimg'>
                              <img src={details.dcover} alt='' />
                            </div>
                            <div className='para'>
                              <h4>{details.name}</h4>
                            </div>
                          </div>
                          <span>{details.totalTime}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='cardActions'>
                  <button className='secondary-btn courseActionBtn' onClick={() => setPopupOpen(true)}>
                    ENROLL NOW !
                  </button>
                  {shouldShowViewCourse(val.coursesName) && (
                    <button
                      className='secondary-btn courseActionBtn'
                      onClick={() => handleViewCourse(val)}
                    >
                      View course
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      <Popup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        onAction={(formData) => handlePopupSubmit(formData)}
      />
    </>
  )
}

export default CoursesCard
