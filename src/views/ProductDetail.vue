<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/productStore'


const route = useRoute()
const router = useRouter()
const store = useProductStore()


const id = Number(route.params.id)
onMounted(() => { store.fetchById(id) })


function formatPrice(v: number) {
return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(v)
}


async function remove(){
const ok = confirm('Delete product?')
if (!ok) return
const deleted = await store.deleteProduct(id)
if (deleted) router.push('/')
}
</script>

<template>
<div class="page">
<button @click="$router.back()">← Back</button>


<section v-if="store.loading">Loading…</section>
<section v-else-if="!store.selected">Product not found.</section>
<section v-else class="detail">
<h2>{{ store.selected.title }}</h2>
<p class="price">{{ formatPrice(store.selected.price) }}</p>
<p>{{ store.selected.description }}</p>


<div class="actions">
<router-link :to="`/edit/${store.selected.id}`" class="btn">Edit</router-link>
<button class="danger" @click="remove">Delete</button>
</div>
</section>
</div>
</template>

<style scoped>
.page{ padding:1rem }
</style>