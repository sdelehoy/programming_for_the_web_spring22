<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  height: 50px;
  background-color: hsl(0, 0%, 20%);
  text-align: center;
}
nav a {
  color: hsl(0, 0%, 90%);
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 0.2ch;
  line-height: 3;
  padding: 15px;
  text-decoration: none;
  transition: all 0.3s;
}
nav a:hover {
  color: hsl(108, 38%, 41%);
}
</style>
