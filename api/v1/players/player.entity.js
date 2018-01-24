const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  playerId: {
    type: Number,
    required: true,
    unique: true
  },
  playerName: {
  firstName: { type: String, required: true },
   LastName: { type: String },
  },
  playerPhoto: {
    type: String,
    required: true
  },
  playerGender: {
    type: String
  },
  description: {
    type: String
  },
  playerRating: {
    type: Number
  },
  playerEmail:{
    type: String,
    required: true
  },
  palyerPassword:{
    type: String,
    required: true
  }
}, 
{
  collection: 'player'
});

// Composite Unique key
schema.index({
  postId: 1,
  playerId: 1,
  topicId: 1,
}, {
  unique: true
});

module.exports = mongoose.model("player", schema);