<template>
  <footer>
    <hr>
    <div class="container">
      <socials :data="links" />
      <p>
        Check my nasty code from [<a href="https://github.com/markspl/markspl.github.io">here</a>]
        - Done with <a href="https://vuejs.org/" class="fab fa-vuejs" />
        + <a href="https://getbootstrap.com/" class="fab fa-bootstrap" />
      </p>
    </div>
  </footer>
</template>

<script>
import Socials from '@/components/Socials.vue';

export default {
  name: 'SocialsLinks',
  components: {
    Socials,
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
      ],
    };
  },
};
</script>

<style scoped>
footer {
  bottom: 0;
  text-align: center;
}

footer,
footer i {
  color: #aaa;
  font-size: 12px;
}

footer a:link,
footer a:visited,
footer a:hover,
footer a:active {
  color: #999 !important;
  text-decoration: none;
}
</style>
