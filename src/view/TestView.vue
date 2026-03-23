<script setup lang="ts">
import { ref } from 'vue'
    import { useCounterStore } from '@/stores/counter'

    const counter = useCounterStore()

</script>

<template>
  <div class="product-box">
    <h2>รายการสินค้า</h2>

    <div class="grid">
      <div v-for="p in counter.products" :key="p.id" class="item">
        <p><strong>{{ p.name }}</strong></p>
        <p>{{ p.price }} บาท</p>

        <p v-if="p.stock > 0" class="in-stock">มีสินค้า</p>
        <p v-else class="out-stock">หมด</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-box {
  width: 400px;
  height: 400px;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 15px;

  overflow-y: auto; 
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.item {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
}

.in-stock {
  color: green;
}

.out-stock {
  color: red;
}
</style>