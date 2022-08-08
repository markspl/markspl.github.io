<template>
  <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
    <router-view />
    <footer>
      <p>
        Check my nasty code from [<a href="https://github.com/markspl/markspl.github.io">here</a>]
        - Done with <a href="https://vuejs.org/" class="fab fa-vuejs" />
        + <a href="https://getbootstrap.com/" class="fab fa-bootstrap" />
      </p>
    </footer>
  </div>
</template>

<style>
body, html {
  height: 80%;
}

footer {
  width: 100%;
  bottom: 0;
  text-align: center;
}

footer, footer i {
  color: #aaa;
  font-size: 12px;
}

footer a:link, footer a:visited, footer a:hover, footer a:active {
  color: #999 !important;
  text-decoration: none;
}
</style>
