<template>
  <div class="scrolling-text-container">
    <div class="scrolling-text-wrapper">
      <div class="scrolling-text text-black text-xs font-bold">
        <span v-for="(message, index) in repeatedMessages" :key="index" class="message">
          {{ message }}
        </span>
        <span v-for="(message, index) in repeatedMessages" :key="'repeat-' + index" class="message">
          {{ message }}
        </span>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isScrolled: false,
        messages: [
          ' Visit our shop at Viru 21, Tallinn! ',
          ' 100% Authenticity Guaranteed ',
          ' Shipping worldwide! ',
          ' 1000+ satisfied customers ',
        ],
      };
    },
    computed: {
      repeatedMessages() {
      return [...this.messages, ...this.messages];
    },
  },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.isScrolled = window.scrollY > 0;
      },
    },
  };
  </script>
  
  <style scoped>
  .scrolling-text-container {
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }
  
  .scrolling-text {
    display: flex;
    animation: scroll-left 10s linear infinite; 
  }

  .scrolling-text-wrapper {
  display: flex;
  width: 150%;
}
  .message {
    padding-right: 1rem;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0); 
    }
    100% {
      transform: translateX(-10%); 
    }
  }
  
  </style>