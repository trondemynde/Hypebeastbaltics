<template>
  <header :class="{'header-scrolled': isScrolled}" class="header">
    <!-- Top Gray Bar -->
    <div v-if="!isScrolled" class="top-bar bg-gray-800 text-center py-2 flex items-center justify-center relative mx-auto">
      <div class="container mx-auto px-4 flex justify-between items-center transition-all duration-300">
      <a href="https://www.instagram.com/hypebeastbaltics/" class="flex items-center text-white">
        <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" width="35" height="35" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#ffffff"></rect> <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#ffffff" stroke-linecap="round"></rect> </g></svg>
        <span class="ml-1 font-bold">10,5K</span>
      </a>
      <a href="https://www.tiktok.com/@hypebeastbaltics" class="flex items-center text-white ml-4">
        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="23" height="23" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path></g>
        </svg>
        <span class="ml-1 font-bold">4,6K</span>
      </a>
      <div class="flex-1 flex justify-center items-center relative">
        <button @click="prevMessage" class="absolute left-100 text-white focus:outline-none">
        &lt;
        </button>
        <span class="mx-4 text-white">{{ currentMessage }}</span>
        <button @click="nextMessage" class="absolute right-100 text-white focus:outline-none">
        &gt;
        </button>
      </div>
      <a href="https://g.co/kgs/SvPR9Aw">
        <span style="margin-right:5px" class="google-rating" aria-hidden="true">5.0 on Google</span>
    
        <span class="google-stars" aria-label="Rated 5.0 out of 5," role="img"><span style="width:70px"></span> </span>
      </a>
      </div>
    </div>

    <!-- Main Header -->
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center transition-all duration-300">

      <!-- Logo -->
      <router-link to="/">
        <img src="../assets/hypebeastbalticsLOGO.jpg" alt="Hypebeast Baltics" class="h-10">
      </router-link>

      <!-- Navigation Menu -->
      <ul class="hidden md:flex space-x-6 text-gray-700 font-bold mr-auto px-4 ">
        <li class="hover:underline"><router-link to="/">In Stock</router-link></li>
        <li class="hover:underline"><router-link to="/shoes">Shoes</router-link></li>
        <li class="hover:underline"><router-link to="/clothing">Clothing</router-link></li>
        <li class="hover:underline"><router-link to="/accessories">Accessories</router-link></li>
        <li class="hover:underline"><router-link to="/brand">Brand</router-link></li>
        <li class="hover:underline"><router-link to="/used">USED</router-link></li>
        <li class="hover:underline"><router-link to="/contact">Contact</router-link></li>
        <li class="hover:underline"><router-link to="/blog">Blog</router-link></li>
      </ul>

      <!-- Search Icon -->
      <button class=" text-gray-900 focus:outline-none ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 30 30">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
    </svg>
      </button>

      <!-- Cart Icon -->
      <button class=" text-gray-900 focus:outline-none ml-4">
        <svg class="icon icon-cart-empty font-bold" aria-hidden="true"  width="55" height="55" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
          <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      messages: [
        'Visit our shop at Viru 21, Tallinn!',
        '100% authentic',
        'Shipping worldwide!',
        'Biggest sneaker selection in Baltics',
      ],
      currentMessageIndex: 0,
    };
  },
  computed: {
    currentMessage() {
      return this.messages[this.currentMessageIndex];
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.startMessageCarousel();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.carouselInterval);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    startMessageCarousel() {
      this.carouselInterval = setInterval(() => {
        this.nextMessage();
      }, 3000); // Change message every 3 seconds
    },
    nextMessage() {
      this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length;
    },
    prevMessage() {
      this.currentMessageIndex = (this.currentMessageIndex - 1 + this.messages.length) % this.messages.length;
    },
  },
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  transition: all 0.3s ease;
  transform-origin: top;
}

.header-scrolled {
  transform: scaleY(0.90);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.top-bar {
  transition: opacity 0.3s ease;
}

.header-scrolled .top-bar {
  opacity: 0;
  height: 0;
}

.google-stars, .google-stars span {
    background-size: 14px 11.4px;
    height: 11.4px;
    width: 68px;
}
.google-stars {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 11.4'%3E%3Cpath fill='%23f39c12' d='M7 0l2.1 3.8 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7L7 0z'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    display: inline-block;
    overflow: hidden;
    position: relative;
}
</style>