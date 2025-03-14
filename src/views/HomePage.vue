<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero h-120 bg-cover bg-center" :class="{ 'bg-[url(../assets/banner.jpg)]': true }">
      <div class="container mx-auto flex items-center h-full text-white">
      </div>
    </section>

    <!-- Promotional carousel -->
    <section class="promotions py-2 bg-gray-100">
      <Carousel />
    </section>

    <!-- New Arrivals -->
    <section class="new-arrivals py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">New Arrivals</h2>
        <div class="grid gap-6 md:grid-cols-4">
          <ProductCard 
            v-for="(product, index) in newProducts" 
            :key="index" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- Best Sellers -->
    <section class="best-sellers py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Best Sellers</h2>
        <div class="grid gap-6 md:grid-cols-4">
          <ProductCard 
            v-for="(product, index) in bestSellers" 
            :key="index" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- Used Deals -->
    <section class="used-deals py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Used Deals</h2>
        <div class="grid gap-6 md:grid-cols-4">
          <ProductCard 
            v-for="(product, index) in usedProducts" 
            :key="index" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- Promotional Message -->
    <section class="promotion-message bg-white py-12">
      <div class="container mx-auto text-center">
        <h3 class="text-2xl font-bold mb-4">Join Our Community</h3>
        <p class="text-gray-600 mb-6">Be the first to know about new drops and exclusive offers</p>
        <button class="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">Sign Up</button>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import Carousel from '../components/HomeCarousel.vue';

export default {
  components: { ProductCard, Carousel },
  data() {
    return {
      newProducts: [
        { 
          id: 1, 
          name: 'Nike Air Force 1 Low', 
          price: '€230', 
          image: 'https://via.placeholder.com/300',
          description: 'Supreme collaboration in black'
        },
        // Add more products
      ],
      bestSellers: [
        // Product data
      ],
      usedProducts: [
        // Product data
      ]
    };
  }
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}
</style>