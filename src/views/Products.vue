<template>
  <div class="products">
    <h1>Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '../services/api.js';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  setup() {
    const products = ref([]);

    onMounted(async () => {
      try {
        products.value = await fetchProducts();
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    });

    return { products };
  },
};
</script>