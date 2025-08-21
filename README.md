
# LetterGen: AI-Powered Cover Letter & Email Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**LetterGen** is a modern web application designed to streamline and accelerate your job application process. By intelligently parsing your PDF resume and analyzing the provided job description, it leverages the power of Google's Gemini AI to generate multiple, distinct, and personalized cover letters or application emails, saving you valuable time and effort.

## The Problem It Solves

Crafting a unique cover letter for every job application is tedious and time-consuming. Job seekers often struggle to tailor their message to each specific role, leading to generic applications that fail to stand out. LetterGen automates this process, ensuring every application you send is compelling, relevant, and professional.

## Key Features

*   **Intuitive User Interface:** A clean, simple, and responsive interface for a seamless user experience.
*   **PDF Resume Parsing:** Upload your resume in PDF format, and the system will automatically extract the necessary text content.
*   **AI-Powered Generation:** Utilizes the advanced **Google Gemini 1.5 Flash model** to generate contextually aware and high-quality content.
*   **Dual Document Types:** Generate either a formal **Cover Letter** or a professional **Application Email** based on your needs.
*   **Multiple Variations:** Receive 5 distinct variations for each request, giving you a range of tones and styles to choose from.
*   **Effortless Content Management:** A simple "Copy to Clipboard" button for each generated document allows you to use the content immediately.
*   **Secure & Ephemeral:** Uploaded resumes are processed and immediately deleted from the server to ensure your data privacy.

## Demo & Screenshots

### Live Demo
[![LetterGen Demo](https://i.ytimg.com/vi/4OXoCcdx-zQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=4OXoCcdx-zQ)

### Screenshots

| Home Page                                                                            | Resume Uploader Page                                                                        | About Us Page                                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| ![Home Page](https://github.com/Qamar2315/lettergen/blob/main/screenshots/Home.PNG) | ![Resume Uploader Page](https://github.com/Qamar2315/lettergen/blob/main/screenshots/ResumeUploader.PNG) | ![About Us Page](https://github.com/Qamar2315/lettergen/blob/main/screenshots/AboutUs.PNG) |

## Technology Stack & Architecture

LetterGen is built with a modern, decoupled architecture, separating the client, the main backend server, and the AI processing service.

**Architecture Flow:**
`Client (React)` ↔️ `API Server (Node.js/Express)` ↔️ `AI Service (Python/Flask)` ↔️ `Google Gemini API`

*   **Frontend (Client):**
    *   **React.js:** For building the interactive user interface.
    *   **React Router:** For client-side routing and navigation.
    *   **Axios:** For making HTTP requests to the backend.
    *   **Framer Motion:** For smooth page transitions and animations.

*   **Backend (API Server):**
    *   **Node.js & Express.js:** To handle API requests, routing, and serve as the main gateway.
    *   **Multer:** For handling `multipart/form-data`, specifically for file uploads.
    *   **CORS:** To enable cross-origin requests from the React client.

*   **Backend (AI Service):**
    *   **Python & Flask:** A lightweight microservice dedicated to AI processing.
    *   **PDFPlumber:** A robust library for extracting text from PDF files.
    *   **Google Generative AI:** The official Python SDK for interacting with the Gemini API.

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

*   **Node.js** and **npm** (or yarn)
*   **Python 3.x** and **pip**
*   A **Google Gemini API Key**. You can get one from [Google AI Studio](https://ai.google.dev/).

### Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Qamar2315/lettergen.git
    cd lettergen
    ```

2.  **Setup the Node.js API Server**
    ```bash
    cd server
    npm install
    ```

3.  **Setup the Python AI Service**
    ```bash
    cd ../flask_server

    # It's highly recommended to use a virtual environment
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

    pip install -r requirements.txt
    ```

4.  **Setup the React Client**
    ```bash
    cd ../client
    npm install
    ```

### Configuration (Environment Variables)

You need to set up environment variables for the servers to function correctly.

1.  **Python AI Service (`/flask_server`)**
    Create a `.env` file in the `flask_server` directory and add your Google Gemini API key:
    ```
    GEMENI_API_KEY="YOUR_GEMINI_API_KEY"
    ```

2.  **Node.js API Server (`/server`)**
    Create a `.env` file in the `server` directory. This tells the Node server where to find the Python service.
    ```
    PORT=9090
    FLASK_BASE_URL="http://127.0.0.1:5000"
    ```

3.  **React Client (`/client`)**
    The base URL for the API server is configured in `/client/src/pages/config.js`. Ensure it matches the port of your Node.js server.
    ```javascript
    // File: client/src/pages/config.js
    export const BASE_URL = 'http://localhost:9090';
    ```

### Running the Application

You need to run all three parts of the application simultaneously. Open three separate terminal windows.

1.  **Start the Python AI Service:**
    ```bash
    cd flask_server
    source venv/bin/activate # Or `venv\Scripts\activate` on Windows
    python server.py
    ```
    *(This server will run on port 5000 by default)*

2.  **Start the Node.js API Server:**
    ```bash
    cd server
    npm start
    ```
    *(This server will run on port 9090 as configured in the `.env` file)*

3.  **Start the React Client:**
    ```bash
    cd client
    npm start
    ```
    *(This will open the application in your web browser, typically at `http://localhost:3000`)*

Now, you can access LetterGen at `http://localhost:3000` in your browser.

## Future Roadmap

LetterGen is actively under development. Future enhancements include:
*   **User Authentication & Authorization:** Secure user accounts to save and manage generated documents.
*   **Subscription Models:** Introduce tiered plans for advanced features and higher usage limits.
*   **Template Customization:** Allow users to define and save their own templates or tones.
*   **History & Management:** A dashboard to view and manage previously generated letters and emails.
*   **Expanded Document Support:** Support for `.docx` and other resume formats.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To get involved:
1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

Distributed under the MIT License. See the `LICENSE` file for more information.

## Contact

Qamar Ul Islam - [qamarislam4496@gmail.com](mailto:qamarislam4496@gmail.com)

Project Link: [https://github.com/Qamar2315/lettergen](https://github.com/Qamar2315/lettergen)