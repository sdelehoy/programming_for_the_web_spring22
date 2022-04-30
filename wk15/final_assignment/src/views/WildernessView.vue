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
    <header class="header">
      <img :src="wilderness.image" :alt="wilderness.name" />
      <h1>{{ wilderness.name }}</h1>
    </header>
    <main>
      <div class="info__container">
        <div>
          <section>
            <div class="title__container">
              <h2>Description</h2>
            </div>
            <div class="description__container">
              <p>{{ wilderness.about }}</p>
            </div>
          </section>
          <section>
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
          <section>
            <div class="title__container">
              <h2>Map</h2>
            </div>
            <div class="map__container">
              <iframe
                width="400"
                height="400"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="wilderness.map"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
iframe {
  border: 0;
  border-radius: 10px;
}
.info__container {
  max-width: 1250px;
  margin: auto;
  background-color: var(--white);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  border-radius: 10px 10px 10px 10px;
  border-top: 10px solid var(--green);
}
@media (max-width: 1350px) {
  .info__container {
    margin: 0 50px;
  }
}
.title__container {
  background-color: var(--green);
  color: var(--white);
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 80px;
}
.title__container h2 {
  font-size: 1rem;
  letter-spacing: 0.05rem;
}
.description__container,
.facts__container,
.map__container {
  padding: 40px 80px 80px 80px;
  line-height: 1.5;
  font-size: 1.1rem;
}
.description__container p,
.facts__container p {
  margin: 0;
}
.facts__container p {
  margin-bottom: 30px;
}
.facts__container p:last-child {
  margin-bottom: 0;
}
</style>
