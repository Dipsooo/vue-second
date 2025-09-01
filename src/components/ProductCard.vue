<script lang="ts" setup>
import { useRouter } from 'vue-router'
import type { Product } from '../types/Product'


const props = defineProps<{ product: Product }>()
const router = useRouter()


function open() {
router.push({ name: 'ProductDetail', params: { id: String(props.product.id) } })
}


function formatPrice(v: number) {
return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v)
}
</script>

<template>
<article class="card" @click="open">
<div class="image" v-if="product.image"> <img :src="product.image" alt=""/> </div>
<h3>{{ product.title }}</h3>
<p class="price">{{ formatPrice(product.price) }}</p>
</article>
</template>

<style scoped>
.card{ cursor:pointer; padding:1rem; border:1px solid #eee; border-radius:8px; background:#fff; display:flex; flex-direction:column; gap:0.5rem }
.card .image{ height:120px; display:flex; align-items:center; justify-content:center; background:#fafafa; border-radius:6px }
.card img{ max-width:100%; max-height:100% }
.price{ font-weight:600 }
</style>