<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useProduct } from '@/stores/product'

const {
  products,
  selected,
  fetchProducts,
  selectRow,
  updateProduct,
  addProduct,
  openAddDialog,
  newProduct,
  showAddDialog,
  deleteProduct,
  filteredProducts,
  selectFromDropdown,
  search,
  showDropdown
} = useProduct()

const showDialog = ref(false)
  
const openDialog = () => {
  if (!selected.value) return
  selected.value = { ...selected.value }
  showDialog.value = true
}

// ปิด dialog
const closeDialog = () => {
  showDialog.value = false
}

// บันทึก
const save = async () => {
  await updateProduct()
  showDialog.value = false
}

onMounted(fetchProducts)
</script>

<template>
  <h2>📋 ตารางสินค้า</h2>
  <div class="table-container">

    <button @click="openAddDialog">
  ➕ เพิ่มสินค้า
</button>

<button 
  @click="deleteProduct" 
  :disabled="!selected"
  style="margin-left:10px; background:red; color:white;"
>
  ❌ ลบสินค้า
</button>

<div class="search-box">
  <input
    v-model="search"
    @focus="showDropdown = true"
    @input="showDropdown = true"
    placeholder="🔍 ค้นหาสินค้า..."
  />

  <!-- 🔥 dropdown -->
  <ul v-if="showDropdown && filteredProducts.length" class="dropdown">
    <li
      v-for="item in filteredProducts"
      :key="item.id"
      @click="selectFromDropdown(item)"
    >
      {{ item.name }}
    </li>
  </ul>
</div>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ชื่อ</th>
          <th>ราคา</th>
          <th>จำนวน</th>
        </tr>
      </thead>
    
      <tbody>
        <tr
        v-for="item in filteredProducts"
        :key="item.id"
        @click="selectRow(item)"
        :style="{
          background: selected?.id === item.id ? '#d0ebff' : ''
        }"
        >
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
      
    </table>
  </div>

  

  <br />

  <!-- 🔥 BUTTON -->
  <button @click="openDialog" :disabled="!selected">
    ✏️ แก้ไขข้อมูล
  </button>

  <!-- 🔥 DIALOG -->
  <div v-if="showDialog" class="overlay">
    <div class="dialog">
      <h3>แก้ไขสินค้า</h3>

      <div v-if="selected">
        <input v-model="selected.name" placeholder="ชื่อสินค้า" />
        <input v-model.number="selected.price" type="number" />
        <input v-model.number="selected.quantity" type="number" />
      </div>

      <div class="btn-group">
        <button @click="save">บันทึก</button>
        <button @click="closeDialog">ยกเลิก</button>
      </div>
    </div>
  </div>

  <!-- 🔥 ADD DIALOG -->
<div v-if="showAddDialog" class="overlay">
  <div class="dialog">
    <h3>➕ เพิ่มสินค้า</h3>

    <input v-model="newProduct.name" placeholder="ชื่อสินค้า" />
    <input v-model.number="newProduct.price" type="number" />
    <input v-model.number="newProduct.quantity" type="number" />

    <div class="btn-group">
      <button @click="addProduct">เพิ่ม</button>
      <button @click="showAddDialog = false">ยกเลิก</button>
    </div>
  </div>
</div>
</template>

<style>
.table-container {
  width: 100%;
  max-width: 1200px;  /* 🔥 คุมขนาด */
  margin: auto;       /* จัดกลาง */
}

/* .table-container {
  max-height: 1000px;
  overflow-y: auto;
} */

th, td {
  padding: 12px;
  text-align: left;
}

th:nth-child(2), td:nth-child(2) {
  width: 500px; /* ชื่อสินค้า */
}

table {
  width: 100%;
  padding: 20px;
  max-height: 1000px;
  overflow-y: auto;
}
tr:hover {
  background: #f1f1f1;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.dialog input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
}

.btn-group {
  display: flex;
  justify-content: space-between;
}

.search-box {
  position: relative;
  width: 300px;
  margin-bottom: 10px;
}

.search-box input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
}

.dropdown li {
  padding: 8px;
  cursor: pointer;
}

.dropdown li:hover {
  background: #f1f1f1;
}
</style>