<script setup>
import {RouterLink} from "vue-router"

defineProps(
  {
    title: String,
    link: String,
  }
)
</script>

<template>
  <RouterLink :to="link">
    {{ title }}
  </RouterLink>
</template>

<style scoped>
  a {
    text-decoration: none;
    color: #415263;
    background: #F4F1ED;
    font-size: 20px;
    border-radius: 12px;
    padding: 10px 20px;
    width: 100%;
  }
</style>