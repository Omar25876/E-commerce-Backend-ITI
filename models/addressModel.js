const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city: { type: String, required: false, default: "" },
      street: { type: String, required: false, default: "" },
      buildingNumber: { type: String, required: false, default: "" },
      apartmentNumber: { type: String, required: false, default: "" },
      floor: { type: String, required: false, default: "" },
      entrance: { type: String, required: false, default: "" },
      zipCode: { type: String, required: false, default: "" },
      country: { type: String, required: false, default: "" },
});

module.exports = mongoose.model('Address', addressSchema);
