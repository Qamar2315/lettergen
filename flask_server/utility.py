import google.generativeai as genai
import os
from dotenv import load_dotenv
import re
load_dotenv()
genai.configure(api_key=os.getenv("GEMENI_API_KEY"))

def get_response_from_model(resume_data, document_type, job_description):
    model = genai.GenerativeModel('gemini-1.5-flash')
    prompt = ""
    if document_type == "coverLetter":
        prompt= f"""
        Use the information from this resume: ''' {resume_data} ''' and this jobdescription: ''' {job_description} ''' to generate me 5 diffrent cover letters
        in form of an array there should be subject and body of the cover letter. output should be strictly in the JSON format. Only JSON output. Also make sure each letter is diffrent.
        """
    elif document_type == "email":
        prompt= f"""
        Use the information from this resume: ''' {resume_data} ''' and this jobdescription: ''' {job_description} ''' to generate me 5 diffrent email
        in form of an array there should be subject and body of the cover letter. output should be strictly in the JSON format. only JSON output.Also make sure each letter is diffrent.
        """
    response = model.generate_content(prompt)
    json_string = re.sub(r'^```json\s+', '', response.text)
    json_string = re.sub(r'\s+```$', '', json_string)
    return json_string