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

<style>
html {
  font-size: 1rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: hsl(0, 0%, 80%);
  background-color: hsl(0, 0%, 15%);
}
body {
  margin: 0;
}
nav {
  width: 100%;
  height: 50px;
  background-color: hsl(34, 93%, 41%);
  text-align: center;
}
nav a,
nav a:hover,
nav a:link,
nav a:active,
nav a:visited {
  color: hsl(0, 0%, 90%);
  font-size: 1.5rem;
  text-decoration: none;
  line-height: 2;
  padding: 10px 50px;
}
nav a.router-link-active {
  text-decoration: underline;
  color: hsl(283, 90%, 32%);
}
.container h1 {
  text-align: center;
  font-size: 3rem;
}
.container p {
  font-size: 1.2rem;
  line-height: 1.7;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
}
.container img {
  display: block;
  width: 100%;
  margin: 20px auto;
  border-radius: 100px 0;
}
</style>
