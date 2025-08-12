// Projects.js
import React from "react";
import NavBar from "./NavBar";

const projects = [
  {
    title: "Personal Porfolio",
    year: "2025",
    description:
      "Designed and developed a responsive personal portfolio using ReactJS and Tailwind CSS, showcasing projects and skills with a clean, modern interface for an engaging user experience.",
    image: "/src/assets/website.png", // Replace with your actual image path
    tags: [
      "JavaSript",
      "Tailwind CSS",
      "ReactJS",
      "Vite",
      "HTML",
      "UI/UX Design"
    ],
    website: "#",
    source: "#",
  },
  {
    title: "SASE Marketing Chair",
    year: "2024-2025",
    description:
      "Serve as Marketing Chair for the Society of Asian Scientists and Engineers, creating digital advertisements, managing social media campaigns, and designing merchandise to promote events and strengthen community engagement.",
    image: "/src/assets/worldwise.png", // Replace with your actual image path
    tags: [
      "Adobe Illustrator",
      "Canva",
      "Graphic Design",
      "Public Speaking",
      "Brand Strategy"
    ],
    website: "#",
    source: "#",
  },
  {
    title: "Placeholder",
    year: "2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tellus eu felis porttitor malesuada. Sed euismod neque in odio pharetra, sed dignissim purus interdum. Curabitur nec libero vitae nunc tincidunt lacinia.",
    image: "/src/assets/koffee.png", // Replace with your actual image path
    tags: [
      "placeholder",
      "placeholder",
      "placeholder",
      "placeholder",
    ],
    website: "#",
    source: "#",
  },
];


// --- Move style definitions above JSX ---
const pageStyle = {
  minHeight: "100vh",
  minWidth: "100%",
  background: "#fff",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
};

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: 36,
  justifyContent: "center",
  alignItems: "stretch",
  margin: "48px auto 0 auto",
  maxWidth: 1200,
  width: "100%",
  boxSizing: "border-box",
};

const Projects = () => (
  <div style={pageStyle}>
    <NavBar blackFont />
    <div
      className="projects-container"
      style={{
        ...containerStyle,
        paddingLeft:
          typeof window !== 'undefined' && window.innerWidth <= 600 ? 12 : 32,
        paddingRight:
          typeof window !== 'undefined' && window.innerWidth <= 600 ? 12 : 32,
      }}
    >
      {projects.map((project, idx) => (
        <div key={project.title} className="project-card" style={cardStyle}>
          <div style={{ width: "100%", height: 180, background: "#f5f5f5", borderTopLeftRadius: 16, borderTopRightRadius: 16, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div style={{ padding: 24, paddingTop: 18, display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 22, color: "#222", marginBottom: 2 }}>{project.title}</div>
            <div style={{ fontSize: 15, color: "#888", fontWeight: 500, marginBottom: 10 }}>{project.year}</div>
            <div style={{ fontSize: 16, color: "#444", marginBottom: 16, minHeight: 48 }}>{project.description}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
              {project.tags.map(tag => (
                <span key={tag} style={tagStyle}>{tag}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 'auto' }}>
              <a href={project.website} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
                <span role="img" aria-label="Website">🌐</span> Website
              </a>
              <a href={project.source} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
                <span role="img" aria-label="Source">💻</span> Source
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <style>{`
      @media (max-width: 900px) {
        .projects-container {
          flex-direction: column !important;
          gap: 20px !important;
          align-items: stretch !important;
          padding-left: 16px !important;
          padding-right: 16px !important;
          box-sizing: border-box !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        .project-card {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 480px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
      }
    `}</style>
  </div>
);

// ...existing code...

const cardStyle = {
  background: "#fff",
  borderRadius: 16,
  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
  border: "1px solid #eee",
  width: 420,
  minWidth: 320,
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  transition: "box-shadow 0.2s, transform 0.2s",
};

const tagStyle = {
  background: "#f5f5f5",
  color: "#444",
  fontWeight: 600,
  fontSize: 14,
  borderRadius: 8,
  padding: "4px 14px",
  marginBottom: 2,
  letterSpacing: 0.5,
  fontFamily: "inherit",
};

const buttonStyle = {
  background: "#fff",
  color: "#222",
  border: "1px solid #ddd",
  borderRadius: 8,
  padding: "8px 18px",
  fontWeight: 700,
  fontSize: 15,
  textDecoration: "none",
  boxShadow: "0 1px 4px #0001",
  display: "flex",
  alignItems: "center",
  gap: 6,
  transition: "background 0.18s, box-shadow 0.18s, color 0.18s",
  cursor: "pointer",
};

export default Projects;
