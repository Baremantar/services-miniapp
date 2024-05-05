<script setup>
import Service from "@/components/Service.vue";

const props = defineProps({
  services: [
    {
      title: String,
      link: String,
    }
  ]
})

</script>

<template>
  <h1>услуги</h1>
  <div class="services-list__wrapper">
    <Service v-for="item in props.services" :title="item.title" :link="item.link"/>
  </div>
</template>

<style scoped lang="scss">

h1 {
  font-size: 36px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;
}

.services-list__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 450px;
  width: 100%;
}
</style>