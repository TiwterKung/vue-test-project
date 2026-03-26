<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

// const products = ref([])
type Product = {
  id: number
  name: string
  price: number
}

const products = ref<Product[]>([])

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

  <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in products" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
        </tr>
    </tbody>
  </table>
</template>