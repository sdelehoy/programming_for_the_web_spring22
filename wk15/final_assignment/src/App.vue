<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <div class="nav__container">
      <nav class="nav">
        <RouterLink to="/">ExploreOutdoor</RouterLink>
      </nav>
    </div>
    <RouterView />
    <footer class="footer">
      <div class="footer__container">
        <p>2022 ExploreOutdoor</p>
      </div>
    </footer>
  </div>
</template>

<style>
:root {
  --white: hsl(0, 0%, 100%);
  --gray: hsl(0, 0%, 95%);
  --green: hsl(94, 24%, 40%);
}
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  background-color: var(--gray);
  font-family: sans-serif;
}
h1 {
  color: var(--white);
  letter-spacing: 0.1rem;
  text-shadow: 0 0 10px hsla(0, 0%, 0%, 1);
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.nav__container {
  background-color: var(--white);
}
.nav {
  display: flex;
  align-items: center;
  height: 75px;
  max-width: 1250px;
  margin: auto;
}
.nav a {
  font-weight: bold;
  color: var(--green);
  text-decoration: none;
}
.header {
  height: 300px;
  max-width: 1250px;
  margin: 0 auto 40px auto;
  position: relative;
}
.header img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0 0 10px 10px;
}
.footer {
  background-color: var(--green);
  color: var(--white);
  margin-top: 40px;
}
.footer__container {
  max-width: 1250px;
  margin: auto;
  display: flex;
  height: 75px;
  align-items: center;

}
</style>
