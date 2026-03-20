<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter'
    import { ref, computed } from 'vue'

    const counter = useCounterStore()
    const name = ref('')

    const selectedId = ref(null)
    const selectedProduct = computed(() =>
      counter.products.find(p => p.id === selectedId.value)
    )

    const search = ref("")

    // const filteredProducts = computed(() => counter.products.filter(p =>
    //     p.name.toLowerCase().includes(search.value.toLowerCase())
    //   ))

    const filteredProducts = computed(() => {
      if (!search.value.trim()) {
        return []
      }

      return counter.products.filter(p =>
        p.name.toLowerCase().includes(search.value.toLowerCase())
      )
    })
</script>
<template>
  <div style="padding: 20px 20px;">
    <p>{{ counter.message }}</p>
    <p>{{ counter.count }}</p>

    <p><button @click="counter.changeMessage">Message</button></p>
    <p><button @click="counter.increment">Add</button></p>

    <input v-model="name" placeholder="Name" />
    <p>{{ name }}</p>

    <!-- <div class="product-container">
      <div class="product-grid">
        <div v-for="p in counter.products" :key="p.id">
          {{ p.name }} - {{ p.price }}
        </div>
      </div>
    </div> -->

    <select v-model="selectedId">
    <option disabled value="">เลือกสินค้า</option>
      <option v-for="p in counter.products" :key="p.id" :value="p.id">
        {{ p.name }}
      </option>
    </select>

    <div v-if="selectedProduct">
      <p>ชื่อ: {{ selectedProduct.name }}</p>
      <p>ราคา: {{ selectedProduct.price }}</p>
      <p v-if="selectedProduct.stock > 0">✔️ มีสินค้า</p>
      <p v-else>❌ สินค้าหมด</p>
    </div>


    <!-- <div v-for="p in counter.products" :key="p.id" class="item">
      <p>{{ p.name }}</p>
      <p>{{ p.price }} บาท</p>

      <p v-if="p.stock > 0">✔️ มีสินค้า</p>
      <p v-else>❌ หมด</p>
    </div> -->
      <div>
        <input v-model="search" placeholder="ค้นหาสินค้า..." />
      </div>

    <div v-for="p in filteredProducts" :key="p.id">
      <p>{{ p.name }} - {{ p.price }}</p>

      <p v-if="p.stock > 0">✔️ มีสินค้า</p>
      <p v-else>❌ หมด</p>
    </div>
  </div>
</template>
<style scoped>
.product-container {
  /* height: 300px;      */
  /* overflow-x: auto;       */
  /* border: 1px solid #ccc; */
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 10px;
}
</style>