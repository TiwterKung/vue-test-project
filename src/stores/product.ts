// src/composables/useProduct.ts
import { computed,ref } from 'vue'
import axios from 'axios'

export type Product = {
  id: number
  name: string
  price: number
  quantity: number
}

export function useProduct() {
  const products = ref<Product[]>([])
  const selected = ref<Product | null>(null)

  // 🔹 โหลดข้อมูล
  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:3000/products')
    products.value = res.data
  }

  // 🔹 เลือก
  const selectRow = (item: Product) => {
    selected.value = item
  }

  // 🔹 update
  const updateProduct = async () => {
    if (!selected.value) return

    await axios.put(`http://localhost:3000/products/${selected.value.id}`, {
      name: selected.value.name,
      price: selected.value.price,
      quantity: selected.value.quantity
    })

    await fetchProducts()
  }

  const showAddDialog = ref(false)

const newProduct = ref({
  name: '',
  price: 0,
  quantity: 0
})

// เปิด dialog เพิ่ม
const openAddDialog = () => {
  newProduct.value = { name: '', price: 0, quantity: 0 }
  showAddDialog.value = true
}

// เพิ่มสินค้า
const addProduct = async () => {
  console.log(newProduct.value)
  await axios.post('http://localhost:3000/products', newProduct.value)
  
  showAddDialog.value = false
  fetchProducts()
}


const deleteProduct = async () => {
  if (!selected.value) return

  const confirmDelete = confirm(`ลบสินค้า "${selected.value.name}" ?`)
  if (!confirmDelete) return

  await axios.delete(`http://localhost:3000/products/${selected.value.id}`)

  selected.value = null
  fetchProducts()
}

const search = ref('')
const showDropdown = ref(false)

// 🔥 filter สำหรับ dropdown
const filteredProducts = computed(() => {
  if (!search.value) return products.value

  return products.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

// 🔥 เลือกจาก dropdown
const selectFromDropdown = (item: any) => {
  search.value = item.name
  showDropdown.value = false
}

  return {
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
  }
}