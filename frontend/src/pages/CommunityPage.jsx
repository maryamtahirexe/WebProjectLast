// CommunityPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import CommunityCard from './CommunityCard';

function CommunityPage() {
  const communities = [
    { id: 1, name: "TensorFlow ISB", members: "18.3k", image: "Tensor Flow.jpg" },
    { id: 2, name: "UI UX Design", members: "3.1k", image: "uiux.png" },
    { id: 3, name: "IEEE Electronics", members: "12.3k", image: "ieee.png" },
    { id: 4, name: "Tech Saviors", members: "11.2k", image: "tech.jpeg" },
    { id: 5, name: "AI Innovators", members: "9.7k", image: "uiux.png" },
    { id: 6, name: "Code Masters", members: "7.4k", image: "tech.jpeg" },
    { id: 7, name: "Game Dev Hub", members: "5.8k", image: "Tensor Flow.jpg" },
    { id: 8, name: "Robotics World", members: "6.3k", image: "ieee.png" },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
        <div style={{ width: "20%", backgroundColor: "#0056D2", color: "#fff", padding: "20px" }}>
          {/* Sidebar code */}
        </div>
        <div style={{ width: "80%", backgroundColor: "#F9F9F9", padding: "20px" }}>
          <h2>Community Search</h2>
          <div className="row">
            {communities.map((community) => (
              <div key={community.id} className="col-md-3 mb-4">
                <CommunityCard community={community} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
