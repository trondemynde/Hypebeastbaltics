const mongoose = require('./db'); // Import your db.js file
const Product = require('./models/Product');
const Shoe = require('./models/Shoes');
const Brand = require('./models/Brand');

(async () => {
  try {
    // Add a brand
    const brand = await Brand.create({
      name: 'Bape',
      logo_url: 'https://example.com/nike-logo.png',
      description: 'A leading sportswear brand.',
    });


    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error.message);
  } finally {
    mongoose.connection.close(); // Close the MongoDB connection
  }
})();