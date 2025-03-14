const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    size: { type: String, required: true },
    material: { type: String, required: true },
    fit: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Clothing', clothingSchema);