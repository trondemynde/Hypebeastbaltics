<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="app">
    <Header />
    <main class="min-h-screen">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>