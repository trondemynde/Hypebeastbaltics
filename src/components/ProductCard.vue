<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.image" alt="Product Image" class="product-image main-image">
      <img :src="product.hoverImage" alt="Hover Image" class="product-image hover-image">
    </div>
    <div class="product-details">
      <h3>{{ product.name }}</h3>
      <p class="font-bold">€{{ product.price }}</p>
            <!-- Conditional Button -->
      <button v-if="product.hasOptions" class="choose-options-btn w-full font-bold">Choose Options</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
      default: () => ({
        name: 'Product Name',
        price: 0,
        image: 'default-image-url.jpg',
        hoverImage: 'hover-image-url.jpg',
        hasOptions: false
      })
    }
  }
};
</script>

<style scoped>
.product-card {
  display: inline-block;
  text-align: left;
  margin: 1rem;
}
.image-container {
  position: relative;
  width: 360px; /* Adjust as needed */
  height: 300px; /* Adjust as needed */
  overflow: hidden;
}
.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 90%;
  height: 90%;
  object-fit: contain;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.main-image {
  z-index: 1;
  opacity: 1;
}

.hover-image {
  z-index: 2;
  opacity: 0;
}

.image-container:hover .main-image {
  transform: scale(1.3); /* Scale up on hover */
  opacity: 0; /* Fade out the main image */
}

.image-container:hover .hover-image {
  opacity: 1; /* Fade in the hover image */
}

.product-card:hover .product-details h3 {
  text-decoration: underline;
}

.product-details h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.product-details p {
  font-size: 0.9rem;
}

.choose-options-btn {
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #ffffff; /* Blue background */
  color: black; /* White text */
  border: 1px solid black; /* Blue border */
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.choose-options-btn:hover {
  transform: scale(1.05); /* Scale up on hover */
}
</style>