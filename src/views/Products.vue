<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

onMounted(() => {
  if (!productStore.products.length) {
    productStore.fetchProducts();
  }
});
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-6">Products</h1>

    <div v-if="productStore.loading">Loading...</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <router-link
        v-for="p in productStore.products"
        :key="p.id"
        :to="`/products/${p.id}`"
        class="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
      >
        <img :src="p.image" alt="" class="h-40 object-contain mb-4" />
        <h2 class="font-semibold text-lg text-center mb-2">{{ p.title }}</h2>
        <p class="mt-2 font-bold">${{ p.price }}</p>
      </router-link>
    </div>
  </div>
</template>