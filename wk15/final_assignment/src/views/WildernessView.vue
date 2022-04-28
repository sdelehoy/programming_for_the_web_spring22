<script setup>
import { useRoute } from "vue-router";
import CoWildernessList from "../data/co_wilderness.json";
const route = useRoute();
const wilderness = CoWildernessList.find((wilderness) => {
  return wilderness.name === route.params.name;
});
</script>

<template>
  <div>
    <header>
      <img :src="wilderness.image" :alt="wilderness.name" />
      <h1>{{ wilderness.name }}</h1>
    </header>
    <main>
      <section>
        <h2>Description</h2>
        <p>{{ wilderness.about }}</p>
      </section>
      <section>
        <h2>Facts</h2>
        <p>Year designated: {{ wilderness.designated }}</p>
        <p>Total acres: {{ wilderness.acres }}</p>
        <p>Permit: {{ wilderness.permit }}</p>
      </section>
      <section>
        <h2>Map</h2>
        <iframe
          width="400"
          height="400"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          :src="wilderness.map"
        ></iframe>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
