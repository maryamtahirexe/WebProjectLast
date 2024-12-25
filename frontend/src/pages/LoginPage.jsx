
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
    <div className="main"><Navbar />
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light" style={{minWidth: '100vw',minHeight: '100vh'}}>
      
      <div className="card shadow-lg" style={{ maxWidth: '900px', borderRadius: '20px' }}>
        <div className="row g-0">
          <div className="col-md-6 p-5">
            <h2 className="fw-bold">Welcome</h2>
            <p className="text-muted mb-4">
              <a href="#" className="text-primary text-decoration-none">Login</a> into your account to continue
            </p>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="submit" className="btn btn-primary w-100">Log in</button>
              </div>
              <p className="text-end">
                <a href="#" className="text-primary text-decoration-none">Forgot your password?</a>
              </p>
            </form>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <hr className="w-100 me-2" />
              <span className="text-muted">or</span>
              <hr className="w-100 ms-2" />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-outline-dark me-3 d-flex align-items-center">
                <i className="fab fa-facebook me-2"></i> Sign in with Facebook
              </button>
              <button className="btn btn-outline-dark d-flex align-items-center">
                <i className="fab fa-google me-2"></i> Sign in with Google
              </button>
            </div>
            <p className="text-center mt-4">
              Don’t have an account? <a href="#" className="text-primary text-decoration-none">Sign up</a>
            </p>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <div
              className="h-100 w-100 d-flex flex-column justify-content-center align-items-center"
              style={{ backgroundImage: `url('/bg.jpg')`, backgroundSize: 'cover', height: '100vh' }}>
            
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
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
