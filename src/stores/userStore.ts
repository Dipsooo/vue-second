import { defineStore } from "pinia";
import { User } from "@/types/User";
import * as userService from "@/services/userService";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as User[],
  }),
  actions: {
    async fetchUsers() {
      const response = await userService.getUsers();
      this.users = response.data;
    },
    async addUser(user: User) {
      await userService.createUser(user);
      await this.fetchUsers();
    },
    async updateUser(id: number, user: User) {
      await userService.updateUser(id, user);
      await this.fetchUsers();
    },
    async deleteUser(id: number) {
      await userService.deleteUser(id);
      await this.fetchUsers();
    },
  },
});