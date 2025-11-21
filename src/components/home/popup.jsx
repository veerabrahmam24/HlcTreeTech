import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Popup({
  open = true,
  title = "HLC Tree Technologies",
  subtitle = "Tell us what you need — our team will contact you",
  actionText = "Submit",
  onAction = (data) => console.log("Form:", data),
  onClose = () => {},
}) {
  // ensure portal root exists
  useEffect(() => {
    let root = document.getElementById("hlc-popup-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "hlc-popup-root";
      document.body.appendChild(root);
    }
  }, []);

  // basic fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("Training");

  // dependent fields
  const [trainingCourse, setTrainingCourse] = useState("React");
  const [experienceYears, setExperienceYears] = useState("");
  const [supportHours, setSupportHours] = useState("");
  const [freelanceType, setFreelanceType] = useState("Ecommerce");

  const [errors, setErrors] = useState({});

  if (!open) return null;

  const validate = () => {
    const e = {};

    if (!name.trim()) e.name = "Name required";
    if (!email.trim()) e.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Invalid email";

    if (!phone.trim()) e.phone = "Contact required";

    if (purpose === "Work Support") {
      if (!experienceYears) e.experienceYears = "Enter experience";
      if (!supportHours) e.supportHours = "Enter hours";
    }

    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    const formData = {
      name,
      email,
      phone,
      purpose,
      trainingCourse: purpose === "Training" ? trainingCourse : null,
      experienceYears: purpose === "Work Support" ? experienceYears : null,
      supportHours: purpose === "Work Support" ? supportHours : null,
      freelanceType: purpose === "Freelancer" ? freelanceType : null,
    };

    onAction(formData);
  };

  const popup = (
    <div
      style={{
        position: "fixed",
        bottom: 22,
        right: 22,
        zIndex: 100000,
        width: 370,
        maxWidth: "calc(100% - 40px)",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          position: "relative",
          padding: 12,
          borderRadius: 14,
          background: "#ffffff",
          color: "#051014",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 4,
            borderRadius: 6,
            color: "#333",
          }}
        >
          ✕
        </button>

        {/* TITLE */}
        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{title}</h3>
        <p style={{ margin: "6px 0 12px", fontSize: 13, color: "#444" }}>{subtitle}</p>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* NAME */}
          <label style={{ fontSize: 12 }}>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            style={inputStyle}
          />
          {errors.name && errorStyle(errors.name)}

          {/* EMAIL */}
          <label style={{ fontSize: 12 }}>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={inputStyle}
          />
          {errors.email && errorStyle(errors.email)}

          {/* PHONE */}
          <label style={{ fontSize: 12 }}>Contact Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 XXXXXXXXXX"
            style={inputStyle}
          />
          {errors.phone && errorStyle(errors.phone)}

          {/* PURPOSE */}
          <label style={{ fontSize: 12 }}>What do you want?</label>
          <select
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            style={inputStyle}
          >
            <option>Training</option>
            <option>Work Support</option>
            <option>Freelancer</option>
          </select>

          {/* DEPENDENT FIELDS */}

          {/* TRAINING */}
          {purpose === "Training" && (
            <>
              <label style={{ fontSize: 12 }}>Choose Course</label>
              <select
                value={trainingCourse}
                onChange={(e) => setTrainingCourse(e.target.value)}
                style={inputStyle}
              >
                <option>React</option>
                <option>HTML & CSS</option>
                <option>JavaScript</option>
                <option>Data Analyst</option>
                <option>AI</option>
              </select>
            </>
          )}

          {/* WORK SUPPORT */}
          {purpose === "Work Support" && (
            <>
              <label style={{ fontSize: 12 }}>Experience (Years)</label>
              <input
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                style={inputStyle}
                type="number"
                min="0"
              />
              {errors.experienceYears && errorStyle(errors.experienceYears)}

              <label style={{ fontSize: 12 }}>Hours of Support Needed</label>
              <input
                value={supportHours}
                onChange={(e) => setSupportHours(e.target.value)}
                style={inputStyle}
                type="number"
                min="1"
              />
              {errors.supportHours && errorStyle(errors.supportHours)}
            </>
          )}

          {/* FREELANCER */}
          {purpose === "Freelancer" && (
            <>
              <label style={{ fontSize: 12 }}>Project Category</label>
              <select
                value={freelanceType}
                onChange={(e) => setFreelanceType(e.target.value)}
                style={inputStyle}
              >
                <option>Ecommerce</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Business</option>
                <option>Finance</option>
                <option>Other</option>
              </select>
            </>
          )}

          <br />

          {/* BUTTONS */}
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <button style={submitBtn}>{actionText}</button>
            <button type="button" onClick={onClose} style={dismissBtn}>
              Dismiss
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const root = document.getElementById("hlc-popup-root") || document.body;
  return ReactDOM.createPortal(popup, root);
}

/* --- STYLES --- */

const inputStyle = {
  width: "100%",
  padding: "9px 10px",
  borderRadius: 8,
  border: "1px solid rgba(0,0,0,0.12)",
  margin: "4px 0 6px",
  fontSize: 13,
  outline: "none",
};

const submitBtn = {
  padding: "10px 14px",
  background: "#10b981",
  color: "white",
  fontWeight: 700,
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  flex: 1,
};

const dismissBtn = {
  padding: "10px 14px",
  background: "white",
  color: "#333",
  fontWeight: 500,
  borderRadius: 8,
  border: "1px solid rgba(0,0,0,0.12)",
  cursor: "pointer",
  flex: 1,
};

const errorStyle = (msg) => (
  <div style={{ color: "#e53935", fontSize: 11, marginTop: -6, marginBottom: 6 }}>
    {msg}
  </div>
);
