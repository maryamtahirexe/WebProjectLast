const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: { type: Number, default: 0 },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Community', CommunitySchema);
