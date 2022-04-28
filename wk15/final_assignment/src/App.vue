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
  </div>
</template>

<style>
:root {
  --color-main-bg: hsl(0, 0%, 95%);
  --color-nav-bg: hsl(0, 0%, 100%);
}
body {
  margin: 0;
  background-color: var(--color-main-bg);
  font-family: sans-serif;
}
.nav__container {
  background-color: var(--color-nav-bg);
}
.nav {
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 1250px;
  margin: auto;
}
.nav a {
  font-weight: bold;
  color: green;
  text-decoration: none;
}
</style>
