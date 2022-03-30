<script setup>
import { RouterLink } from "vue-router";
import MusicList from "../data/music-list.json";
</script>

<template>
  <div class="song-container">
    <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
      <RouterLink :to="'/song/' + song.slug">{{ song.title }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.song-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.song-list-item {
  width: auto;
  padding: 10px;
  margin: 10px;
  border: 1px solid hsl(0, 0%, 0%);
  border-radius: 4px;
  background-color: hsl(0, 0%, 100%);
}
.song-list-item:hover {
  background-color: hsl(0, 0%, 0%);
}
.song-list-item a {
  color: hsl(0, 0%, 0%);
}
.song-list-item:hover a {
  color: hsl(0, 0%, 100%);
}
</style>
