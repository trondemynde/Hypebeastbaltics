<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero h-120 bg-cover bg-center" :class="{ 'bg-[url(https://hypebeastbaltics.com/cdn/shop/files/photo_2024-11-13_12.40.38.jpg?v=1731494465&width=1100)]': true }">
      <div class="container mx-auto flex items-center h-full text-white">
      </div>
    </section>

    <!-- Promotional carousel -->
    <section class="promotions py-2 bg-gray-100">
      <Carousel />
    </section>

    <!-- New Arrivals -->
    <section class="new-arrivals py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">New Arrivals</h2>
        <div class="grid gap-6 md:grid-cols-4">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="text-center mt-4">
          <button class="text-black hover:font-bold underline">View All</button>
        </div>
      </div>
    </section>

    <!-- Best Sellers -->
    <section class="best-sellers py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Best Sellers</h2>
        <div class="grid gap-6 md:grid-cols-4">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="text-center mt-4">
          <button class="text-black hover:font-bold underline">View All</button>
        </div>
      </div>
    </section>

    <!-- Used Deals -->
    <section class="used-deals py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Used Deals</h2>
        <div class="grid gap-6 md:grid-cols-4">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="text-center mt-4">
          <button class="text-black hover:font-bold underline">View All</button>
        </div>
      </div>
    </section>

    <!-- Promotional Message -->
    <section class="hero h-140 bg-cover bg-center" :class="{ 'bg-[url(../assets/banner2.jpg)]': true }">
      <div class="container mx-auto flex items-center h-full text-white">
      </div>
    </section>
  </div>


      <!-- Collections -->
      <section class="collections py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Collections</h2>
        <div class="collections-grid">
            <CollectionCard v-for="collection in collections" :key="collection.name" :collection="collection" />
          </div>
      </div>
    </section>

        <!-- Under 200 -->
        <section class="cheapass py-12 bg-gray-100 text-black">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-8">Under 200€</h2>
        <div class="grid gap-6 md:grid-cols-4">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
        <div class="text-center mt-4">
          <button class="text-black hover:font-bold underline">View All</button>
        </div>
      </div>
    </section>

        <!-- Promotional Message -->
    <section class="hero h-140 bg-cover bg-center" :class="{ 'bg-[url(../assets/accessories.jpg)]': true }">
      <div class="container mx-auto flex items-center h-full text-white">
      </div>
    </section>

    
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import Carousel from '../components/HomeCarousel.vue';
import CollectionCard from '../components/CollectionCard.vue';

export default {
  components: { ProductCard, Carousel, CollectionCard },
  data() {
    return {
      products: [
      {
          id: 1,
          name: 'Nike x NOCTA Track Jacket Dark Wine/Black',
          price: 250,
          image: 'https://hypebeastbaltics.com/cdn/shop/files/nike-air-force-1-low-supreme-baroque-brown4.png?v=1724424246&width=360',
          hoverImage: 'https://hypebeastbaltics.com/cdn/shop/files/air-force-1-low-black-supreme-538165_035370a3-f07e-4614-9639-d0e8920a9bfb.png?v=1740395425&width=360'
        },
        {
          id: 2,
          name: 'Used Ralph Lauren Black Puffer Jacket',
          price: 190,
          image: 'https://hypebeastbaltics.com/cdn/shop/files/nike-air-force-1-low-supreme-baroque-brown4.png?v=1724424246&width=360',
          hoverImage: 'https://hypebeastbaltics.com/cdn/shop/files/air-force-1-low-black-supreme-538165_035370a3-f07e-4614-9639-d0e8920a9bfb.png?v=1740395425&width=360'
        },
        {
          id: 3,
          name: 'Used Jordan 6 Retro Gatorade Like Mike White',
          price: 150,
          image: 'https://hypebeastbaltics.com/cdn/shop/files/nike-air-force-1-low-supreme-baroque-brown4.png?v=1724424246&width=360',
          hoverImage: 'https://hypebeastbaltics.com/cdn/shop/files/air-force-1-low-black-supreme-538165_035370a3-f07e-4614-9639-d0e8920a9bfb.png?v=1740395425&width=360'
        },
        {
          id: 4,
          name: 'Used Nike SB Dunk Low TIGHTBOOTH',
          price: 200,
          image: 'https://hypebeastbaltics.com/cdn/shop/files/nike-air-force-1-low-supreme-baroque-brown4.png?v=1724424246&width=360',
          hoverImage: 'https://hypebeastbaltics.com/cdn/shop/files/air-force-1-low-black-supreme-538165_035370a3-f07e-4614-9639-d0e8920a9bfb.png?v=1740395425&width=360'
        }
      ],
      collections: [
        {
          name: 'Jordan',
          image: 'https://hypebeastbaltics.com/cdn/shop/collections/jordan_1.jpg?v=1694639602&width=535',
          link: '/collections/jordan'
        },
        {
          name: 'New Balance',
          image: 'https://hypebeastbaltics.com/cdn/shop/collections/new_balance.webp?v=1694384693&width=535',
          link: '/collections/new-balance'
        },
        {
          name: 'Nike Air Force 1',
          image: 'https://hypebeastbaltics.com/cdn/shop/collections/af1.jpg?v=1694639759&width=535',
          link: '/collections/nike-air-force-1'
        },
        {
          name: 'Jordan 4',
          image: 'https://hypebeastbaltics.com/cdn/shop/collections/jordan_4.jpg?v=1694639671&width=535',
          link: '/collections/jordan-4'
        },
        {
          name: 'Yeezy',
          image: 'https://hypebeastbaltics.com/cdn/shop/collections/IMG_3032.jpg?v=1694639549&width=535',
          link: '/collections/yeezy'
        }
      ],
      bestSellers: [
        // Product data
      ],
      usedProducts: [
        // Product data
      ]
    };
  }
};
</script>

<style scoped>
.collections-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.hero {
  background-size: cover;
  background-position: center;
}
</style>