<template>
  <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
    <header-item />
    <router-view />
    <footer-item />
  </div>
</template>

<script>
import FooterItem from '@/components/Footer.vue';
import HeaderItem from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    FooterItem,
    HeaderItem,
  },
};
</script>
