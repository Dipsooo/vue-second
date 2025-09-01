<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const authStore = useAuthStore();
const router = useRouter();
const errorMessage = ref("");

const handleLogin = async () => {
  try {
    await authStore.loginUser({ username: username.value, password: password.value });
    router.push("/"); // redirect to homepage
  } catch (err) {
    errorMessage.value = "Invalid username or password";
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Username" required /><br />
      <input v-model="password" type="password" placeholder="Password" required /><br/>
      <button type="submit">Login</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
}
.error {
  color: red;
}
</style>