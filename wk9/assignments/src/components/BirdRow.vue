<script setup></script>

<template>
  <tr>
    <td>
      <img :src="sighting.image" :alt="sighting.bird" v-if="sighting.image" />
    </td>
    <td>
      <a class="bird" :href="sighting.info">{{ sighting.bird }}</a>
    </td>
    <td>{{ sighting.location }}</td>
    <td>{{ sighting.date }}</td>
    <td>{{ sighting.time }}</td>
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

<style scoped></style>
