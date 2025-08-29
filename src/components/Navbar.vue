<template>
  <div class="navbar">
    <router-link to="/" class="hover:underline">Home</router-link>
    <router-link to="/products" class="hover:underline">Products</router-link>
    <router-link to="/users" class="hover:underline">Users</router-link>
    <router-link to="/cart" class="hover:underline">Cart</router-link>
    <router-link to="/login" class="element">Log in</router-link>
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
      color: rgba(191, 44, 44, 0.817);
      text-decoration: none;
      padding: 8px 16px;
      transition: background 0.3s;
    }

    .navbar a:hover {
      background-color: #626979;
    }
.element:hover {
  box-shadow: 0 0 20px 5px rgba(52, 152, 219, 0.7);
  transform: scale(1.05);
}
</style>