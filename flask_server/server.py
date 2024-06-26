from flask import Flask, request, jsonify
from functions import extract_text_from_pdf
from utility import get_response_from_model

app = Flask(__name__)


@app.route('/api/generate', methods=['POST'])
def generate():
    data = request.json
    document_type = data.get('document_type')
    file_path = data.get('file_path')
    job_description = data.get('job_description')
    
    print(file_path)
    print(job_description)
    print(document_type)
    
    if not all([document_type, file_path, job_description]):
        return jsonify({"error": "Missing required parameters"}), 400

    text = extract_text_from_pdf(file_path)
    response = get_response_from_model(text, document_type, job_description)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
