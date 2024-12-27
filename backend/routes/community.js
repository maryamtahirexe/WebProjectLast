const express = require('express');
const router = express.Router();
const Community = require('../models/Community');

// Get all communities
router.get('/', async (req, res) => {
  try {
    const communities = await Community.find();
    res.status(200).json(communities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Join a community
router.post('/join/:id', async (req, res) => {
  const userId = req.body.userId; // Passed from frontend
  const communityId = req.params.id;

  try {
    const community = await Community.findById(communityId);
    if (!community) return res.status(404).json({ error: 'Community not found' });

    community.members += 1;
    await community.save();

    res.status(200).json({ message: 'Joined community successfully', community });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
