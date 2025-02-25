<template>
    <div class="container mx-auto p-4">
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Your Cart</h2>
          <div v-if="cartItems.length">
            <ul>
              <li v-for="item in cartItems" :key="item.id" class="mb-4">
                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="text-lg font-semibold">{{ item.name }}</h3>
                    <p class="text-sm text-gray-500">Quantity: {{ item.quantity }}</p>
                  </div>
                  <div>
                    <p class="text-lg font-semibold">{{ item.price }}</p>
                    <button @click="removeFromCart(item.id)" class="btn btn-error btn-sm">Remove</button>
                  </div>
                </div>
              </li>
            </ul>
            <div class="mt-4">
              <p class="text-lg font-semibold">Total: {{ total }}</p>
              <button class="btn btn-primary mt-2">Proceed to Checkout</button>
            </div>
          </div>
          <div v-else>
            <p>Your cart is empty.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const cartItems = computed(() => store.state.cart.items);
  const total = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0));
  
  const removeFromCart = (id) => {
    store.dispatch('removeFromCart', id);
  };
  </script>
  
