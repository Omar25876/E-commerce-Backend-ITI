const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String, // image URL or path
});

module.exports = mongoose.model('Brand', brandSchema);
