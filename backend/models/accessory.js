const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    type: { type: String, required: true },
    dimensions: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Accessory', accessorySchema);