import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Products from '../views/products.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Cart from '../views/Cart.vue';
import About from '../views/About.vue';
import Blog from '../views/Blog.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/product/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/about', component: About },
  { path: '/blog', component: Blog },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;