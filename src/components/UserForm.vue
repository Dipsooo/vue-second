<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="phone" placeholder="Phone" />
    <button type="submit">Add User</button>
  </form>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const name = ref("");
const email = ref("");
const phone = ref("");

const emit = defineEmits<{
  (e: "submit", user: { name: string; email: string; phone: string }): void;
}>();

const submitForm = () => {
  emit("submit", { name: name.value, email: email.value, phone: phone.value });
  name.value = "";
  email.value = "";
  phone.value = "";
};
</script>