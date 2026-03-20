<script setup lang="ts">
import HeaderView from "@/component/header.vue"
import FooterView from "@/component/footer.vue"
</script>

<template>
  <HeaderView />

  <router-view />

  <FooterView />
</template>