<script setup>
import CoWildernessList from "../data/co_wilderness.json";
</script>

<template>
  <div>
    <header class="header">
      <img
        src="https://winapps.umt.edu/winapps/media2/wilderness/images/NWPS/lib/big/Jennifer-Stagner-Raggeds.tif"
        alt="Raggeds Wilderness"
      />
      <h1>Colorado Wilderness Areas</h1>
    </header>
    <main>
      <div class="list__container">
        <div
          class="list__item"
          v-for="(wilderness, index) in CoWildernessList"
          :key="index"
        >
          <RouterLink :to="'/wilderness/' + wilderness.name">
            <div class="list__item-image">
              <img :src="wilderness.image" :alt="wilderness.name" />
            </div>
            <div class="list__item-title">
              <h2>{{ wilderness.name }}</h2>
            </div>
          </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}
.list__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 225px;
  grid-column-gap: 25px;
  grid-row-gap: 40px;
  max-width: 1350px;
  margin: auto;
  padding: 0 50px 0 50px;
}
.list__item {
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}
.list__item:hover {
  filter: saturate(1.4);
  scale: 1.02;
}
.list__item-image {
  height: 150px;
}
.list__item-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
}
.list__item-title {
  height: 75px;
  background-color: var(--green);
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list__item-title h2 {
  color: var(--white);
  font-size: 1rem;
}
</style>
