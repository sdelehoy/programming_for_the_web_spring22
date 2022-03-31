<script setup>
import SightingsList from "../data/sightings.json";
import SightingRow from "../components/SightingRow.vue";
</script>

<template>
  <div>
    <h1>Bird Sightings</h1>
    <SightingRow
      v-for="(sighting, index) in SightingsList"
      :key="index"
      :sighting="sighting"
    />
  </div>
</template>

<style scoped></style>
