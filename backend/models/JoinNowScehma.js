// models/JoinRequest.js
const mongoose = require("mongoose");

const joinRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  communityName: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  
});

const JoinRequest = mongoose.model("JoinRequest", joinRequestSchema);

module.exports = JoinRequest;