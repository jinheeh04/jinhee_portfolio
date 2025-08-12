import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/projects", label: "PROJECTS" },
  { to: "/art", label: "ART" },
  { to: "/resume", label: "RESUME" },
  { to: "/contact", label: "CONTACT" },
  { to: "https://www.linkedin.com/in/jinheebaek/", label: "LINKEDIN", external: true },
];

const NavBar = ({ blackFont }) => {
  const [navOpen, setNavOpen] = useState(false);
  const fontColor = blackFont ? "#575757" : "#fff";
  const navStyleLocal = { ...navStyle, color: fontColor, fontFamily: 'Roboto Condensed, sans-serif' };

  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 32, position: "relative", zIndex: 2 }}>
      <div className="navbar-content" style={{ display: "flex", alignItems: "center", width: "100%" }}>
  <div style={{ fontSize: 48, color: fontColor, fontFamily: 'East Sea Dokdo, Roboto Condensed, sans-serif', letterSpacing: 2, fontWeight: 700 }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "none", fontFamily: 'East Sea Dokdo, Roboto Condensed, sans-serif' }}>
            백진희
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", gap: 32, marginLeft: "auto" }}>
          {navLinks.map(link => (
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                style={navStyleLocal}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                style={navStyleLocal}
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
      </div>
      <style>{`
        @media (min-width: 900px) {
          header {
            padding-top: 50px !important;
          }
          .navbar-content {
            margin-left: 200px;
            margin-right: 200px;
            max-width: calc(100vw - 400px);
          }
        }
        .desktop-nav a:not([href="/"]), .desktop-nav a:not([href="/"]):visited, .desktop-nav a:not([href="/"]):active, .desktop-nav a:not([href="/"]):focus, .desktop-nav a:not([href="/"]):link,
        .desktop-nav .nav-link:not(.logo) {
          transition: opacity 0.25s;
        }
        .desktop-nav a:not([href="/"]):hover, .desktop-nav .nav-link:not(.logo):hover {
          opacity: 0.45;
        }
      `}</style>
      {/* Hamburger Icon for Mobile */}
      <button
        className="hamburger"
        aria-label="Open navigation menu"
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
          background: "none",
          border: "none",
          cursor: "pointer",
          zIndex: 3,
        }}
        onClick={() => setNavOpen(!navOpen)}
      >
  <span style={{ width: 28, height: 5, background: blackFont ? "#737373" : "#fff", margin: 3, borderRadius: 2, display: "block", transition: "0.3s" }} />
  <span style={{ width: 28, height: 5, background: blackFont ? "#737373" : "#fff", margin: 3, borderRadius: 2, display: "block", transition: "0.3s" }} />
  <span style={{ width: 28, height: 5, background: blackFont ? "#737373" : "#fff", margin: 3, borderRadius: 2, display: "block", transition: "0.3s" }} />
      </button>
      {/* Mobile Nav Drawer */}
      {navOpen && (
        <div
          className="mobile-nav"
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "70vw",
            maxWidth: 320,
            height: "100vh",
            background: "rgba(87,87,87,0.35)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: 32,
            zIndex: 10,
            boxShadow: "-2px 0 16px #0006",
            animation: "slideIn 0.2s",
          }}
        >
          <button
            aria-label="Close navigation menu"
            onClick={() => setNavOpen(false)}
            style={{ background: "none", border: "none", color: '#fff', fontSize: 32, alignSelf: "flex-end", marginBottom: 24, cursor: "pointer" }}
          >
            ×
          </button>
          {/* Home link only in mobile nav */}
          <Link
            to="/"
            style={{ ...navStyleLocal, color: '#fff', fontSize: 22, margin: "16px 0" }}
            onClick={() => setNavOpen(false)}
          >
            HOME
          </Link>
          {navLinks.map(link => (
            link.external ? (
              <a
                key={link.label}
                href={link.to}
                style={{ ...navStyleLocal, color: '#fff', fontSize: 22, margin: "16px 0" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                style={{ ...navStyleLocal, color: '#fff', fontSize: 22, margin: "16px 0" }}
                onClick={() => setNavOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
};

const navStyle = {
  color: "#fff",
  fontSize: 18,
  fontWeight: 700,
  fontFamily: "Roboto Condensed, sans-serif",
  letterSpacing: 1.5,
  textDecoration: "none",
  transition: "color 0.2s",
  cursor: "pointer",
};

export default NavBar;

// Add Roboto Condensed and East Sea Dokdo font imports to the document head if not already present
if (typeof document !== 'undefined') {
  if (!document.getElementById('roboto-condensed-font')) {
    const link = document.createElement('link');
    link.id = 'roboto-condensed-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap';
    document.head.appendChild(link);
  }
  if (!document.getElementById('east-sea-dokdo-font')) {
    const link2 = document.createElement('link');
    link2.id = 'east-sea-dokdo-font';
    link2.rel = 'stylesheet';
    link2.href = 'https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap';
    document.head.appendChild(link2);
  }
}
