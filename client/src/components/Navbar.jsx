import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"; // Replace with the path to your logo

const Navbar = () => {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "linear-gradient(rgb(224, 247, 250)",
      color: "#007bff",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      marginBottom: "20px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoImage: {
      height: "40px",
      marginRight: "10px",
    },
    logoText: {
      fontSize: "24px",
      fontWeight: "bold",
      textDecoration: "none",
      color: "#007bff",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      fontSize: "18px",
      textDecoration: "none",
      color: "#007bff",
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: "#0056b3",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src={logo} alt="Logo" style={styles.logoImage} />
        <Link to="/" style={styles.logoText}>
          LetterGen
        </Link>
      </div>
      <div style={styles.navLinks}>
        <Link
          to="/"
          style={styles.navLink}
          onMouseOver={(e) =>
            (e.target.style.color = styles.navLinkHover.color)
          }
          onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
        >
          Home
        </Link>
        <Link
          to="/upload-resume"
          style={styles.navLink}
          onMouseOver={(e) =>
            (e.target.style.color = styles.navLinkHover.color)
          }
          onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
        >
          Upload Resume
        </Link>
        <Link
          to="/about"
          style={styles.navLink}
          onMouseOver={(e) =>
            (e.target.style.color = styles.navLinkHover.color)
          }
          onMouseOut={(e) => (e.target.style.color = styles.navLink.color)}
        >
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
