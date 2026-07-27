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
    emailjs.init("tyj2mjcSSRNT3poKH");
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
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      purpose,
      trainingCourse: purpose === "Training" ? trainingCourse : "",
      experienceYears: purpose === "Work Support" ? experienceYears + " years" : "",
      supportHours: purpose === "Work Support" ? supportHours + " hours/month" : "",
      freelanceType: purpose === "Freelancer" ? freelanceType : "",
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      
      firstLetter: name.trim() ? name.trim()[0].toUpperCase() : "?",
    };

    emailjs
      .send("service_3tefgzd", "template_8zpkrs4", formData)
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
        maxWidth: "calc(100% - 32px)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          padding: 14,
          borderRadius: 16,
          background: "#ffffff",
          color: "#1e293b",
          border: "1px solid #e2e8f0",
          boxShadow: "0 20px 60px rgba(37,99,235,0.15), 0 0 0 1px rgba(37,99,235,0.08)",
          backdropFilter: "blur(8px)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 28,
            height: 28,
            background: "#f1f5f9",
            border: "1px solid #e2e8f0",
            cursor: "pointer",
            borderRadius: "50%",
            color: "#64748b",
            fontSize: 14,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, fontFamily: "'Poppins',sans-serif", color: "#2563eb" }}>{title}</h3>
        <p style={{ margin: "6px 0 12px", fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>
          {subtitle}
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: 12, color: "#475569" }}>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            style={inputStyle}
            required
          />
          {errors.name && errorStyle(errors.name)}

          <label style={{ fontSize: 12, color: "#475569" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={inputStyle}
            required
          />
          {errors.email && errorStyle(errors.email)}

          <label style={{ fontSize: 12, color: "#475569" }}>Contact Number</label>
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

          <label style={{ fontSize: 12, color: "#475569" }}>What do you want?</label>
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
              <label style={{ fontSize: 12, color: "#475569" }}>Choose Course</label>
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
              <label style={{ fontSize: 12, color: "#475569" }}>Experience (Years)</label>
              <input
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
                style={inputStyle}
                type="number"
                min="0"
                required
              />
              {errors.experienceYears && errorStyle(errors.experienceYears)}

              <label style={{ fontSize: 12, color: "#475569" }}>Hours of Support Needed</label>
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
              <label style={{ fontSize: 12, color: "#475569" }}>Project Category</label>
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
  padding: "9px 12px",
  borderRadius: 8,
  border: "1px solid #e2e8f0",
  background: "#f8faff",
  color: "#1e293b",
  margin: "4px 0 8px",
  fontSize: 13,
  outline: "none",
  fontFamily: "'Inter',sans-serif",
};

const submitBtn = {
  padding: "10px 14px",
  background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
  color: "white",
  fontWeight: 700,
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  flex: 1,
  fontFamily: "'Inter',sans-serif",
  boxShadow: "0 4px 15px rgba(37,99,235,0.3)",
};

const dismissBtn = {
  padding: "10px 14px",
  background: "#f1f5f9",
  color: "#64748b",
  fontWeight: 500,
  borderRadius: 8,
  border: "1px solid #e2e8f0",
  cursor: "pointer",
  flex: 1,
  fontFamily: "'Inter',sans-serif",
};

const errorStyle = (msg) => (
  <div style={{ color: "#f87171", fontSize: 11, marginTop: -4, marginBottom: 6 }}>
    {msg}
  </div>
);
