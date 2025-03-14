<template>
    <carousel :items-to-show="1" class="h-full">
      <slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" alt="Slide" class="w-full h-full object-cover">
      </slide>
    </carousel>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue3-carousel';
  
  export default {
    components: { Carousel, Slide },
    props: ['slides']
  };
  </script>