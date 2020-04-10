const mongoose = require("mongoose");

// make schema of our table which contain properties of each column
const PostSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Posts", PostSchema); // make a model called "Posts" that refers to PostSchema
