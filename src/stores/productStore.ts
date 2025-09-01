import { defineStore } from "pinia";
import { productService } from "../services/productService";
import type { Product } from "../types/Product";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product | null,
    loading: false,
    error: "",
  }),
  
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        this.products = await productService.getAll();
      } catch {
        this.error = "Failed to fetch products";
      } finally {
        this.loading = false;
      }
    },

    async fetchProduct(id: number) {
      this.loading = true;
      try {
        this.selectedProduct = await productService.getById(id);
      } catch {
        this.error = "Failed to fetch product";
      } finally {
        this.loading = false;
      }
    },

    async addProduct(product: Omit<Product, "id">) {
      this.loading = true;
      try {
        const newProduct = await productService.create(product);
        this.products.push(newProduct);
      } catch {
        this.error = "Failed to add product";
      } finally {
        this.loading = false;
      }
    },

    async updateProduct(id: number, product: Partial<Product>) {
      this.loading = true;
      try {
        const updated = await productService.update(id, product);
        const idx = this.products.findIndex(p => p.id === id);
        if (idx !== -1) this.products[idx] = updated;
      } catch {
        this.error = "Failed to update product";
      } finally {
        this.loading = false;
      }
    },

    async deleteProduct(id: number) {
      this.loading = true;
      try {
        await productService.delete(id);
        this.products = this.products.filter(p => p.id !== id);
      } catch {
        this.error = "Failed to delete product";
      } finally {
        this.loading = false;
      }
    },
  },
});