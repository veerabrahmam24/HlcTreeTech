// import React from "react";
// import "./LearningPath.css";

// const steps = [
//   {
//     id: 1,
//     title: "Foundation",
//     subtitle: "Start Here",
//     desc: "HTML, CSS, programming basics & problem solving to create a strong base.",
//     tag: "Beginner",
//   },
//   {
//     id: 2,
//     title: "Core Skill",
//     subtitle: "Choose Your Track",
//     desc: "Deep dive into React, Angular or Java with real-time mentorship.",
//     tag: "Developer Track",
//   },
//   {
//     id: 3,
//     title: "Real Projects",
//     subtitle: "Build, Break & Learn",
//     desc: "Work in small teams, push code to GitHub and build portfolio-worthy apps.",
//     tag: "Hands-on",
//   },
//   {
//     id: 4,
//     title: "Placement Launch",
//     subtitle: "Job-Ready",
//     desc: "Resume, mock interviews, soft skills and referrals through our network.",
//     tag: "Career",
//   },
// ];

// function LearningPath() {
//   return (
//     <section className="lp-section">
//       <div className="lp-wrapper">
//         <div className="lp-header">
//           <span className="lp-pill">Your Roadmap at HLC Tree Tech</span>
//           <h2 className="lp-heading">
//             From First Class to <span>First Offer Letter</span>
//           </h2>
//           <p className="lp-subtext">
//             This is not just a list of courses. It&apos;s a guided journey we
//             follow with every learner – from absolute beginner to confident,
//             job-ready engineer.
//           </p>
//         </div>

//         <div className="lp-timeline">
//           <div className="lp-line" />
//           <div className="lp-line-glow" />
//           <div className="lp-rocket" />

//           {steps.map((step, index) => (
//             <div
//               key={step.id}
//               className={`lp-node ${index % 2 === 0 ? "left" : "right"}`}
//             >
//               <div className="lp-node-marker">
//                 <div className="lp-node-circle">
//                   <span>{step.id}</span>
//                 </div>
//               </div>

//               <div className="lp-card">
//                 <div className="lp-card-top">
//                   <span className="lp-tag">{step.tag}</span>
//                   <h3 className="lp-card-title">
//                     Step {step.id}: {step.title}
//                   </h3>
//                   <p className="lp-card-sub">{step.subtitle}</p>
//                 </div>
//                 <p className="lp-card-desc">{step.desc}</p>

//                 <div className="lp-card-footer">
//                   <span className="lp-chip">
//                     🎯 Outcome: You know exactly what to do next.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="lp-summary">
//           <p>
//             Not sure which step you belong to?{" "}
//             <span>Talk to us and we&apos;ll place you on the right stage</span>{" "}
//             of this roadmap in your very first counseling call.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default LearningPath;

















import React, { useState } from "react";
import "./LearningPath.css";

const steps = [
  {
    id: 1,
    title: "Foundation",
    subtitle: "Start Here",
    desc: "HTML, CSS, programming basics & problem solving to create a strong base.",
    tag: "Beginner",
  },
  {
    id: 2,
    title: "Core Skill",
    subtitle: "Choose Your Track",
    desc: "Deep dive into React, Angular or Java with real-time mentorship.",
    tag: "Developer Track",
  },
  {
    id: 3,
    title: "Real Projects",
    subtitle: "Build, Break & Learn",
    desc: "Work in small teams, push code to GitHub and build portfolio-worthy apps.",
    tag: "Hands-on",
  },
  {
    id: 4,
    title: "Placement Launch",
    subtitle: "Job-Ready",
    desc: "Resume, mock interviews, soft skills and referrals through our network.",
    tag: "Career",
  },
];

