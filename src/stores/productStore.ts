import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/services/api";
import type { Product } from "@/types/Product";

export const useProductStore = defineStore("product", () => {
  const products = ref<Product[]>([]);
  const loading = ref(false);

  const fetchProducts = async () => {
    loading.value = true;
    try {
      const res = await api.get<Product[]>("/products");
      products.value = res.data;
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      loading.value = false;
    }
  };

  const getProductById = (id: number) =>
    products.value.find((p) => p.id === id);

  return { products, loading, fetchProducts, getProductById };
});