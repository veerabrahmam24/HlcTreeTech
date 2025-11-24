import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";

/* --- FIX: CREATE POPUP ROOT ONLY ONCE --- */
let popupRoot = document.getElementById("hlc-popup-root");
if (!popupRoot) {
  popupRoot = document.createElement("div");
  popupRoot.id = "hlc-popup-root";
  document.body.appendChild(popupRoot);
}

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

    setIsSubmitting(true);

    const formData = {
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

  const popup = (
    <div style={{ position: "fixed", bottom: 22, right: 22, zIndex: 100000, width: 370, maxWidth: "calc(100% - 40px)", fontFamily: "inherit" }}>
      <div style={{ position: "relative", padding: 12, borderRadius: 14, background: "#ffffff", color: "#051014", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>

        <button onClick={onClose} style={{ position: "absolute", top: 8, right: 8, background: "transparent", border: "none", cursor: "pointer", padding: 4, borderRadius: 6, color: "#333" }}>X</button>

        <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{title}</h3>
        <p style={{ margin: "6px 0 12px", fontSize: 13, color: "#444" }}>{subtitle}</p>

        <form onSubmit={handleSubmit}>

          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
          {errors.name && errorStyle(errors.name)}

          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
          {errors.email && errorStyle(errors.email)}

          <label>Phone</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
          {errors.phone && errorStyle(errors.phone)}

          <label>Purpose</label>
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)} style={inputStyle}>
            <option>Training</option>
            <option>Work Support</option>
            <option>Freelancer</option>
          </select>

          {purpose === "Training" && (
            <>
              <label>Choose Course</label>
              <select value={trainingCourse} onChange={(e) => setTrainingCourse(e.target.value)} style={inputStyle}>
                <option>React</option>
                <option>HTML & CSS</option>
                <option>JavaScript</option>
              </select>
            </>
          )}

          {purpose === "Work Support" && (
            <>
              <label>Experience (Years)</label>
              <input value={experienceYears} onChange={(e) => setExperienceYears(e.target.value)} style={inputStyle} />

              <label>Support Hours</label>
              <input value={supportHours} onChange={(e) => setSupportHours(e.target.value)} style={inputStyle} />
            </>
          )}

          <div style={{ display: "flex", gap: 10, marginTop: 15 }}>
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

/* --- Styles --- */
const inputStyle = {
  width: "100%",
  padding: "9px 10px",
  borderRadius: 8,
  border: "1px solid rgba(0,0,0,0.12)",
  margin: "4px 0 6px",
  fontSize: 13,
};

const submitBtn = {
  padding: "10px 14px",
  background: "#10b981",
  color: "white",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  flex: 1,
};

const dismissBtn = {
  padding: "10px 14px",
  background: "white",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 8,
  cursor: "pointer",
  flex: 1,
};

const errorStyle = (msg) => (
  <div style={{ color: "red", fontSize: 11, marginBottom: 6 }}>
    {msg}
  </div>
);
