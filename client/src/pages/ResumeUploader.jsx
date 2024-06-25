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

  return (
    <div style={styles.container}>
      <h2>Upload Your Resume</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
        </div>
        <div style={styles.radioGroup}>
          <label>
            <input
              type="radio"
              value="coverLetter"
              checked={documentType === "coverLetter"}
              onChange={handleDocumentTypeChange}
            />
            Cover Letter
          </label>
          <label>
            <input
              type="radio"
              value="email"
              checked={documentType === "email"}
              onChange={handleDocumentTypeChange}
            />
            Email
          </label>
        </div>
        <div>
          <button type="submit" style={styles.button}>Generate</button>
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

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '40px auto'
  },
  form: {
    margin: '20px 0',
  },
  radioGroup: {
    margin: '10px 0'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
  },
  responses: {
    marginTop: '20px',
  },
  response: {
    border: '1px solid #dee2e6',
    padding: '10px',
    margin: '10px 0',
  },
};

export default ResumeUploader;
