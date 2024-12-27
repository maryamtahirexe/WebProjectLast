
import React from 'react';
import { Link } from 'react-router-dom';

const CommunityCard = ({ community }) => {
  return (
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
      <button className="btn btn-primary"
      >
        <Link to= "/onecommunity" 
        style={{textDecoration: "none", color: "white"}}
        > View Community</Link>
       </button>
    </div>
  );
};

export default CommunityCard;
