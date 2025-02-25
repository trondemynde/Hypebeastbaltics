<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { login } from '../../services/api.js';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
  
      const handleLogin = async () => {
        try {
          const response = await login({ email: email.value, password: password.value });
          localStorage.setItem('token', response.token); // Store token
          alert('Login successful!');
        } catch (error) {
          console.error('Login failed:', error);
          alert('Invalid credentials');
        }
      };
  
      return { email, password, handleLogin };
    },
  };
  </script>