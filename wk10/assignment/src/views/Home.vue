<script setup>
import SightingsList from "../data/sightings.json";
import SightingRow from "../components/SightingRow.vue";
</script>

<template>
  <div>
    <div class="title-container">
      <h1>Bird Sightings</h1>
    </div>
    <div class="row-container">
      <SightingRow
        v-for="(sighting, index) in SightingsList"
        :key="index"
        :sighting="sighting"
      />
    </div>
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
  width: 800px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
}
</style>
