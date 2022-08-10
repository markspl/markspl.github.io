<template>
  <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
    <router-view />
    <footer-item />
  </div>
</template>

<script>
import FooterItem from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    FooterItem,
  },
};
</script>

<style>
body, html {
  height: 80%;
}
</style>
