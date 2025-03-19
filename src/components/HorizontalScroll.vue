<template>
    <div class="horizontal-scroll">
      <div class="flex gap-6 overflow-x-auto pb-4 hide-scrollbar" ref="scrollContainer">
        <slot></slot>
      </div>
      <div class="flex items-center justify-center mt-4">
        <button @click="scrollLeft" class="p-2"> &lt; </button>
        <span class="mx-4">{{ currentSlide }} / {{ totalSlides }}</span>
        <button @click="scrollRight" class="p-2"> &gt; </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentSlide: 1,
        totalSlides: 5,
      };
    },
    methods: {
      scrollLeft() {
        const container = this.$refs.scrollContainer;
        container.scrollBy({ left: -420, behavior: 'smooth' });
        if (this.currentSlide > 1) {
          this.currentSlide--;
        }
      },
      scrollRight() {
        const container = this.$refs.scrollContainer;
        container.scrollBy({ left: 420, behavior: 'smooth' });
        if (this.currentSlide < this.totalSlides) {
          this.currentSlide++;
        }
      }
    },
    mounted() {
      const container = this.$refs.scrollContainer;
    }
  };
  </script>
  
  <style scoped>
  .hide-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  </style>