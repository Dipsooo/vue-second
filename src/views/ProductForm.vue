<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '../stores/productStore'


const route = useRoute()
const router = useRouter()
const store = useProductStore()


const idParam = route.params.id ? Number(route.params.id) : null
const isEdit = !!idParam


const form = reactive({ title: '', price: 0, description: '' })


onMounted(async () => {
if (isEdit && idParam) {
await store.fetchById(idParam)
if (store.selected) Object.assign(form, { title: store.selected.title, price: store.selected.price, description: store.selected.description })
}
})


async function submit() {
if (isEdit && idParam) {
const p = await store.updateProduct(idParam, { title: form.title, price: form.price, description: form.description })
if (p) router.push({ name: 'ProductDetail', params: { id: String(p.id) } })
} else {
const p = await store.createProduct({ title: form.title, price: form.price, description: form.description })
router.push({ name: 'ProductDetail', params: { id: String(p.id) } })
}
}
</script>

<template>
<div class="page">
<button @click="$router.back()">← Back</button>
<h2>{{ isEdit ? 'Edit' : 'Create' }} Product</h2>


<form @submit.prevent="submit">
<label>Title<input v-model="form.title" required /></label>
<label>Price<input v-model.number="form.price" type="number" step="0.01" required /></label>
<label>Description<textarea v-model="form.description"></textarea></label>
<div class="actions">
<button type="submit" class="btn">Save</button>
</div>
</form>
</div>
</template>

<style scoped>
.page{ padding:1rem }
form{ display:flex; flex-direction:column; gap:0.75rem; max-width:600px }
label{ display:flex; flex-direction:column }
input, textarea{ padding:0.5rem; border-radius:6px; border:1px solid #ddd }
.actions{ margin-top:0.5rem }
.btn{ background:#111; color:#fff; padding:0.5rem 0.8rem; border-radius:6px }
</style>