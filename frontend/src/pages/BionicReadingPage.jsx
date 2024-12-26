import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function BionicReadingPage() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isUploaded, setIsUploaded] = useState(false); // State to toggle between views

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
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
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percentCompleted);
        },
      });

      const processedText = response.data.processedText;
      setOutput(processedText);
      setIsUploaded(true); // Switch to the processed text view
    } catch (err) {
      setError(err.response?.data?.message || 'File upload failed.');
    }
  };

  const handleReset = () => {
    // Reset states for file upload view
    setFile(null);
    setProgress(0);
    setOutput('');
    setError('');
    setIsUploaded(false);
  };

  return (
    <div className="main">
      <Navbar />
      <div
        className="container d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundImage: `url('/bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minWidth: '100vw',
          minHeight: '100vh',
          margin: 0,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1 className="mb-4" style={{ color: '#1A73E8' }}>BIONIC READING</h1>
        
        {!isUploaded ? (
          <div className="card p-4 shadow" style={{ width: '500px' }}>
            <div className="mb-3">
              <label htmlFor="fileUpload" className="form-label">
                Select and upload the file of your choice
              </label>
              <input
                type="file"
                className="form-control"
                id="fileUpload"
                onChange={handleFileChange}
              />
            </div>
            <button
              className="btn btn-primary w-100 mb-3"
              onClick={handleUpload}
              disabled={!file}
            >
              Upload and Process
            </button>
            {progress > 0 && (
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {progress}%
                </div>
              </div>
            )}
            {error && <p className="text-danger">{error}</p>}
          </div>
        ) : (
          <div className="card shadow p-4 mt-4"
            style={{
              width: '80%',
              maxWidth: '700px',
              height: '400px',
              overflowY: 'scroll',
              backgroundColor: '#f9f9f9',
              borderRadius: '10px',
            }}
          >
            <h3 className="mb-3 text-primary">Bionic Text</h3>
            <div
              style={{
                lineHeight: '1.8',
                fontSize: '16px',
              }}
              dangerouslySetInnerHTML={{ __html: output }}
            />
            <button
              className="btn btn-secondary mt-3"
              onClick={handleReset}
            >
              Upload Another File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BionicReadingPage;
