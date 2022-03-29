<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/alpaca">Alpaca</RouterLink>
      <RouterLink to="/llama">Llama</RouterLink>
    </nav>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style></style>
