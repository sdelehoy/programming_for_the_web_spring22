<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
body {
  margin: 0;
  background: hsl(196, 12%, 18%);
  font-family: Helvetica, Arial, sans-serif;
}
nav a {
  display: none;
}
</style>
