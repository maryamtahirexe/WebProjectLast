// routes/joinRequest.js
const express = require("express");
const router = express.Router();
const JoinRequest = require("../models/JoinNowScehma");

// POST request to handle the form submission
router.post("/", async (req, res) => {
  const { name, email, communityName, message } = req.body;

  try {
    // Create a new join request
    const joinRequest = new JoinRequest({
      name,
      email,
      communityName,
      message
    });

    // Save the request to the database
    await joinRequest.save();
    res.status(201).json({ message: "Join request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting join request: " + error.message });
  }
});

module.exports = router;