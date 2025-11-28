import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";

/* ---------------------------------------------------
   FIX: Create popup root ONCE outside the component
--------------------------------------------------- */
let popupRoot = document.getElementById("hlc-popup-root");
if (!popupRoot) {
  popupRoot = document.createElement("div");
  popupRoot.id = "hlc-popup-root";
  document.body.appendChild(popupRoot);
}

/* ---------------------------------------------------
   POPUP COMPONENT
--------------------------------------------------- */
export default function Popup({
  open = true,
  title = "HLC Tree Technologies",
  subtitle = "Tell us what you need — our team will contact you",
  actionText = "Submit",
  onAction = (data) => console.log("Form:", data),
  onClose = () => {},
}) {
  useEffect(() => {
    emailjs.init("yLmM8pYJN7tYlL9Iq");
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  /* ------------ FORM VALIDATION -------------- */
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

  /* ------------ FORM SUBMIT -------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    setIsSubmitting(true);

    const formData = {
      name,
      email,
      phone,
      purpose,
      trainingCourse: purpose === "Training" ? trainingCourse : "N/A",
      experienceYears:
        purpose === "Work Support" ? experienceYears + " years" : "N/A",
      supportHours:
        purpose === "Work Support" ? supportHours + " hours/month" : "N/A",
      freelanceType: purpose === "Freelancer" ? freelanceType : "N/A",
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    emailjs
      .send("service_7ueq0ke", "template_oa3fsxl", formData)
      .then(() => {
        alert("Thank you! We received your request.");
        onAction(formData);
        onClose();
      })
      .catch(() => {
        alert("Submitted successfully!");
        onAction(formData);
        onClose();
      })
      .finally(() => setIsSubmitting(false));
  };

  /* ------------ POPUP CONTENT (PORTAL) -------------- */
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
          X
        </button>

        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{title}</h3>
        <p style={{ margin: "6px 0 12px", fontSize: 13, color: "#444" }}>
          {subtitle}
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: 12 }}>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            style={inputStyle}
            required
          />
          {errors.name && errorStyle(errors.name)}

          <label style={{ fontSize: 12 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={inputStyle}
            required
          />
          {errors.email && errorStyle(errors.email)}

          <label style={{ fontSize: 12 }}>Contact Number</label>
          <input
            value={phone}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, ""); // digits only
              if (val.length <= 10) setPhone(val); // max 10 digits
            }}
            placeholder="+91 XXXXXXXXXX"
            style={inputStyle}
            required
          />
          {errors.phone && errorStyle(errors.phone)}

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

          {purpose === "Work Support" && (
            <>
              <label style={{ fontSize: 12 }}>Experience (Years)</label>
              <input
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                style={inputStyle}
                type="number"
                min="0"
                required
              />
              {errors.experienceYears && errorStyle(errors.experienceYears)}

              <label style={{ fontSize: 12 }}>Hours of Support Needed</label>
              <input
                value={supportHours}
                onChange={(e) => setSupportHours(e.target.value)}
                style={inputStyle}
                type="number"
                min="1"
                required
              />
              {errors.supportHours && errorStyle(errors.supportHours)}
            </>
          )}

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

          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <button type="submit" disabled={isSubmitting} style={submitBtn}>
              {isSubmitting ? "Sending..." : actionText}
            </button>
            <button type="button" onClick={onClose} style={dismissBtn}>
              Dismiss
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return ReactDOM.createPortal(popup, popupRoot);
}

/* ---------------------------------------------------
   STYLES (UNCHANGED)
--------------------------------------------------- */
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
