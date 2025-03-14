const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, enum: ['shoes', 'clothing', 'accessories'], required: true },
    brand_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
    condition: { type: String, enum: ['new', 'used'], required: true },
    stock_quantity: { type: Number, required: true, default: 0 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);