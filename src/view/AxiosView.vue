<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])

const fetchProducts = async () => {
  const res = await axios.get('http://localhost:3000/products')
  products.value = res.data
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <h1>รายการสินค้า</h1>

  <div v-for="item in products" :key="item.id">
    {{ item.name }} - {{ item.price }} บาท
  </div>
</template>