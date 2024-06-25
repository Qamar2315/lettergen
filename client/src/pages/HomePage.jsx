import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to LetterGen</h1>
        <p>
          Your solution for generating personalized cover letters and emails.
        </p>
      </header>
      <main>
        <section>
          <h2>Get Started</h2>
          <p>
            Upload your resume and job description to receive a customized cover
            letter.
          </p>
          <button
            onClick={() => {
              navigate("/upload-resume");
            }}
          >
            Upload Resume
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
