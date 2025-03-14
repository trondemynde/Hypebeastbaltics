const Product = require('../models/Product');
const Shoe = require('../models/Shoes');
const Brand = require('../models/Brand');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('brand_id'); // Populate brand details
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('brand_id');
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Find associated shoe details
    const shoeDetails = await Shoe.findOne({ product_id: req.params.id });
    res.status(200).json({ ...product.toObject(), shoeDetails });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category, brand_id, condition, stock_quantity, size, color, material } = req.body;

    // Check if the brand exists
    const brand = await Brand.findById(brand_id);
    if (!brand) return res.status(400).json({ message: 'Invalid brand ID' });

    // Create the product
    const product = await Product.create({
      name,
      description,
      price,
      category,
      brand_id,
      condition,
      stock_quantity,
    });

    // Add category-specific details for shoes
    if (category === 'shoes') {
      await Shoe.create({
        product_id: product._id,
        size,
        color,
        material,
      });
    }

    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, brand_id, condition, stock_quantity, size, color, material } = req.body;

    // Find and update the product
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name,
      description,
      price,
      category,
      brand_id,
      condition,
      stock_quantity,
    }, { new: true });

    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Update category-specific details for shoes
    if (category === 'shoes') {
      await Shoe.findOneAndUpdate(
        { product_id: req.params.id },
        { size, color, material },
        { new: true }
      );
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Delete category-specific details for shoes
    await Shoe.findOneAndDelete({ product_id: req.params.id });

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};