function LearningPath() {
  const [hoveredStep, setHoveredStep] = useState(null); // for bg mood
  const [activeStep, setActiveStep] = useState(null); // for full-screen trance

  const getSectionMoodClass = () => {
    if (activeStep) return ""; // when full-screen is open we hide this bg anyway
    if (hoveredStep === 1) return "lp-section-foundation-mode";
    if (hoveredStep === 2) return "lp-section-code-mode";
    if (hoveredStep === 3) return "lp-section-project-mode";
    if (hoveredStep === 4) return "lp-section-placement-mode";
    return "";
  };

  return (
    <>
      <section className={`lp-section ${getSectionMoodClass()}`}>
        <div className="lp-wrapper">
          <div className="lp-header">
            <span className="lp-pill">Your Roadmap at HLC Tree Tech</span>
            <h2 className="lp-heading">
              From First Class to <span>First Offer Letter</span>
            </h2>
            <p className="lp-subtext">
              This is not just a list of courses. It&apos;s a guided journey we
              follow with every learner – from absolute beginner to confident,
              job-ready engineer.
            </p>
          </div>

          <div className="lp-timeline">
            <div className="lp-line" />
            <div className="lp-line-glow" />
            <div className="lp-rocket" />

            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`lp-node ${index % 2 === 0 ? "left" : "right"} ${
                  hoveredStep === step.id ? "lp-node-active" : ""
                }`}
              >
                <div className="lp-node-marker">
                  <div className="lp-node-circle">
                    <span>{step.id}</span>
                  </div>
                </div>

                <div
                  className="lp-card"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(step.id)} // 🔥 full-screen trance
                  title="Click to experience this stage"
                >
                  <div className="lp-card-top">
                    <span className="lp-tag">{step.tag}</span>
                    <h3 className="lp-card-title">
                      Step {step.id}: {step.title}
                    </h3>
                    <p className="lp-card-sub">{step.subtitle}</p>
                  </div>

                  <p className="lp-card-desc">{step.desc}</p>

                  <div className="lp-card-footer">
                    <span className="lp-chip lp-chip-cta">
                      ✨ Hover to feel it, click to enter this stage
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lp-summary">
            <p>
              Not sure which step you belong to?{" "}
              <span>Talk to us and we&apos;ll place you on the right stage</span>{" "}
              of this roadmap in your very first counseling call.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FULL-SCREEN TRANCE EXPERIENCES ================= */}
      {activeStep && (
        <div className={`lp-fullscreen lp-step-${activeStep}`}>
          <div
            className="lp-fullscreen-backdrop"
            onClick={() => setActiveStep(null)}
          />

          {/* Shared close button */}
          <button
            className="lp-fullscreen-close"
            onClick={() => setActiveStep(null)}
          >
            ✕
          </button>

          {/* STEP 1 – FOUNDATION UNIVERSE */}
          {activeStep === 1 && (
            <div className="lp-fullscreen-inner lp-foundation-universe">
              <div className="lp-orbit">
                <span className="orbit-chip html">&lt;HTML&gt;</span>
                <span className="orbit-chip css">.CSS</span>
                <span className="orbit-chip js">JS()</span>
                <span className="orbit-chip logic">Logic</span>
              </div>
              <div className="lp-full-text">
                <p className="lp-step-label">Step 1 · Foundation</p>
                <h2>We switch on your brain&apos;s <span>developer mode</span>.</h2>
                <p>
                  In this phase you understand how the web actually works. You
                  build your first pages, break things, fix them and slowly start
                  thinking like a problem solver – not a copy-paste coder.
                </p>
                <div className="lp-pill-row">
                  <span>HTML &amp; CSS Lab</span>
                  <span>Debugging Mindset</span>
                  <span>VS Code Setup</span>
                  <span>Git Basics</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 – CORE SKILL / CODE TRANCE */}
          {activeStep === 2 && (
            <div className="lp-fullscreen-inner lp-core-universe">
              <div className="lp-floating-tags">
                <span>React</span>
                <span>AWS</span>
                <span>Node.js</span>
                <span>REST API</span>
                <span>TypeScript</span>
                <span>AI</span>
                <span>TypeScript2</span>
                 <span>TypeScript23</span>
              </div>
              <div className="lp-code-stage">
                <div className="lp-full-text">
                  <p className="lp-step-label">Step 2 · Core Skill</p>
                  <h2>
                    Choose your <span>main stack</span> and live in code.
                  </h2>
                  <p>
                    You write components, manage state, call APIs, and structure
                    apps like a real engineer. Daily code reviews, mentor
                    feedback and pair programming sessions make sure you don&apos;t
                    get stuck.
                  </p>
                  <div className="lp-pill-row">
                    <span>React / Angular Track</span>
                    <span>Clean Folder Structures</span>
                    <span>API Integration</span>
                    <span>Best Practices</span>
                  </div>
                </div>

                <div className="lp-code-window">
                  <div className="lp-code-header">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                    <span className="lp-code-title">StudentCard.jsx</span>
                  </div>
                  <pre className="lp-code-block">
{`function StudentCard({ name, course, status }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Learning: {course}</p>
      <span className={status === "placed" ? "badge success" : "badge"}>
        {status === "placed" ? "Placed ✅" : "In Progress"}
      </span>
    </div>
  );
}

export default function Classroom() {
  const students = [
    { name: "Akhil", course: "React + Node", status: "placed" },
    { name: "Sneha", course: "Angular", status: "in-progress" },
  ];

  return (
    <section className="grid">
      {students.map((s) => (
        <StudentCard key={s.name} {...s} />
      ))}
    </section>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 – PROJECT GALAXY */}
          {activeStep === 3 && (
            <div className="lp-fullscreen-inner lp-project-universe">
              <div className="lp-project-stars" />
              <div className="lp-full-text">
                <p className="lp-step-label">Step 3 · Real Projects</p>
                <h2>
                  From <span>tutorials</span> to <span>real apps</span>.
                </h2>
                <p>
                  You work on production-style projects with teammates. You
                  experience Git conflicts, reviews, deadlines – the fun chaos of
                  real development.
                </p>
              </div>

              <div className="lp-project-gallery">
                <div className="lp-project-tile tile-1">
                  <h4>Student Analytics Dashboard</h4>
                  <p>Charts, filters, role-based access and API data.</p>
                </div>
                <div className="lp-project-tile tile-2">
                  <h4>Course Booking Platform</h4>
                  <p>Authentication, forms, validation & payment simulation.</p>
                </div>
                <div className="lp-project-tile tile-3">
                  <h4>Personal Portfolio</h4>
                  <p>Your own brand on the internet with all projects listed.</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 – PLACEMENT / CELEBRATION */}
          {activeStep === 4 && (
            <div className="lp-fullscreen-inner lp-placement-universe">
              <div className="lp-confetti-rain">
                {Array.from({ length: 70 }).map((_, i) => (
                  <span key={i} className="confetti-piece" />
                ))}
              </div>

              <div className="lp-full-text centered">
                <p className="lp-step-label">Step 4 · Placement Launch</p>
                <h2>
                  <span>Congratulations!</span> You&apos;re officially selected.
                </h2>
                <p>
                  We celebrate harder than you. Because we&apos;ve seen your
                  journey from that very first{" "}
                  <code>&lt;h1&gt;Hello World&lt;/h1&gt;</code> line.
                </p>

                <div className="lp-offer-big">
                  <div className="lp-offer-top">
                    <span>Offer Letter</span>
                    <span className="company">HLC Partner Company</span>
                  </div>
                  <p>
                    Dear <strong>Candidate</strong>, we are pleased to offer you
                    the role of <strong>Software Engineer Trainee</strong>. Your
                    performance in interviews and the project portfolio built
                    with HLC Tree Tech have impressed our panel.
                  </p>
                  <p className="lp-offer-meta">
                    Joining: <strong>Next Month</strong> · Location:{" "}
                    <strong>Hyderabad / Bangalore</strong>
                  </p>
                </div>

                <p className="lp-final-note">
                  We stay with you from your first class to the first selfie with
                  your company ID card.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default LearningPath;
