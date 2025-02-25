import axios from 'axios';

// Base URL of your backend server
const BASE_URL = 'http://localhost:5000/api';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add a product to the cart
export const addToCart = async (product) => {
  try {
    const response = await axios.post(`${BASE_URL}/cart`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

// Create an order
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};