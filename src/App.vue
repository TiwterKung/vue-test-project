<script setup lang="ts">
import { useCounterStore } from '../src/stores/counter'
import HeaderView from "../src/view/header.vue";
import FooterView from "../src/view/footer.vue"

const counter = useCounterStore()
</script>

<template>
  <HeaderView />
  <div style="padding: 20px 20px;">
    <p>{{ counter.message }}</p>
  <p>{{ counter.count }}</p>

  <button @click="counter.changeMessage">
    Message
  </button>
  <button @click="counter.increment">Add</button>
  </div>
  
  <FooterView />
</template>