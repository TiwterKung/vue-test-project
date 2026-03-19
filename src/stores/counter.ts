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


  return { count, doubleCount, increment, message, changeMessage  }
})
