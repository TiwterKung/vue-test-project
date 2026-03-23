<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const price = ref('')
const loading = ref(false)
const message = ref('')

// 🔹 เพิ่มสินค้า
const addProduct = async () => {
  if (!name.value || !price.value) {
    message.value = 'กรุณากรอกข้อมูลให้ครบ'
    return
  }

  try {
    loading.value = true

    await axios.post('http://localhost:3000/products', {
      name: name.value,
      price: Number(price.value)
    })

    message.value = 'เพิ่มสินค้าสำเร็จ ✅'

    // reset form
    name.value = ''
    price.value = ''

  } catch (err) {
    message.value = 'เกิดข้อผิดพลาด ❌'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="box">
    <h2>➕ เพิ่มสินค้า</h2>

    <!-- 🔹 input -->
    <input v-model="name" placeholder="ชื่อสินค้า" />
    <input v-model="price" type="number" placeholder="ราคา" />

    <!-- 🔹 ปุ่ม -->
    <button @click="addProduct" :disabled="loading">
      {{ loading ? 'กำลังเพิ่ม...' : 'เพิ่มสินค้า' }}
    </button>

    <!-- 🔹 message -->
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
.box {
  width: 300px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px #ccc;
  border-radius: 10px;
  text-align: center;
}

input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
}

button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
}
</style>