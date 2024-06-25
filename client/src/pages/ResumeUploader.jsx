import React, { useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [documentType, setDocumentType] = useState("coverLetter");
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setError("Please upload a resume.");
      return;
    }

    setLoading(true);
    setError("");
    setResponses([]);

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("documentType", documentType);

    try {
      const response = await axios.post(
        "http://localhost:5000/generate",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResponses(response.data); // Assuming the server returns an array of responses
    } catch (error) {
      setError("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  // Styles object
  const styles = {
    container: {
      textAlign: "center",
      padding: "40px 20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      maxWidth: "600px",
      margin: "40px auto",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#343a40",
    },
    form: {
      margin: "20px 0",
    },
    fileInput: {
      margin: "10px 0",
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ced4da",
      width: "100%",
      boxSizing: "border-box",
    },
    radioGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      margin: "20px 0",
    },
    radioLabel: {
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      color: "#495057",
    },
    radioInput: {
      marginRight: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    error: {
      color: "red",
      marginTop: "10px",
    },
    responses: {
      marginTop: "20px",
    },
    response: {
      border: "1px solid #dee2e6",
      padding: "10px",
      margin: "10px 0",
      borderRadius: "5px",
      backgroundColor: "#ffffff",
    },
    backButton: {
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#6c757d",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.3s ease",
    },
    backButtonHover: {
      backgroundColor: "#5a6268",
    },
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Upload Your Resume</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <label htmlFor="resumeUpload">Upload Resume:</label>
          <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            style={styles.fileInput}
          />
        </div>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="coverLetter"
              checked={documentType === "coverLetter"}
              onChange={handleDocumentTypeChange}
              style={styles.radioInput}
            />
            Cover Letter
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="email"
              checked={documentType === "email"}
              onChange={handleDocumentTypeChange}
              style={styles.radioInput}
            />
            Email
          </label>
        </div>
        <div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Generate
          </button>
        </div>
      </form>
      {loading && <ClipLoader size={50} />}
      {error && <p style={styles.error}>{error}</p>}
      {responses.length > 0 && (
        <div style={styles.responses}>
          <h3>Generated Documents</h3>
          {responses.map((response, index) => (
            <div key={index} style={styles.response}>
              <h4>Document {index + 1}</h4>
              <p>{response}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
