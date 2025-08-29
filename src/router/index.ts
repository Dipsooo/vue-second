import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue"
import Products from "@/views/Products.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Users from "@/views/Users.vue";
import Cart from "@/views/Cart.vue";
import { useAuthStore } from "@/stores/auth";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login},
  { path: "/products", name: "Products", component: Products },
  { path: "/products/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/users", name: "Users", component: Users },
  { path: "/cart", name: "Cart", component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: "Login" };
  }
});

export default router;