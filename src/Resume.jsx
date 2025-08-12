import React from "react";
import NavBar from "./NavBar";
import { RESUME_PDF_PATH } from "./resumeConfig";


const Resume = () => (
  <div style={pageStyle}>
  <NavBar blackFont />
    <div
      className="resume-container-responsive"
      style={typeof window !== 'undefined' && window.innerWidth <= 600
        ? mobileViewerContainerStyle
        : viewerContainerStyle}
    >
      <iframe
        src={RESUME_PDF_PATH}
        title="Resume PDF"
        style={iframeStyle}
        frameBorder="0"
        width="100%"
        height="100%"
        aria-label="Resume PDF Viewer"
      />
    </div>
  </div>
);


const pageStyle = {
  minHeight: "100vh",
  minWidth: "100vw",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const viewerContainerStyle = {
  flex: 1,
  width: "100vw",
  height: "calc(100vh - 60px)", // adjust if NavBar height changes
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  background: "#fff",
  overflow: "auto",
  marginTop: 24,
  boxSizing: "border-box",
};

// Responsive padding for mobile
const mobileViewerContainerStyle = {
  ...viewerContainerStyle,
};

const iframeStyle = {
  width: "80vw",
  height: "90%",
  minHeight: 400,
  minWidth: 300,
  border: "1px solid #ccc",
  borderRadius: 8,
  background: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
};

export default Resume;
