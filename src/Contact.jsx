import React, { useRef, useState } from "react";
import NavBar from "./NavBar";
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "./emailjsConfig";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("");
    emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form.current,
      EMAILJS_PUBLIC_KEY
    )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  // Responsive padding for mobile view
  const getResponsiveContainerStyle = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 600) {
      return { ...containerStyle, paddingLeft: 12, paddingRight: 12 };
    }
    return { ...containerStyle, paddingLeft: 32, paddingRight: 32 };
  };

  return (
    <div style={pageStyle}>
      <NavBar blackFont />
      <div className="contact-container-responsive" style={getResponsiveContainerStyle()}>
  {/* Montserrat font import for best results */}
  <link href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap" rel="stylesheet" />
  <h2 style={{ marginBottom: 16, color: '#575757', fontFamily: 'Montserrat, Roboto Condensed, sans-serif', fontWeight: 700 }}>Let's get in touch! ꩜ .ᐟ</h2>
        <form ref={form} onSubmit={sendEmail} style={formStyle} aria-label="Contact form">
          <label htmlFor="user_name" style={{ ...labelStyle, color: '#a8a8a8' }}>Name</label>
          <input type="text" id="user_name" name="user_name" required style={inputStyle} />

          <label htmlFor="user_email" style={{ ...labelStyle, color: '#a8a8a8' }}>Email</label>
          <input type="email" id="user_email" name="user_email" required style={inputStyle} />

          <label htmlFor="message" style={{ ...labelStyle, color: '#a8a8a8' }}>Message</label>
          <textarea id="message" name="message" required rows={5} style={textareaStyle} />

          <button type="submit" style={buttonStyle}>Send</button>
        </form>
        {status && <p style={status.startsWith("Message sent") ? successStyle : errorStyle}>{status}</p>}
      </div>
    </div>
  );
};


const pageStyle = {
  minHeight: "100vh",
  minWidth: "100vw",
  height: "100vh",
  width: "100vw",
  overflow: "auto",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const containerStyle = {
  margin: "32px auto auto auto",
  background: "#f5f5f5",
  borderRadius: 16,
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  border: "1px solid #eee",
  padding: 32,
  maxWidth: 480,
  width: "98%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const labelStyle = {
  fontWeight: 600,
  marginBottom: 4,
  fontFamily: "'Roboto', sans-serif",
};

const inputStyle = {
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #ccc",
  fontSize: 16,
  marginBottom: 8,
  background: "#fff",
  color: "#575757",
};

const textareaStyle = {
  ...inputStyle,
  minHeight: 100,
  resize: "vertical",
  background: "#fff",
  color: "#575757",
};

const buttonStyle = {
  background: "#fff",
  color: "#575757",
  border: "none",
  borderRadius: 6,
  padding: "12px 0",
  fontWeight: 700,
  fontSize: 16,
  cursor: "pointer",
  marginTop: 8,
  transition: "background 0.2s",
};

const successStyle = {
  color: "#2e7d32",
  marginTop: 12,
  fontWeight: 600,
};

const errorStyle = {
  color: "#c62828",
  marginTop: 12,
  fontWeight: 600,
};

export default Contact;
