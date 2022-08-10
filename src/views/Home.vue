<template>
  <div class="home">
    <div class="d-flex flex-column align-items-center">
      <h1 class="fade">markspl</h1>
      <h5 class="fade">markus palomäki</h5>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

.home {
  font-family: "Roboto Mono", monospace;
}

a[id="4"] {
  background: url("../assets/tinder-icon.svg");
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 50px;
}

a[id="4"]:hover{
  background: white;
}

h1 {
  font-size: 60px !important;
}

h5 {
  font-size: 15px !important;
}

h1:after{
  content: "";
  background-color: transparent;
  color: black;
  width:0;
  display: inline-block;
  animation: blink 1s linear infinite alternate;
}

.fade{
  animation: fadeIn ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes blink{
  0%, 100% {
    content: "_";
  }
  50% {
    content: "";
  }
}
</style>
