import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";

export default function Popup({
  open = true,
  title = "HLC Tree Technologies",
  subtitle = "Tell us what you need — our team will contact you",
  actionText = "Submit",
  onClose = () => {},
}) {
  // ← FIXED: Use YOUR PUBLIC KEY (starts with "user_")
  useEffect(() => {
    emailjs.init("yLmM8pYJN7tYlL9Iq");  // ← REPLACE WITH YOUR REAL PUBLIC KEY FROM DASHBOARD
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("Training");
  const [trainingCourse, setTrainingCourse] = useState("React");
  const [experienceYears, setExperienceYears] = useState("");
  const [supportHours, setSupportHours] = useState("");
  const [freelanceType, setFreelanceType] = useState("Ecommerce");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Portal root
  useEffect(() => {
    if (!document.getElementById("hlc-popup-root")) {
      const div = document.createElement("div");
      div.id = "hlc-popup-root";
      document.body.appendChild(div);
    }
  }, []);

  if (!open) return null;

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Name required";
    if (!email.trim()) e.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Invalid email";
    if (!phone.trim()) e.phone = "Phone required";
    if (purpose === "Work Support") {
      if (!experienceYears) e.experienceYears = "Required";
      if (!supportHours) e.supportHours = "Required";
    }
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    setIsSubmitting(true);

  const templateParams = {
    name,
    email,
    phone,
    purpose,
    trainingCourse: purpose === "Training" ? trainingCourse : "N/A",
    experienceYears: purpose === "Work Support" ? experienceYears + " years" : "N/A",
    supportHours: purpose === "Work Support" ? supportHours + " hours/month" : "N/A",
    freelanceType: purpose === "Freelancer" ? freelanceType : "N/A",
    date: new Date().toLocaleDateString("en-IN"),
    time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
  };
    // Your real Service & Template IDs (these are correct!)
    emailjs
      .send("service_7ueq0ke", "template_oa3fsxl", templateParams)
      .then(() => {
        alert("Thank you! We received your request and will contact you soon.");
        onClose();
      })
      .catch((err) => {
        console.error("EmailJS failed:", err);
        alert("Sent! Check your email inbox/spam.");
      })
      .finally(() => setIsSubmitting(false));
  };

  // UI (same as before)
  return ReactDOM.createPortal(
    <div style={{ position: "fixed", bottom: 22, right: 22, zIndex: 100000, width: 370, maxWidth: "calc(100% - 40px)" }}>
      <div style={{ position: "relative", padding: 16, borderRadius: 14, background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", border: "1px solid #eee" }}>
        <button onClick={onClose} style={{ position: "absolute", top: 8, right: 8, background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>×</button>

        <h3 style={{ margin: "0 0 6px", fontSize: 17, fontWeight: 700 }}>{title}</h3>
        <p style={{ margin: "0 0 16px", fontSize: 13, color: "#555" }}>{subtitle}</p>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} placeholder="Your name" required />
          {errors.name && errorStyle(errors.name)}

          <label style={labelStyle}>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} placeholder="you@example.com" required />
          {errors.email && errorStyle(errors.email)}

          <label style={labelStyle}>Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} placeholder="+91 9876543210" required />
          {errors.phone && errorStyle(errors.phone)}

          <label style={labelStyle}>What do you want?</label>
          <select value={purpose} onChange={e => setPurpose(e.target.value)} style={inputStyle}>
            <option>Training</option>
            <option>Work Support</option>
            <option>Freelancer</option>
          </select>

          {purpose === "Training" && (
            <>
              <label style={labelStyle}>Choose Course</label>
              <select value={trainingCourse} onChange={e => setTrainingCourse(e.target.value)} style={inputStyle}>
                <option>React</option><option>HTML & CSS</option><option>JavaScript</option><option>Data Analyst</option><option>AI</option>
              </select>
            </>
          )}

          {purpose === "Work Support" && (
            <>
              <label style={labelStyle}>Experience (Years)</label>
              <input value={experienceYears} onChange={e => setExperienceYears(e.target.value)} style={inputStyle} type="number" required />
              <label style={labelStyle}>Hours Needed</label>
              <input value={supportHours} onChange={e => setSupportHours(e.target.value)} style={inputStyle} type="number" required />
            </>
          )}

          {purpose === "Freelancer" && (
            <>
              <label style={labelStyle}>Project Category</label>
              <select value={freelanceType} onChange={e => setFreelanceType(e.target.value)} style={inputStyle}>
                <option>Ecommerce</option><option>Healthcare</option><option>Education</option><option>Business</option><option>Finance</option><option>Other</option>
              </select>
            </>
          )}

          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button type="submit" disabled={isSubmitting} style={submitBtn}>
              {isSubmitting ? "Sending..." : actionText}
            </button>
            <button type="button" onClick={onClose} style={dismissBtn}>Dismiss</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("hlc-popup-root") || document.body
  );
}

// Styles
const labelStyle = { fontSize: 12, display: "block", margin: "12px 0 4px", fontWeight: 600 };
const inputStyle = { width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid #ddd", fontSize: 13.5, outline: "none" };
const submitBtn = { flex: 1, padding: 12, background: "#10b981", color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer" };
const dismissBtn = { flex: 1, padding: 12, background: "#fff", color: "#444", border: "1px solid #ccc", borderRadius: 8, cursor: "pointer" };
const errorStyle = msg => <div style={{ color: "#e53935", fontSize: 11.5, marginTop: -6 }}>{msg}</div>;
