<script setup>
import NavBar from "../components/NavBar.vue";
import SightingList from "../data/sightings.json";
import { useRoute } from "vue-router";
const route = useRoute();
const paramId = route.params.id * 1;
const item = SightingList.find((item) => {
  return item.id === paramId;
});
</script>

<template>
  <div>
    <NavBar />
    <article>
      <div>
        <img :src="item.image" :alt="item.bird" />
      </div>
      <div>
        <a :href="item.info">
          <h1>{{ item.bird }}</h1>
        </a>
        <p><span class="label">Location:</span> {{ item.location }}</p>
        <p><span class="label">Date:</span> {{ item.date }}</p>
        <p><span class="label">Time:</span> {{ item.time }}</p>
        <p><span class="label">Notes:</span> {{ item.notes }}</p>
      </div>
    </article>
  </div>
</template>

<style scoped>
article {
  width: 600px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  gap: 30px;
  line-height: 1.4;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  box-shadow: 5px 10px 10px hsla(0, 0%, 0%, 0.2);
  font-size: 1.1rem;
}
a {
  color: hsl(108, 38%, 41%);
  transition: all 0.3s;
}
a:hover {
  text-decoration: none;
  color: hsl(108, 38%, 55%);
}
h1 {
  margin: 0;
}
.label {
  font-weight: bold;
}
</style>
