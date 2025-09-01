import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import ProductForm from "@/views/ProductForm.vue";
import ProductList from "@/views/ProductList.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Users from "@/views/Users.vue";
import Cart from "@/views/Cart.vue";
import { useAuthStore } from "@/stores/auth";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login},
  { path: '/create', name: 'CreateProduct', component: ProductForm },
  { path: '/edit/:id', name: 'EditProduct', component: ProductForm },
  { path: '/products', name: 'Products', component: ProductList },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail, props: true },
  { path: "/users", component: Users },
  { path: "/", redirect: "/users" },
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