<template>
  <div class="home">
    <div class="d-flex flex-column align-items-center">
      <h1>markspl</h1>
      <h5>markus palomäki</h5>
      <repositories />
      <hr>
      <socials :data="links"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Socials from '@/components/Socials.vue';
import Repositories from '@/components/Repositories.vue';

export default {
  name: 'SocialsLinks',
  components: {
    Socials,
    Repositories,
  },
  data() {
    return {
      links: [
        {
          id: 1,
          howerText: 'markspl',
          icon: 'fab fa-github',
          href: 'https://github.com/markspl/',
        },
        {
          id: 2,
          howerText: '@markuspalomaki',
          icon: 'fab fa-twitter',
          href: 'https://twitter.com/markuspalomaki',
        },
        {
          id: 3,
          howerText: 'in/markuspalomaki',
          icon: 'fab fa-linkedin',
          href: 'https://www.linkedin.com/in/markuspalomaki/',
        },
        {
          id: 4,
          howerText: 'Just kidding! 😉',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap');

.home {
  font-family: "Roboto Mono", monospace;

  animation: fadeIn ease 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
