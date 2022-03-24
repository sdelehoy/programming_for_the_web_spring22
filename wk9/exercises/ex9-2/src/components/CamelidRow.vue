<script setup>
const props = defineProps(["camelid"]);
</script>

<template>
  <div>
    <h2>{{ props.camelid.commonName }}</h2>
    <img :src="props.camelid.image" :alt="props.camelid.commonName" />
    <p>
      <span class="label">Binomial Name:</span> {{ props.camelid.binomialName }}
    </p>
    <p><span class="label">Order:</span> {{ props.camelid.order }}</p>
    <p><span class="label">Family:</span> {{ props.camelid.family }}</p>
    <p><span class="label">Genus:</span> {{ props.camelid.genus }}</p>
    <p><span class="label">Species:</span> {{ props.camelid.species }}</p>
  </div>
</template>

<style scoped>
img {
  max-width: 200px;
}
.label {
  font-weight: bold;
}
div {
  background-color: hsl(182, 94%, 87%);
  border-radius: 15px;
  width: 300px;
  padding: 20px;
  box-shadow: 3px 3px 10px hsla(0, 0%, 0%, 0.2);
}
</style>
