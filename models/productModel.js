const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  oldPrice: Number,
  discount: Number,
  colors: [String],
  selectedColor: String,
  stock: Number,
  rating: Number,
  reviewsCount: Number,
  images: [String],
  highlights: [String],
  specs: Object,
  modelNumber: String,
  modelName: String,
  whatsInTheBox: [String],
  isPopular: Boolean,
  isNewArrival: Boolean,
  isDiscover: Boolean,
  category: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);