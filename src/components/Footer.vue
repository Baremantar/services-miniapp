<script setup>
import HomeLogo from '@/assets/svg/home.vue';
import OrdersLogo from '@/assets/svg/view-list.vue';
</script>

<template>
  <footer>
    <router-link to="/" >
      <HomeLogo/>
      <p>Главная</p>
    </router-link>
    <router-link to="/orders/">
      <OrdersLogo/>
      <p>Мои заказы</p>
    </router-link>
  </footer>
</template>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 15px;
  border-top: 1px solid #F4F1ED33;

  a {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    padding: 5px;
    border-radius: 12px;
    width: 100%;

    &:hover {
      background-color: #F4F1ED;
      color: #2c3e50;

      svg {
        path {
          stroke: #2c3e50;
        }
      }

      &.router-link-active {
        color: #2c3e50;
        svg {
          path {
            stroke: #2c3e50;
          }
        }
      }
    }

    &.router-link-active {
      color: #E7BDA6;
      svg {
        path {
          stroke: #E7BDA6;
        }
      }
    }
  }
}
</style>