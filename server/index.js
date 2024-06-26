// packages import
const express = require("express");
const app = express();
const cors = require("cors");
const { dummyData } = require("./seed");
const { notFound, errorHandler } = require("./middlewares/ErrorHandler");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config(); // Load environment variables from .env file
const path = require("path");
const fs = require("fs");

// CORS JSON and URL encoded middlewares enabled
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer for file uploads
const multer = require("multer");

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Multer upload middleware
const upload = multer({ storage: storage });

// From environment variables
const PORT = process.env.PORT || 45200;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lettergen_database';
const ipAddress = "0.0.0.0";
const flaskBaseUrl = process.env.FLASK_BASE_URL || "http://localhost:5000";

// Routers
app.post("/api/generate", upload.any(), async (req, res) => {
  console.log(req.body);
  console.log(req.files);

  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  const file = req.files[0];
  const file_path = file.path;

  const payload = {
    document_type: req.body.documentType,
    file_path: file_path,
    job_description: req.body.jobDescription,
  };

  try {
    const response = await axios.post(`${flaskBaseUrl}/api/generate`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    fs.unlink(file_path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });
    res.status(200).json(response.data);
  } catch (error) {
    fs.unlink(file_path, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
      }
    });
    console.error("Error sending request to Flask API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Error middlewares
app.use(notFound);
app.use(errorHandler);

// Database connection
// main().catch(err => console.log(err))
// async function main() {
//   await mongoose.connect(MONGODB_URI);
//   console.log("connected");
// }

// Server
app.listen(PORT, ipAddress, () => {
  console.log(`APP IS LISTENING ON PORT ${PORT}`);
});
