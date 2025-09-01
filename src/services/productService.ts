import axios from "axios";
import type { Product } from "../types/Product";

const API_URL = "https://fakestoreapi.com/products";

export const productService = {
  async getAll(): Promise<Product[]> {
    const res = await axios.get<Product[]>(API_URL);
    return res.data;
  },

  async getById(id: number): Promise<Product> {
    const res = await axios.get<Product>(`${API_URL}/${id}`);
    return res.data;
  },

  async create(product: Omit<Product, "id">): Promise<Product> {
    const res = await axios.post<Product>(API_URL, product);
    return res.data;
  },

  async update(id: number, product: Partial<Product>): Promise<Product> {
    const res = await axios.put<Product>(`${API_URL}/${id}`, product);
    return res.data;
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  },
};