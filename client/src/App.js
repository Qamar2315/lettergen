import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing pages
import Home from "./pages/HomePage";
import Error from "./pages/Error";
import ResumeUploader from "./pages/ResumeUploader";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/upload-resume" exact element={<ResumeUploader />} />
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
