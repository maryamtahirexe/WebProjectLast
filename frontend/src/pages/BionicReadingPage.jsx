// frontend/src/pages/BionicReadingPage.js

import React, { useState } from 'react';
import axios from 'axios';

function BionicReadingPage() {
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5174/api/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const processedText = response.data.processedText;
      setOutput(processedText);
    } catch (err) {
      setError(err.response?.data?.message || 'File upload failed.');
    }
  };

  return (
    <div className="container">
      <h2>Bionic Reading</h2>
      {error && <p className="danger">{error}</p>}
      <div className="mb-3">
        <label className="form-label">Upload PDF</label>
        <input type="file" className="form-control" onChange={handleFileChange} />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleUpload}>
        Process
      </button>
      <div>
        <h3>Processed Text:</h3>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default BionicReadingPage;
