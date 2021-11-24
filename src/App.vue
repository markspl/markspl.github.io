<template>
  <router-view/>
  <footer>
    <p>
      Check my nasty code from [<a href="https://github.com/markspl/markspl.github.io">here</a>]
      - Done with <a href="https://vuejs.org/" class="fab fa-vuejs"/>
      + <a href="https://getbootstrap.com/" class="fab fa-bootstrap"/>
    </p>
  </footer>
</template>

<style>
body, html {
  height: 80%;
}

footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
}

footer, footer i {
  color: #ccc;
  font-size: 12px;
}

footer a:link, footer a:visited, footer a:hover, footer a:active {
  color: #aaa !important;
  text-decoration: none;
}
</style>
