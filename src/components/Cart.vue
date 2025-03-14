<template>
  <div class="cart-modal" :class="{ 'is-active': isCartOpen }">
    <!-- Overlay -->
    <div class="overlay" @click="closeCart"></div>

    <!-- Cart Content -->
    <div class="cart-content">
      <header class="cart-header text-black">
        <h2>Your cart</h2>
        <button @click="closeCart" class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </header>

      <!-- Cart Items -->
      <div v-if="cartItems.length > 0" class="cart-items min-h-screen">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-details text-black">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <p>€{{ item.price }}</p>
            <p>Options: {{ item.options }}</p>
            <div class="quantity-controls">
              <button @click="decrementQuantity(item)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="incrementQuantity(item)">+</button>
            </div>
            <button @click="removeItem(item)" class="delete-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-8h-1.5l-.5-6C14.55 6 15 5.55 15 5c0-.45-.45-1-1-1h-4c-.55 0-1 .45-1 1 0 .55.45 1 1 1l.5 6H9c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM6 13h2v-2H6v2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Empty Cart Message -->
      <div v-else class="empty-cart-message flex flex-col items-center justify-center mx-auto py-12">
        <h3 class="text-black text-4xl mb-6">Your cart is empty</h3>
          <button @click="continueShopping" class="continue-shopping-button bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-200" >Continue shopping</button>
      </div>

      <!-- Order Summary -->
      <footer v-if="cartItems.length > 0" class="cart-footer">
        <div class="order-summary text-black">
          <p>Estimated total: €{{ total }}</p>
          <p>Tax included. Shipping and discounts calculated at checkout.</p>
        </div>
        <button @click="checkout" class="checkout-button">Check out</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCartOpen: false,
      cartItems: [
        {
          id: 1,
          name: 'Used Off-White Embroidered Checked Cotton Flannel Shirt',
          description: 'Lorem ipsum dolor sit amet.',
          price: 150,
          options: 'M EU',
          quantity: 1,
          image: 'https://via.placeholder.com/150'
        }
      ],
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    },
  },
  methods: {
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      this.$nextTick(() => {
        if (this.isCartOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });
    },
    closeCart() {
      this.isCartOpen = false;
      document.body.style.overflow = '';
    },
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem(item) {
      const index = this.cartItems.indexOf(item);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    checkout() {
      // Handle checkout logic here
      console.log('Checkout');
    },
    continueShopping() {
      // Handle continue shopping logic here
      console.log('Continue Shopping');
      this.closeCart();
    },
  },
};
</script>

<style scoped>
.cart-modal {
  display: none;
}

.cart-modal.is-active {
  display: block;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.cart-content {
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100%;
  background-color: white;
  z-index: 1100;
  overflow-y: auto;

}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.close-button {
  cursor: pointer;
}

.cart-items {
  padding: 1rem;
}

.cart-item {
  display: flex;
  margin-bottom: 1rem;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
}

.cart-item-details {
  flex: 1;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-controls button {
  cursor: pointer;
  margin: 0 0.5rem;
}

.delete-button {
  cursor: pointer;
  margin-left: 1rem;
}

.cart-footer {
  position: sticky;
  bottom: 0;
  background-color: white;
  padding: 1rem;
  border-top: 1px solid #ccc;
}

.checkout-button {
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  width: 100%;
}

.no-scroll {
  overflow: hidden;
}
</style>