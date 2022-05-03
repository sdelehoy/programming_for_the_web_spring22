<script setup>
import { useRoute } from "vue-router";
import CoWildernessList from "../data/co_wilderness.json";
const route = useRoute();
const wilderness = CoWildernessList.find((wilderness) => {
  return wilderness.name === route.params.name;
});
</script>

<template>
  <article>
    <header class="header">
      <img :src="wilderness.image" :alt="wilderness.name" />
      <div class="header__title">
        <h1>{{ wilderness.name }}</h1>
      </div>
    </header>
    <div class="content__container">
      <div>
        <section class="description">
          <div class="title__container">
            <h2>Description</h2>
          </div>
          <div class="description__container">
            <p>{{ wilderness.about }}</p>
          </div>
        </section>
        <section class="facts">
          <div class="title__container">
            <h2>Facts</h2>
          </div>
          <div class="facts__container">
            <p>Year designated: {{ wilderness.designated }}</p>
            <p>Total acres: {{ wilderness.acres }}</p>
            <p>Nearby towns: {{ wilderness.towns }}</p>
            <p>Permit: {{ wilderness.permit }}</p>
          </div>
        </section>
      </div>
      <div>
        <section class="map">
          <div class="title__container">
            <h2>Map</h2>
          </div>
          <div class="map__container">
            <iframe
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              :src="wilderness.map"
              title="Caltopo map"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<style scoped>
.content__container {
  background-color: var(--white);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  border-radius: 10px 10px 10px 10px;
  border-top: 10px solid var(--green);
}
.title__container {
  background-color: var(--green);
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: calc(10px + 3vw);
}
.title__container h2 {
  font-size: 1rem;
  letter-spacing: 0.05rem;
  color: var(--white);
}
.description__container,
.facts__container,
.map__container {
  padding: calc(10px + 2vw) calc(10px + 3vw);
  line-height: 1.5;
  font-size: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
}
.description__container p,
.facts__container p {
  margin: 0;
}
.facts__container p {
  margin-bottom: calc(5px + 1vw);
}
.facts__container p:last-child {
  margin-bottom: 0;
}
iframe {
  width: 100%;
  height: 400px;
  border: 0;
  border-radius: 10px;
}
</style>
