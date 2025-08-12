import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const backgroundImages = [
  "https://i.pinimg.com/originals/85/31/e7/8531e73c10e44022c205bac578282863.gif",
  "https://i.pinimg.com/originals/53/f4/ce/53f4ce77dddd0f071c12e3c983dce33f.gif",
  "https://i.pinimg.com/originals/70/db/4e/70db4ed7b5ba7f157e8a57330889af79.gif",
];

const pageStyleBase = {
  minHeight: "100vh",
  minWidth: "100vw",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Fira Mono', 'Consolas', monospace",
  zIndex: 0,
};

const FADE_DURATION = 1000; // ms
const DISPLAY_DURATION = 4000; // ms

const HomePage = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevIndex(bgIndex);
      setIsFading(true);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % backgroundImages.length);
        setIsFading(false);
      }, FADE_DURATION);
    }, DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [bgIndex]);

  return (
    <div style={pageStyleBase}>
      {/* Crossfade backgrounds */}
      {backgroundImages.map((img, i) => {
        let opacity = 0;
        if (i === bgIndex && !isFading) opacity = 1;
        if (i === prevIndex && isFading) opacity = 1 - (isFading ? 1 : 0);
        if (i === bgIndex && isFading) opacity = 1;
        return (
          <div
            key={img}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: `url(${img}) center/cover no-repeat`,
              opacity: i === bgIndex ? (isFading ? 1 : 1) : (i === prevIndex && isFading ? 1 : 0),
              transition: `opacity ${FADE_DURATION}ms cubic-bezier(.4,0,.2,1)`,
              zIndex: 0,
              pointerEvents: "none",
              filter: 'blur(6px)',
            }}
          />
        );
      })}
      {/* Light gray-transparent overlay for readability */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(80,80,80,0.45)",
        zIndex: 1,
        pointerEvents: "none",
        backdropFilter: "blur(0.5px)",
      }} />
      <NavBar />
      {/* Responsive padding for mobile */}
      <style>{`
        @media (max-width: 700px) {
          .homepage-main-text { 
            padding-left: 22px !important; 
            padding-right: 22px !important; 
            margin-top: 16px !important;
          }
        }
      `}</style>
  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div className="homepage-main-text" style={{
          color: "#fff",
          fontSize: 22,
          fontWeight: 500,
          textAlign: "center",
          textShadow: "0 2px 8px #0005",
          maxWidth: 700,
          margin: "100px auto 0 auto",
          letterSpacing: 1.5,
          lineHeight: 1.7,
        }}>
          <h1 style={{
            fontFamily: "'Montserrat', 'Fira Mono', 'Consolas', monospace, sans-serif",
            fontWeight: 700,
            fontSize: 50,
            marginTop: 50,
            marginBottom: 24,
            color: '#fff',
            letterSpacing: 1.5,
            textAlign: 'center',
          }}>
            Hi, I'm Jinhee! ꕤ*.ﾟ
          </h1>
          {/* Montserrat font import for best results */}
          <link href="https://fonts.googleapis.com/css?family=Montserrat:700&display=swap" rel="stylesheet" />
          <div style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 400,
            marginBottom: 40,
            textAlign: 'center',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
            fontFamily: "'Roboto', 'Fira Mono', 'Consolas', monospace, sans-serif",
          }}>
            I'm a full time Information Technology and Management student at the University at Buffalo with a passion for integrating art and STEM.
          </div>
          {/* Roboto font import for best results */}
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
            <Link to="/projects" style={{
              background: 'rgba(255,255,255,0.18)',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 18,
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.5)',
              fontFamily: "'Roboto', 'Fira Mono', 'Consolas', monospace, sans-serif",
              display: 'inline-block',
              transition: 'background 0.2s, color 0.2s',
              backdropFilter: 'blur(1px)',
            }}>View Projects</Link>
            <Link to="/contact" style={{
              background: 'rgba(255,255,255,0.18)',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 18,
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.5)',
              fontFamily: "'Roboto', 'Fira Mono', 'Consolas', monospace, sans-serif",
              display: 'inline-block',
              transition: 'background 0.2s, color 0.2s',
              backdropFilter: 'blur(1px)',
            }}>Contact Me</Link>
          {/* Roboto font import for best results */}
          <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
          </div>
        </div>
      </div>
      <div style={{ height: 40, zIndex: 1 }} />
    </div>
  );
};

export default HomePage;
