<script lang="ts" setup>
import UserForm from "@/components/UserForm.vue";
import { useUserStore } from "@/stores/userStore";
import { onMounted } from "vue";

interface User {
  name: string;
  email: string;
  phone: string;
}

const userStore = useUserStore();
const { users, fetchUsers, addUser, deleteUser } = userStore;

onMounted(fetchUsers);
</script>

<template>
  <div>
    <h1>Users</h1>
    <UserForm @submit="addUser" />
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} - {{ user.email }}
        <button @click="deleteUser(users.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
