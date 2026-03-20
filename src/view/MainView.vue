<script setup lang="ts">
    import { useCounterStore } from '@/stores/counter'

    const counter = useCounterStore()
</script>
<template>
  <div style="padding: 20px 20px;">
    <p>{{ counter.message }}</p>
    <p>{{ counter.count }}</p>

    <p><button @click="counter.changeMessage">Message</button></p>
    <p><button @click="counter.increment">Add</button></p>
  </div>
</template>