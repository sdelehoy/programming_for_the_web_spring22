<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["sighting", "index"]);
</script>

<template>
  <section>
    <RouterLink :to="'/' + sighting.id">
      <div class="row-container">
        <div>
          <img :src="props.sighting.image" :alt="props.sighting.bird" />
        </div>
        <div class="cell-bird">{{ props.sighting.bird }}</div>
        <div class="cell-location">{{ props.sighting.location }}</div>
        <div class="cell-date">{{ props.sighting.date }}</div>
        <div class="cell-time">{{ props.sighting.time }}</div>
      </div>
    </RouterLink>
  </section>
</template>

<style scoped>
section {
  margin-bottom: 10px;
}
.row-container {
  display: flex;
  align-items: center;
  gap: 30px;
  color: hsl(0, 0%, 0%);
  font-size: 1.1rem;
  transition: all 0.3s;
}
.row-container:hover {
  filter: saturate(175%);
  scale: 1.02;
}
.row-container a {
  text-decoration: none;
}
img {
  width: 100px;
  display: block;
}
.cell-bird {
  font-weight: bold;
  font-size: 1.3rem;
  color: hsl(108, 38%, 41%);
  text-transform: capitalize;
}
.cell-bird,
.cell-location {
  width: 200px;
}
.cell-date,
.cell-time {
  width: 150px;
}
</style>
