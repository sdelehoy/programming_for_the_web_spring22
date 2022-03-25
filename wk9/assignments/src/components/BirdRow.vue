<script setup>
const props = defineProps(["sighting"]);
</script>

<template>
  <tr :class="{ odd: index % 2 === 0 }">
    <td>
      <img
        :src="props.sighting.image"
        :alt="props.sighting.bird"
        v-if="props.sighting.image"
      />
    </td>
    <td>
      <a class="bird" :href="props.sighting.info">{{ props.sighting.bird }}</a>
    </td>
    <td>{{ props.sighting.location }}</td>
    <td>{{ props.sighting.date }}</td>
    <td>{{ props.sighting.time }}</td>
    <td>
      <button
        type="button"
        class="table__button"
        @click="deleteSighting(sighting)"
      >
        Delete
      </button>
    </td>
  </tr>
</template>

<style scoped>
form__button,
.table__button {
  background-color: hsl(0 0% 20%);
  color: hsl(0, 0%, 100%);
  font-size: 1rem;
  font-weight: lighter;
  letter-spacing: 0.07rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
}
button:hover {
  background-color: hsl(0 0% 40%);
  transform: scale(0.95);
}
button[type="submit"]:disabled {
  background-color: hsl(0 0% 80%);
  color: hsl(0 0% 60%);
  transform: none;
}
tr,
td {
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
}
td {
  padding: 15px;
  padding-right: 40px;
  font-size: 1.3rem;
  font-weight: lighter;
}
img {
  width: 150px;
}
.bird {
  font-weight: bold;
  color: hsl(108, 38%, 41%);
  text-transform: capitalize;
}
</style>
