<template>
    <div class="blog-post text-black container mx-auto ">
        <router-link v-if="post.readMoreUrl" :to="post.readMoreUrl">
    <div class="post-header relative">
      <h2 class="text-left mb-4">{{ post.title }}</h2>
      <img :src="post.heroImage" alt="Hero Image" class="hero-image max-w-600 max-h-120 w-full object-cover transform hover:scale-102 transition duration-300 ease-in-out">
    </div>
    <!-- Read More Link (if applicable) -->
    <div  class="read-more hover:underline">Join us as a store employee </div>
      <p class="date">{{ formatDate(post.date) }}</p>
  
      
      <!-- Excerpt or Full Content -->
      <div v-html="post.content" class="text-gray-500 font-bold"></div>
  
    </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
        default: () => ({
          title: 'News',
          date: 'JULY 22, 2024',
          content: '<p>Growing the sneaker culture and knowledge has always been a mission of ours. With upcoming exciting news and our small team expanding, we re now looking for a store employeeto join...</p>',
          heroImage: 'https://hypebeastbaltics.com/cdn/shop/articles/JOIN_OUR_TEAM.svg?v=1721681841&width=533',
          readMoreUrl: '/full-post'
        })
      }
    },
    methods: {
      formatDate(date) {
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date));
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-post {
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  
.hero-image {
    filter: brightness(80%);
    display: block;
    margin-left: auto;
    margin-right: auto;
}
  
  h2 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-right: auto;
    max-width: 100%;
  }
  
  .date {
    font-size: 0.8rem;
    color: #666;
  }
  .read-more {
    display: block;
    margin-top: 1rem;
    color: #000;
    font-size: 2rem;
  }
  
  </style>