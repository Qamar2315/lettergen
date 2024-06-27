import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Home from "./pages/HomePage";
import Error from "./pages/Error";
import ResumeUploader from "./pages/ResumeUploader";
import Navbar from "./components/Navbar";
import AboutUs from "./components/Aboutus"; 

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="" exact element={<Home />} />
          <Route path="/upload-resume" exact element={<ResumeUploader />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route
            path="*"
            element={<Error message="We can't find that page." status="404" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
