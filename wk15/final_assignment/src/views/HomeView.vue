<script setup>
import CoWildernessList from "../data/co_wilderness.json";
</script>

<template>
  <div>
    <div v-for="(wilderness, index) in CoWildernessList" :key="index">
      <RouterLink :to="'/wilderness/' + wilderness.name">
        <div>
          <img :src="wilderness.image" :alt="wilderness.name" />
          <p>{{ wilderness.name }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
