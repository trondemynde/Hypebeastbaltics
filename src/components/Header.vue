<template>
  <!-- Cart Modal -->
  <Cart ref="cartModal" />
  <header :class="{'header-scrolled': isScrolled, 'scaled-header': isScrolled}" class="header">

    <!-- Top Gray Bar -->
    <div v-if="!isScrolled" class="top-bar bg-gray-800 text-center py-2 flex items-center justify-center relative mx-auto">
      <div class="container mx-auto px-4 flex justify-between items-center duration-300">
      <a href="https://www.instagram.com/hypebeastbaltics/" class="flex items-center text-white">
        <svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" width="35" height="35" stroke="#ffffff" class="scalable-icon"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#ffffff"></rect> <rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#ffffff" stroke-linecap="round"></rect> </g></svg>
        <span class="ml-1 font-bold">10,5K</span>
      </a>
      <a href="https://www.tiktok.com/@hypebeastbaltics" class="flex items-center text-white ml-4">
        <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="23" height="23" xml:space="preserve" stroke="#ffffff" class="scalable-icon"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path></g>
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
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center transition-all duration-300 header-index">

      <!-- Logo -->
      <router-link v-if="!isSearchOpen" to="/">
        <img src="../assets/hypebeastbalticsLOGO.jpg" alt="Hypebeast Baltics" class="h-10 scalable-logo">
      </router-link>

      <!-- Navigation Menu -->
      <ul v-if="!isSearchOpen" class="hidden md:flex space-x-6 text-gray-700 font-bold mr-auto px-4 ">
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
      <button v-if="!isSearchOpen" @click="toggleSearch" class=" text-gray-900 focus:outline-none ml-4 hover:transform hover:scale-110">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 30 30" class="scalable-icon">
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
    </svg>
      </button>

      <!-- Cart Icon -->
      <button v-if="!isSearchOpen" @click="toggleCart" class=" text-gray-900 focus:outline-none ml-4 hover:transform hover:scale-110">
        <svg class="icon icon-cart-empty font-bold scalable-icon" aria-hidden="true"  width="55" height="55" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none">
          <path d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z" fill="currentColor" fill-rule="evenodd"></path>
        </svg>
      </button>

      <!-- Search field -->
      <transition name="slide-fade">
        <form v-if="isSearchOpen" @submit.prevent="performSearch" class="flex items-center w-full mt-4 md:mt-0 search-bar">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            class="w-full px-4 py-2 border border-r-0 text-black"
          />
          <button type="submit" class="bg-white text-white px-4 py-2 rounded-r">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 30 30" class="scalable-icon">
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </button>
          <button @click="closeSearch" class="ml-2 text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </form>
      </transition>
       <!-- Overlay -->
      <div v-if="isSearchOpen" class="overlay"></div>

    </nav>
  </header>
</template>

<script>
import Cart from '../components/Cart.vue';

export default {
  components: { Cart },
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
      isSearchOpen: false,
      searchQuery: '',
      cartItemCount: 0,
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
      const header = document.querySelector('.header');
      const icons = document.querySelectorAll('.scalable-icon');
      const logo = document.querySelector('.scalable-logo');
      if (this.isScrolled) {
        header.classList.add('scaled-header');
        icons.forEach(icon => icon.classList.add('scaled-icon'));
        if (logo) logo.classList.add('scaled-logo');
      } else {
        header.classList.remove('scaled-header');
        icons.forEach(icon => icon.classList.remove('scaled-icon'));
        if (logo) logo.classList.remove('scaled-logo');
      }
    },
    startMessageCarousel() {
      this.carouselInterval = setInterval(() => {
        this.nextMessage();
      }, 3000);
    },

    toggleCart() {
      this.$refs.cartModal.toggleCart();
    },

    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
      if (this.isSearchOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeSearch() {
      this.isSearchOpen = false;
      this.searchQuery = '';
      document.body.style.overflow = '';
    },
    performSearch() {
      if (this.searchQuery) {
        console.log('Searching for:', this.searchQuery);
        // You can make an API call here to fetch search results
      }
      this.closeSearch();
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
  background-color: rgb(255, 255, 255);
  transition: all 0.3s ease;
  transform-origin: top;
  z-index: 10000;
}
.header-index{
  z-index: 1000;
}

.scaled-header {
  transform: scaleY(0.90);
  transition: transform 0.3s ease;
}

.top-bar {
  transition: opacity 0.3s ease, height 0.3s ease;
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
}


.scaled-icon {
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.scaled-logo {
  transform: scale(0.8);
  transition: transform 0.3s ease;
}

.search-bar {
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #000000;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1100;
}

.search-bar input {
  width: calc(100% - 70px);
  padding: 8px 12px;
  border: none;
  outline: none;
}

.search-bar button[type="submit"] {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
}

.search-bar button[type="submit"] svg {
  fill: #666;
  width: 20px;
  height: 20px;
}

.search-bar button[aria-label="Close"] {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
}

.search-bar button[aria-label="Close"] svg {
  fill: #666;
  width: 20px;
  height: 20px;
}

</style>