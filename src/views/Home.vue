<template>
  <div class="home">
    <div class="d-flex flex-column align-items-center">
      <repositories />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Repositories from '@/components/Repositories.vue';

export default {
  name: 'SocialsLinks',
  components: {
    Repositories,
  },
};
</script>

<style>
.home {
  font-family: "Roboto Mono", monospace;
}
</style>
