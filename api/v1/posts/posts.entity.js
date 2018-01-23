const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
    unique: true
  },
  playerId: {
    type: Number,
    required: true,
    unique: true
  },
  topicId: {
    type: Number,
    required: true,
    unique: true
  },
  //topics: {type: Array, 'default': ['General']},
  message: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  tags: {
    type: Array
  },
  comments: {
    type: Array
  },
  created: {
    type: Date
  },
}, {
  collection: 'posts'
});

// Composite Unique key
schema.index({
  postId: 1,
  playerId: 1,
  topicId: 1,
}, {
  unique: true
});

//Creating the model, model is the runtime object instance of the schema
module.exports = mongoose.model("posts", schema);