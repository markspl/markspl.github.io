<template>
  <div class="socials">
    <div class="row" v-if="!data.length">
      <div class="col">
        <p>Loading...</p>
      </div>
    </div>
    <div class="row" v-if="data.length">
      <div class="col" v-for="item in data" :key="item.id">
        <div class="media">
          <!-- eslint-disable max-len -->
          <a class="btn btn-light" role="button" data-toggle="tooltip"
          data-placement="bottom" target="_blank" :href="item.href"
          :title="item.howerText" :id="item.id">
            <i :class="item.icon"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Socials',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
i {
  font-size: 30px;
}

.media {
  padding-top: 5px;
  text-align: center;
}

.media>a {
  padding: 10px;
  background: white;
  border-color: white;
}
</style>
