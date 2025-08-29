import { defineStore } from "pinia";
import { login } from "@/services/authService";
import type { LoginPayload } from "@/types/Auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || "",
    isAuthenticated: !!localStorage.getItem("token"),
  }),
  actions: {
    async loginUser(payload: LoginPayload) {
      try {
        const response = await login(payload);
        this.token = response.token;
        this.isAuthenticated = true;
        localStorage.setItem("token", response.token);
      } catch (error) {
        throw new Error("Login failed");
      }
    },
    logoutUser() {
      this.token = "";
      this.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
});