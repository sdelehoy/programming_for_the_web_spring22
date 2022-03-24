<script setup>
import CamelidRow from "./components/CamelidRow.vue";
const camelids = [
  {
    id: 0,
    commonName: "Lama",
    binomialName: "Lama glama",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Lama",
    species: "L. glama",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/220px-Llama_lying_down.jpg",
  },
  {
    id: 1,
    commonName: "Alpaca",
    binomialName: "Vicugna pacos",
    order: "Artiodactyla",
    family: "Camelidae",
    genus: "Vicugna",
    species: "V. pacos",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Alpaca_%2831562329701%29.jpg/440px-Alpaca_%2831562329701%29.jpg",
  },
];
</script>

<template>
  <div>
    <h1>Camelids</h1>
    <div class="container">
      <CamelidRow
        v-for="animal in camelids"
        v-bind:key="animal.id"
        v-bind:camelid="animal"
      />
    </div>
  </div>
</template>

<style>
h1 {
  text-align: center;
  margin-top: 50px;
  text-transform: uppercase;
  letter-spacing: 0.6rem;
}
div {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
}
</style>
