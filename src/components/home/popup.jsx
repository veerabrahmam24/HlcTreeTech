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
  useEffect(() => {
    let root = document.getElementById("hlc-popup-root");
    if (!root) {
      root = document.createElement("div");
      root.id = "hlc-popup-root";
      document.body.appendChild(root);
    }
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

    const formData = {
      name, email, phone, purpose,
      trainingCourse: purpose === "Training" ? trainingCourse : null,
      experienceYears: purpose === "Work Support" ? experienceYears : null,
      supportHours: purpose === "Work Support" ? supportHours : null,
      freelanceType: purpose === "Freelancer" ? freelanceType : null,
    };
    onAction(formData);

    // Success message
    alert("Thank you! We received your request.");
    onClose();
    setIsSubmitting(false);
  };

  const popup = (
    <div style={{ position: "fixed", bottom: 22, right: 22, zIndex: 100000, width: 370, maxWidth: "calc(100% - 40px)" }}>
      <div style={{ position: "relative", padding: 16, borderRadius: 14, background: "#fff", boxShadow: "0 10px 40px rgba(0,0,0,0.2)", border: "1px solid #eee" }}>

        <button onClick={onClose} style={{ position: "absolute", top: 10, right: 10, background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>×</button>

        <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 700 }}>{title}</h3>
        <p style={{ margin: "0 0 16px", fontSize: 13, color: "#555" }}>{subtitle}</p>

        <form
          action="https://formsubmit.co/adarshkoyyana@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="New Lead from HLC Popup!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="_honey" style={{display:"none"}} />

          <label style={{fontSize:12, display:"block", marginTop:10}}>Name</label>
          <input name="Name" value={name} onChange={e=>setName(e.target.value)} style={inputStyle} required />
          {errors.name && errorStyle(errors.name)}

          <label style={{fontSize:12, display:"block", marginTop:10}}>Email</label>
          <input type="email" name="Email" value={email} onChange={e=>setEmail(e.target.value)} style={inputStyle} required />
          {errors.email && errorStyle(errors.email)}

          <label style={{fontSize:12, display:"block", marginTop:10}}>Phone</label>
          <input name="Phone" value={phone} onChange={e=>setPhone(e.target.value)} style={inputStyle} required />
          {errors.phone && errorStyle(errors.phone)}

          <label style={{fontSize:12, display:"block", marginTop:10}}>Purpose</label>
          <select name="Purpose" value={purpose} onChange={e=>setPurpose(e.target.value)} style={inputStyle}>
            <option>Training</option>
            <option>Work Support</option>
            <option>Freelancer</option>
          </select>

          {purpose === "Training" && (
            <>
              <label style={{fontSize:12, display:"block", marginTop:10}}>Course</label>
              <select name="Course" value={trainingCourse} onChange={e=>setTrainingCourse(e.target.value)} style={inputStyle}>
                <option>React</option><option>HTML & CSS</option><option>JavaScript</option><option>Data Analyst</option><option>AI</option>
              </select>
            </>
          )}

          {purpose === "Work Support" && (
            <>
              <label style={{fontSize:12, display:"block", marginTop:10}}>Experience (Years)</label>
              <input name="Experience Years" value={experienceYears} onChange={e=>setExperienceYears(e.target.value)} style={inputStyle} type="number" required />
              <label style={{fontSize:12, display:"block", marginTop:10}}>Support Hours Needed</label>
              <input name="Support Hours" value={supportHours} onChange={e=>setSupportHours(e.target.value)} style={inputStyle} type="number" required />
            </>
          )}

          {purpose === "Freelancer" && (
            <>
              <label style={{fontSize:12, display:"block", marginTop:10}}>Project Type</label>
              <select name="Project Type" value={freelanceType} onChange={e=>setFreelanceType(e.target.value)} style={inputStyle}>
                <option>Ecommerce</option><option>Healthcare</option><option>Education</option><option>Business</option><option>Finance</option><option>Other</option>
              </select>
            </>
          )}

          <div style={{display:"flex", gap:10, marginTop:20}}>
            <button type="submit" disabled={isSubmitting} style={submitBtn}>
              {isSubmitting ? "Sending..." : actionText}
            </button>
            <button type="button" onClick={onClose} style={dismissBtn}>Dismiss</button>
          </div>
        </form>
      </div>
    </div>
  );

  const root = document.getElementById("hlc-popup-root") || document.body;
  return ReactDOM.createPortal(popup, root);
}

const inputStyle = { width:"100%", padding:"10px 12px", borderRadius:8, border:"1px solid #ddd", margin:"4px 0 10px", fontSize:13.5, outline:"none" };
const submitBtn = { padding:"12px", background:"#10b981", color:"white", fontWeight:700, border:"none", borderRadius:8, cursor:"pointer", flex:1 };
const dismissBtn = { padding:"12px", background:"white", color:"#333", border:"1px solid #ccc", borderRadius:8, cursor:"pointer", flex:1 };
const errorStyle = msg => <div style={{color:"#e53935", fontSize:11, marginTop:-8}}>{msg}</div>;
