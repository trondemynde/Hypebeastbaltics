<template>
    <div class="container mx-auto p-4">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <div class="flex flex-col md:flex-row">
            <img :src="product.image" alt="Product Image" class="w-full md:w-1/2 rounded-lg shadow-md">
            <div class="md:ml-6 mt-4 md:mt-0">
              <p class="text-lg font-semibold">{{ product.price }}</p>
              <p class="mt-4">{{ product.description }}</p>
              <button @click="addToCart(product)" class="btn btn-primary mt-4">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  
  const store = useStore();
  const route = useRoute();
  const product = ref({});
  
  onMounted(() => {
    const productId = route.params.id;
    product.value = store.state.products.find(p => p.id === productId);
  });
  
  const addToCart = (product) => {
    store.dispatch('addToCart', product);
  };
  </script>
  
