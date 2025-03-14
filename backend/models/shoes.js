const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    material: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Shoe', shoeSchema);