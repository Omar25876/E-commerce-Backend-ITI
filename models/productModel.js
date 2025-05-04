const mongoose = require('mongoose');
const Brand = require('./brandModel');
const Category = require('./categoryModel');
const User = require('./userModel');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  oldPrice: Number,
  discount: Number,
  imagesAndColors: {
    type: Map,
    of: String
  },

  selectedColor: String,
  stock: Number,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  reviewsCount: Number,
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User.modelName
      },
      rating: Number,
      comment: String,
      createdAt: { type: Date, default: Date.now }
    }
  ],
  highlights: [String],
  specs: Object,
  modelNumber: String,
  modelName: String,
  whatsInTheBox: [String],
  isPopular: Boolean,
  isNewArrival: Boolean,
  isDiscover: Boolean,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category.modelName,
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Brand.modelName,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
