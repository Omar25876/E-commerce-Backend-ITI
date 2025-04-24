// models/categoryModel.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String, // image URL or path
});

module.exports = mongoose.model('Category', categorySchema);
