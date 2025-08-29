<template>
  <div class="navbar">
    <router-link to="/" class="hover:underline">Home</router-link>
    <router-link to="/products" class="hover:underline">Products</router-link>
    <router-link to="/users" class="hover:underline">Users</router-link>
    <router-link to="/cart" class="hover:underline">Cart</router-link>
    <router-link to="/login" class="hover:underline">Log in</router-link>
  </div>
</template>

<style scoped>
  .navbar {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #b1d6ff;
      padding: 15px;
      display: flex;
      justify-content: space-around;
      opacity: 0.4;
      z-index: 1000; /* ensures it stays above content */
    }

    .navbar a {
      color: rgba(51, 79, 87, 0.817);
      text-decoration: none;
      padding: 8px 16px;
      transition: background 0.3s;
    }

    .navbar a:hover {
     text-shadow: 1px 2px 2px rgba(8, 48, 245, 0.5);
    }
    /* .element {
      color: rgba(191, 44, 44, 0.817);
      text-decoration: none;
      padding: 8px 16px;
      transition: background 0.3s;
    }
    .element:hover {
      text-shadow: inset 0 0 15px rgba(255, 255, 255, 0.6);
    } */
</style>