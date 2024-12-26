import React from 'react';
import Navbar from '../components/Navbar';
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
      {/* Sidebar */}
      <div style={{ width: "20%", backgroundColor: "#0056D2", color: "#fff", padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="girl1.jpg"
            alt="Profile"
            style={{ borderRadius: "50%", width: "120px", height: "120px" }} // Increased size
          />
          <h4 style={{ marginTop: "10px" }}>Sara Atif</h4>
          <button style={{ background: "none", color: "#fff", border: "none", marginTop: "10px" }}>
            Edit Profile
          </button>
        </div>
        <ul style={{ listStyleType: "none", padding: "0" }}>
          <li style={{ padding: "10px 0" }}>Social Feed</li>
          <li style={{ padding: "10px 0" }}>Community</li>
          <li style={{ padding: "10px 0" }}>Games</li>
          <li style={{ padding: "10px 0" }}>Questions</li>
          <li style={{ padding: "10px 0" }}>Gallery</li>
          <li style={{ padding: "10px 0" }}>Events</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ width: "80%", backgroundColor: "#F9F9F9", padding: "20px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2>Community Search</h2>
          <p>Start following your favorite communities and be a part of something exciting</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <button
            style={{
              flex: 1,
              maxWidth: "150px",
              padding: "10px",
              border: "none",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "20px 0 0 20px",
              marginRight: "5px",
            }}
          >
            TEAMS
          </button>
          <button
            style={{
              flex: 1,
              maxWidth: "150px",
              padding: "10px",
              border: "1px solid #ddd",
              backgroundColor: "#F9F9F9",
              color: "#000",
              marginRight: "5px",
            }}
          >
            MEMBERS
          </button>
          <button
            style={{
              flex: 1,
              maxWidth: "150px",
              padding: "10px",
              border: "1px solid #ddd",
              backgroundColor: "#F9F9F9",
              color: "#000",
              borderRadius: "0 20px 20px 0",
            }}
          >
            EXPLORE
          </button>
        </div>

        {/* Search Bar */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search here..."
            style={{
              width: "40%",
              padding: "8px",
              borderRadius: "20px",
              border: "1px solid #ddd",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Community Cards */}
        <div className="row">
          {communities.map((community) => (
            <div key={community.id} className="col-md-3 mb-4">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <img
                  src={community.image}
                  alt={community.name}
                  style={{
                    marginBottom: "10px",
                    width: "80px", // Increased size
                    height: "80px", // Increased size
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <h5>{community.name}</h5>
                <p>{community.members} members</p>
                <button className="btn btn-primary">Join</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default CommunityPage;
