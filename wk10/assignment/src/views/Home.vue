<script setup>
import SightingsList from "../data/sightings.json";
import SightingRow from "../components/SightingRow.vue";
</script>

<template>
  <div>
    <header class="title-container">
      <h1>Bird Sightings</h1>
    </header>
    <article class="row-container">
      <div class="label-container">
        <p class="label-image">Image</p>
        <p class="label-bird">Bird</p>
        <p class="label-location">Location</p>
        <p class="label-date">Date</p>
        <p class="label-time">Time</p>
      </div>
      <SightingRow
        v-for="(sighting, index) in SightingsList"
        :key="index"
        :sighting="sighting"
        :class="{
          odd: index % 2 === 0,
          last: SightingsList.length - index === 1,
        }"
      />
    </article>
  </div>
</template>

<style scoped>
.title-container {
  height: 80px;
  background-color: hsl(0, 0%, 20%);
  text-align: center;
}
.title-container h1 {
  margin: 0;
  line-height: 2.5;
  color: hsl(0, 0%, 90%);
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
}
.row-container {
  background-color: hsl(0, 0%, 100%);
  width: 850px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 5px 10px 10px hsla(0, 0%, 0%, 0.2);
}
.label-container {
  display: flex;
  gap: 30px;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  font-weight: lighter;
}
.label-image {
  width: 100px;
}
.label-bird,
.label-location {
  width: 200px;
}
.label-date,
.label-time {
  width: 150px;
}
.odd {
  background: hsl(0, 0%, 95%);
}
.last {
  margin-bottom: 0;
}
</style>
