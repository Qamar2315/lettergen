import React from "react";
import { useNavigate } from "react-router-dom";
import coverLetterImage from "../images/cover_page.jfif";

const Home = () => {
  const navigate = useNavigate();

  // Styles object
  const styles = {
    container: {
      fontFamily: "Roboto, Arial, sans-serif",
      textAlign: "center",
      background: "linear-gradient(to bottom, #e0f7fa, #f0f0f0)",
      padding: "40px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      maxWidth: "800px", // Adjusted maxWidth to keep content visible
      margin: "auto",
    },
    header: {
      marginBottom: "30px",
    },
    title: {
      color: "#2c3e50",
      fontSize: "2.5em",
      fontWeight: "bold",
      letterSpacing: "1px",
      margin: "10px 0",
    },
    subtitle: {
      fontSize: "1.2em",
      color: "#7f8c8d",
      lineHeight: "1.5",
    },
    section: {
      color: "#2c3e50",
      fontSize: "1.8em",
      margin: "30px 0 20px",
    },
    description: {
      fontSize: "1.1em",
      lineHeight: "1.6",
      color: "#7f8c8d",
    },
    button: {
      backgroundColor: "#1abc9c",
      color: "#fff",
      border: "none",
      padding: "14px 28px",
      fontSize: "1.1em",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#149b7e",
    },
    image: {
      maxWidth: "30%", // Ensure the image width does not exceed the container width
      borderRadius: "8px 8px 8px 8px",
      marginBottom: "5px", // to overlap with container border radius
    },
  };

  return (
    <div style={styles.container}>
      <img src={coverLetterImage} alt="Cover Letter" style={styles.image} />
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to LetterGen</h1>
        <p style={styles.subtitle}>
          Your solution for generating personalized cover letters and emails.
        </p>
      </header>
      <main>
        <section>
          <h2 style={styles.section}>Get Started</h2>
          <p style={styles.description}>
            Upload your resume and job description to receive a customized cover
            letter.
          </p>
          <button
            onClick={() => {
              navigate("/upload-resume");
            }}
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
            }}
          >
            Upload Resume Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
