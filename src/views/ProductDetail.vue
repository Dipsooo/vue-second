<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/productStore";
import { onMounted, computed } from "vue";

const route = useRoute();
const productStore = useProductStore();
const productId = Number(route.params.id);

onMounted(() => {
  if (!productStore.products.length) {
    productStore.fetchProducts();
  }
});

const product = computed(() => productStore.getProductById(productId));
</script>

<template>
  <div v-if="product" class="p-6">
    <img :src="product.image" class="h-60 object-contain mb-4" />
    <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
    <p class="text-gray-600 mb-4">{{ product.description }}</p>
    <p class="font-bold text-lg">${{ product.price }}</p>
  </div>
  <div v-else>Loading...</div>
</template>