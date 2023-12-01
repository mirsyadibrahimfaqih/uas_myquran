import React from "react";

const Home = () => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  };

  const logoStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%", // Add a circular border-radius
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)", // Add a subtle box shadow
    animation: "walk 1s infinite, pulse 1.5s infinite", // Walking and pulsating animations
  };

  const textStyle = {
    fontSize: "2rem",
    fontWeight: "bold", // Increase the font weight
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle text shadow
    animation: "fadeInUp 1s ease-in-out", // fadeInUp animation
  };

  return (
    <div style={containerStyle}>
      <img src="logo.png" alt="logo.png" style={logoStyle} />
      <h3 style={textStyle}>Selamat Datang!</h3>
    </div>
  );
};

export default Home;

// Add the CSS keyframes for animations inline
const styles = `
  @keyframes walk {
    0%, 100% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(5px) rotate(5deg);
    }
    50% {
      transform: translateX(0) rotate(0deg);
    }
    75% {
      transform: translateX(-5px) rotate(-5deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject the styles into the head of the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);