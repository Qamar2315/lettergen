import React from "react";

const AboutUs = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "40px 20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      maxWidth: "800px",
      margin: "40px auto",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "32px",
      marginBottom: "20px",
      color: "#343a40",
    },
    paragraph: {
      fontSize: "18px",
      color: "#495057",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    subHeader: {
      fontSize: "24px",
      color: "#007bff",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to LetterGen! We are dedicated to helping you create
        personalized cover letters and emails with ease. Our mission is to
        simplify the process of job applications by providing you with
        well-crafted and customized documents.
      </p>
      <h3 style={styles.subHeader}>Our Mission</h3>
      <p style={styles.paragraph}>
        At LetterGen, our mission is to empower job seekers by providing a
        platform that generates professional and tailored cover letters and
        emails. We aim to save you time and effort, allowing you to focus on
        what really matters – landing your dream job.
      </p>
      <h3 style={styles.subHeader}>Our Vision</h3>
      <p style={styles.paragraph}>
        Our vision is to become the go-to solution for job seekers around the
        world, offering an intuitive and efficient way to create application
        documents. We strive to continuously improve our service, ensuring that
        our users always have access to the best tools and resources.
      </p>
    </div>
  );
};

export default AboutUs;
