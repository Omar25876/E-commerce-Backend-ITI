const mongoose = require('mongoose');
const Brand = require('./brandModel');

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  brandNames: [{                          
    type: mongoose.Schema.Types.ObjectId,
    ref: Brand.modelName,
  }],
});

module.exports = mongoose.model('Category', categorySchema);
