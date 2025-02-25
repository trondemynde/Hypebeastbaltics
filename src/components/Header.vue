<template>
  <header class="bg-base-100 shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <div class="text-2xl font-bold">
        <a href="/" class="text-primary">HypeBeastBaltics</a>
      </div>
      <nav class="flex space-x-4">
        <a href="/" class="btn btn-ghost">Home</a>
        <a href="/products" class="btn btn-ghost">Shop</a>
        <a href="/about" class="btn btn-ghost">About</a>
        <a href="/contact" class="btn btn-ghost">Contact</a>
      </nav>
      <div class="flex items-center space-x-4">
        <button class="btn btn-primary">Login</button>
        <button class="btn btn-secondary">Sign Up</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>