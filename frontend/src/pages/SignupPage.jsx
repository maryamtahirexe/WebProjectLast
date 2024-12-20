import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5174/api/auth/signup', {
        name,
        email,
        password,
      });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="d-flex vh-100" style={{ backgroundColor: '#f8f9fa',minWidth:'100vw' }}>
      {/* Left Section */}
      <div
        className="col-md-6 d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundImage: `url('/bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <img
          src="/illustration.png"
          alt="Learning Made Easy"
          style={{ maxHeight: '80%' }}
          className="img-fluid"
        />
        <h3 className="text-primary mt-4">Learning Made Easy and Fun</h3>
      </div>

      {/* Right Section */}
      <div className="col-md-6 d-flex justify-content-center align-items-center "style={{ minWidth: 'full' }}>
        <div className="bg-white p-5 rounded shadow" style={{ minWidth: 'full' }}>
          <h2 className="mb-4 text-center">Signup</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-3">Signup</button>

            <p className="text-center">
              Already have an account? <a href="/login">Login</a>
            </p>

            <hr />

            <div className="d-flex justify-content-evenly">
              <button type="button" className="btn btn-outline-primary w-45">
                Sign up with Facebook
              </button>
              <button type="button" className="btn btn-outline-danger w-45">
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
