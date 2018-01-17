const mongoose = require('mongoose');

let schema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  // REFERENCE
  text: { type: String, required: true },
  player: { type: String, required: true}
  topics: [],
  comments: []
}, { collection: 'posts' });


//Creating the model, model is the runtime object instance of the schema
module.exports = mongoose.model("posts", schema);




