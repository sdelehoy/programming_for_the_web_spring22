<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav class="nav">
      <div class="nav__container">
        <RouterLink to="/">ExploreOutdoor</RouterLink>
      </div>
    </nav>
    <main>
      <div class="main__container">
        <RouterView />
      </div>
    </main>
    <footer class="footer">
      <div class="footer__container">
        <p>2022 ExploreOutdoor.</p>
        <p>Get out more!</p>
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
.nav__container,
.main__container,
.footer__container {
  margin: auto;
  padding: 0 calc(5px + 3vw);
  max-width: 1250px;
}
/* nav and footer */
.nav,
.footer {
  background-color: var(--white);
}
.nav__container,
.footer__container {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 75px;
}
.nav__container a {
  font-weight: bold;
  color: var(--green);
  text-decoration: none;
}
.footer {
  color: var(--green);
  margin-top: calc(5px + 2vw);
}
/* main */
.header {
  margin-bottom: calc(5px + 2vw);
  height: calc(175px + 5vw);
  position: relative;
}
.header img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0 0 10px 10px;
}
.header__title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
h1 {
  color: var(--white);
  font-size: clamp(1rem, 0.6rem + 2vw, 3rem);
  letter-spacing: 0.1rem;
  text-align: center;
  text-shadow: 0 0 10px hsla(0, 0%, 0%, 1);
}
</style>
