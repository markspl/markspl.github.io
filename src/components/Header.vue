<template>
  <header>
    <div class="d-flex flex-column align-items-center">
      <h1>markspl</h1>
      <h5>markus palomäki</h5>
    </div>
  </header>
</template>

<style>
header {
  font-family: "Roboto Mono", monospace !important;
}

h1 {
  font-size: 60px !important;
}

h5 {
  font-size: 15px !important;
}

h1:after {
  content: "";
  background-color: transparent;
  color: black;
  width: 0;
  display: inline-block;
  animation: blink 1s linear infinite alternate;
}

@keyframes blink {

  0%,
  100% {
    content: "_";
  }

  50% {
    content: "";
  }
}
</style>
