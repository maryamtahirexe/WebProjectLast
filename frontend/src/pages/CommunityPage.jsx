import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CommunityPage() {
  const [communities, setCommunities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios.get('http://localhost:5174/api/community');
        setCommunities(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load communities');
      }
    };
    fetchCommunities();
  }, []);

  const handleJoin = async (communityId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5174/api/community/join', { communityId }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Joined community successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to join community');
    }
  };

  return (
    <div className="container">
      <h2>Communities</h2>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {communities.map((community) => (
          <li key={community._id} className="list-group-item d-flex justify-content-between align-items-center">
            {community.name}
            <button className="btn btn-primary" onClick={() => handleJoin(community._id)}>
              Join
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommunityPage;
