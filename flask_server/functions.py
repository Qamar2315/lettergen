import pdfplumber
def extract_text_from_pdf(pdf_path):
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error occurred while extracting text from {pdf_path}: {e}")
    return text

if __name__ == "__main__":
    # Example usage
    pdf_path = 'C:\\Users\\Dell\\OneDrive\\Desktop\\qamar\\Projects\\lettergen\\server\\uploads\\1719430344149-qamar_islam_full_stack_developer_resume.pdf'
    extracted_text = extract_text_from_pdf(pdf_path)
    print(extracted_text)
