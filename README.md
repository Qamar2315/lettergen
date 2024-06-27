## LetterGen: Generate Personalized Cover Letters & Emails with Ease

**LetterGen** is a web application designed to streamline your job application process. By leveraging your resume and the provided job description, it generates personalized cover letters and emails, saving you valuable time and effort. 

**Ideal for:**

* Job seekers writing multiple applications daily
* Individuals seeking a polished and professional approach to their applications

**Key Features:**

* **Resume Upload:** Upload your resume in PDF format.
* **Job Description Input:** Provide the relevant job description.
* **Automated Generation:** Receive tailored cover letters and emails.

### Home Page
![Home Page](https://github.com/Qamar2315/lettergen/blob/main/screenshots/Home.PNG)

### Resume Uploader Page
![Resume Uploader Page](https://github.com/Qamar2315/lettergen/blob/main/screenshots/ResumeUploader.PNG)

### About Us Page
![About Us Page](https://github.com/Qamar2315/lettergen/blob/main/screenshots/AboutUs.PNG)

### Demo
[![LetterGen Demo](https://i.ytimg.com/vi/4OXoCcdx-zQ/maxresdefault.jpg)](https://www.youtube.com/watch?v=4OXoCcdx-zQ)


**Current Status:**

LetterGen is in its initial development stage. The core functionality for generating letters and emails is complete.  Future updates will include:

* **Authentication & Authorization:** Secure user accounts and data.
* **Subscription Models:** Offer various features and benefits based on user needs.

**Getting Started:**

**Prerequisites:**

* **Node.js**
* **Python**

**Installation:**

1. **Clone Repository:**
   ```bash
   git clone https://github.com/yourusername/LetterGen.git
   cd LetterGen
   ```

2. **Install Server Dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install Flask Server Dependencies:**
   ```bash
   cd flask_server
   pip install -r requirements.txt
   ```

4. **Install React Client Dependencies:**
   ```bash
   cd client
   npm install
   ```

**Running the Application:**

1. **Flask Server:**
   ```bash
   cd flask_server
   python app.py
   ```

2. **Node.js Server:**
   ```bash
   cd server
   npm start
   ```

3. **React Client:**
   ```bash
   cd client
   npm start
   ```

4. **Access LetterGen:** Open your web browser and navigate to the specified port.

**Configuration:**

**Environment Variables:**

* **Flask Server (flask_server folder):**
    * `GEMENI_API_KEY`
* **React Client (client/src/config.js file):**
    * `BASE_URL`
* **Server (server folder):**
    * `PORT`
    * `FLASK_BASE_URL`

**Contributing:**

LetterGen welcomes contributions! To get involved:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

**License:**

LetterGen is licensed under the MIT License. See the LICENSE file for details.

**Support & Contact:**

For support or issues, contact qamarislam4496@gmail.com.
