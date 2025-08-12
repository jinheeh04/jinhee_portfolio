import React from "react";
import NavBar from "./NavBar";
import Masonry from "./Masonry";
import "./Masonry.css";

// Your list of items
const items = [
  {
    id: "0",
    img: "/src/assets/wish.png",
    height: 450,
  },
  {
    id: "1",
    img: "/src/assets/twilight.png",
    height: 450,
  },
  {
    id: "2",
    img: "/src/assets/sophiakats.jpg",
    height: 450,
  },
  {
    id: "3",
    img: "/src/assets/mylittlepony.jpg",
    height: 450,
  },
  {
    id: "4",
    img: "/src/assets/moully.jpg",
    height: 450,
  },
  {
    id: "5",
    img: "/src/assets/celine.png",
    height: 450,
  },
  {
    id: "6",
    img: "/src/assets/flowers.jpg",
    height: 450,
  },
  {
    id: "7",
    img: "/src/assets/heartcat.png",
    height: 450,
  },
  {
    id: "8",
    img: "/src/assets/jellyfish.png",
    height: 450,
  },
  {
    id: "9",
    img: "https://picsum.photos/id/1050/400/450?grayscale",
    url: "https://example.com/nine",
    height: 450,
  },
];

const Art = () => {
  // Montserrat font import for best results
  React.useEffect(() => {
    if (!document.getElementById('montserrat-font')) {
      const link = document.createElement('link');
      link.id = 'montserrat-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css?family=Montserrat:700&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div style={{
      ...pageStyle
    }}>
      <NavBar blackFont />
      <div 
        style={{
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 12,
            color: "#737373",
            fontFamily: "'Montserrat', 'Roboto Condensed', 'Roboto', sans-serif",
          }}
        >
          digital art ₊˚⊹ᰔ
        </h1>
      <div
        className="content-container"
        style={{
          fontSize: 19,
          color: "#757575ff",
          marginBottom: 10,
          fontWeight: 400,
          fontFamily: "Roboto Condensed, sans-serif",
          textAlign: "left",
          lineHeight: 1.5,
          maxWidth: 800,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 32,
          paddingRight: 32,
        }}
      >
        Digital illustration has been a big part of my life for about eight years, with Clip Studio Paint as my go-to tool. I love making art and am always looking for new ways to challenge and inspire myself.
      </div>
      <style>{`
        @media (max-width: 600px) {
          .content-container {
            padding-left: 22px !important;
            padding-right: 22px !important;
          }
        }
      `}</style>
    </div>
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "0 48px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1400 }}>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  </div>
  );
}

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

export default Art;
