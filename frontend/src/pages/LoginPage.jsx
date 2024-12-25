import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5174/api/auth/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      navigate('/community');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="main vh-100">
      <Navbar />
      <div className="d-flex" style={{ backgroundColor: '#f8f9fa', minWidth: '100vw' }}>
        {/* Left Section - Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="bg-white p-5 rounded shadow" style={{ maxWidth: '500px', width: '100%' }}>
            <h2 className="mb-4 text-center">Login</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label htmlFor="rememberMe" className="form-check-label">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">Log in</button>
              <p className="text-center">
                <a href="#" className="text-primary text-decoration-none">Forgot your password?</a>
              </p>
              <hr />
              <div className="d-flex justify-content-evenly">
                <button type="button" className="btn btn-outline-primary">
                  Sign in with Facebook
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Sign in with Google
                </button>
              </div>
              <p className="text-center mt-4">
                Don’t have an account? <a href="/signup" className="text-primary text-decoration-none">Sign up</a>
              </p>
            </form>
          </div>
        </div>

        {/* Right Section - Image */}
        <div
          className="col-md-6 d-flex flex-column justify-content-center align-items-center"
          style={{
            backgroundImage: `url('/bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <img
            src="/illustration.png"
            alt="Learning Made Easy"
            style={{ maxHeight: '80%' }}
            className="img-fluid"
          />
          <h3 className="text-primary mt-4">Learning Made Easy and Fun</h3>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
