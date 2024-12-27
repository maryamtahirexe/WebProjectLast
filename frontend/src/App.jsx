import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CommunityPage from './pages/CommunityPage';
import BionicReadingPage from './pages/BionicReadingPage';
import OneCommunity from './pages/OneCommunity';
import JoinNowForm from './pages/JoinNowForm';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onecommunity" element={<OneCommunity />} />
        <Route path="/joinNow" element={<JoinNowForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/bionic-reading" element={<BionicReadingPage />} />
      </Routes>
    </Router>
  );
}

export default App;