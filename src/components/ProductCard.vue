<template>
    <div class="card shadow-xl">
      <figure>
        <img :src="product.image" alt="Product Image" class="rounded-t-lg">
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p class="text-lg font-semibold">{{ product.price }}</p>
        <p class="mt-2">{{ product.description }}</p>
        <div class="card-actions justify-end mt-4">
          <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useStore } from 'vuex';
  
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  
  const store = useStore();
  
  const addToCart = (product) => {
    store.dispatch('addToCart', product);
  };
  </script>
  