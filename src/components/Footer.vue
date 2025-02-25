<template>
  <footer class="bg-white text-center py-8">
    <!-- Top Section: Store Info and Social Media -->
    <div class="container mx-auto px-4 mb-8 text-black">
      <h2 class="text-lg font-bold mb-4">Our Store</h2>
      <p class="mb-2">Viru tn 21, Old Town<br>Tallinn, Estonia</p>
      <p class="mb-4">Mon - Sun 11:00 - 19:00</p>
      <p class="mb-4">
        Contact<br>
        hypebeastbalticsales@gmail.com
      </p>
      <p class="mb-6">
        Phone +37255660029
      </p>

      <!-- Social Media Icons -->
      <div class="flex justify-center space-x-4">
        <a href="https://www.instagram.com/hypebeastbaltics/" target="_blank" class="flex items-center space-x-2">
          <svg class="w-5 h-5 fill-current text-gray-500 hover:text-gray-700" viewBox="0 0 20 20">
            <path d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z" clip-rule="evenodd"></path>
          </svg>
          <span>Instagram (10.5k)</span>
        </a>
        <a href="https://www.tiktok.com/@hypebeastbaltics" target="_blank" class="flex items-center space-x-2">
          <svg class="w-5 h-5 fill-current text-gray-500 hover:text-gray-700" viewBox="0 0 20 20">
            <path d="M10.511 1.705h2.74s-.157 3.51 3.795 3.768v2.711s-2.114.129-3.796-1.158l.028 5.606A5.073 5.073 0 1 1 8.213 7.56h.708v2.785a2.298 2.298 0 1 0 1.618 2.205L10.51 1.705Z"></path>
          </svg>
          <span>TikTok (4.6k)</span>
        </a>
      </div>
    </div>

    <!-- Bottom Section: Copyright and Policies -->
    <div class="container mx-auto px-4 border-t border-gray-200 pt-4 text-gray-500">
      <ul class="flex flex-wrap justify-center list-none">
        <li class="mr-2">&copy; 2025, <a href="/" class="hover:text-gray-500">hypebeastbaltics</a></li>
        <li class="mr-2"><a href="/policies/refund-policy" class="hover:text-gray-500">Refund policy</a></li>
        <li class="mr-2"><a href="/policies/privacy-policy" class="hover:text-gray-500">Privacy policy</a></li>
        <li class="mr-2"><a href="/policies/terms-of-service" class="hover:text-gray-500">Terms of service</a></li>
        <li class="mr-2"><a href="/policies/shipping-policy" class="hover:text-gray-500">Shipping policy</a></li>
        <li><a href="/policies/contact-information" class="hover:text-gray-500">Contact information</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  font-size: 0.9rem;
}

.footer svg {
  width: 20px;
  height: 20px;
}
</style>