// packages import
const express = require("express");
const app = express();
const cors = require("cors");
const { dummyData } = require("./seed");
const mongoose = require("mongoose");
const { notFound, errorHandler } = require("./middlewares/ErrorHandler");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

// From environment variables
const PORT = process.env.PORT || 45200;
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lettergen_database';
const ipAddress = "0.0.0.0";

// CORS JSON and URL encoded middlewares enabled
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.post("/api/generate", (req, res) => {
  res.json(dummyData);
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
