import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorElement = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/"); // Redirects to the home page
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: 0 }}>404</h1>
      <p style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={handleNavigateHome}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorElement;
