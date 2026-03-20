import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const message = ref("Hello Vue")
  function increment() {
    count.value++
  }

  function changeMessage() {
    message.value = "เปลี่ยนแล้ว!"
  }

  type Product = {
  id: number
  name: string
  price: number
  stock: number
  }

  const products = ref<Product[]>( [
  { id: 1, name: "Nike Air", price: 3500, stock: 10 },
  { id: 2, name: "Adidas Boost", price: 4200, stock: 0 },
  { id: 3, name: "Puma Run", price: 2800, stock: 5 },
  { id: 4, name: "Converse Low", price: 2500, stock: 8 },
  { id: 5, name: "Vans Old Skool", price: 3000, stock: 2 },
  { id: 6, name: "NB 530", price: 3900, stock: 0 },
  { id: 7, name: "Nike Zoom", price: 4100, stock: 6 },
  { id: 8, name: "Adidas Runfalcon", price: 2700, stock: 3 },
  { id: 9, name: "Puma RS-X", price: 3300, stock: 0 },
  { id: 10, name: "Converse High", price: 2600, stock: 4 },
  { id: 11, name: "Vans Slip-On", price: 2800, stock: 7 },
  { id: 12, name: "NB 574", price: 3600, stock: 1 },
  { id: 13, name: "Nike Revolution", price: 2400, stock: 9 },
  { id: 14, name: "Adidas Superstar", price: 3200, stock: 0 },
  { id: 15, name: "Puma Flyer", price: 2100, stock: 6 },
  { id: 16, name: "Converse Sport", price: 2300, stock: 2 },
  { id: 17, name: "Vans Era", price: 2900, stock: 0 },
  { id: 18, name: "NB Fresh Foam", price: 4100, stock: 5 },
  { id: 19, name: "Nike Court", price: 2600, stock: 3 },
  { id: 20, name: "Adidas Lite", price: 2200, stock: 8 },
  { id: 21, name: "Puma Smash", price: 2000, stock: 0 },
  { id: 22, name: "Converse All Star", price: 2700, stock: 6 },
  { id: 23, name: "Vans Classic", price: 3100, stock: 4 },
  { id: 24, name: "NB 327", price: 3700, stock: 2 }
])


  return { count, doubleCount, increment, message, changeMessage, products  }
})
