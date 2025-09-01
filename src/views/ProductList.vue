<script lang="ts" setup>
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import ProductCard from '../components/ProductCard.vue';

const store = useProductStore()
onMounted(() => { store.fetchProducts() })
</script><template>
<div class="page">
<header class="top">
<h1>Products</h1>
<router-link to="/create" class="btn">+ New</router-link>
</header>


<section v-if="store.loading">Loading…</section>
<section v-else>
<div class="grid">
<ProductCard v-for="p in store.products" :key="p.id" :product="p" />
</div>
</section>
</div>
</template>

<style scoped>
.page{ padding:1.25rem }
.top{ display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem }
.btn{ padding:0.4rem 0.8rem; border-radius:6px; background:#111; color:#fff; text-decoration:none }
.grid{
display:grid;
grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
gap:1rem;
}
/* responsive */
@media (max-width: 1100px){ .grid{ grid-template-columns: repeat(3, 1fr) } }
@media (max-width: 760px){ .grid{ grid-template-columns: repeat(2, 1fr) } }
@media (max-width: 420px){ .grid{ grid-template-columns: 1fr } }
</style>