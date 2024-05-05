<script setup>
import ServiceList from '../components/ServiceList.vue';
import {useServices} from '@/stores/services';

const store = useServices();
</script>

<template>
  <main>
    <ServiceList :services="store.services"/>
  </main>
</template>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    gap: 20px;
  }
</style>