<script setup>
import { RouterLink } from "vue-router";
import MusicList from "../data/music-list.json";
</script>

<template>
  <div class="song-container">
    <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
      <RouterLink :to="'/song/' + song.slug">
        <img :src="song.cover" :alt="song.title" />
        <p>{{ song.title }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.song-container {
  max-width: 800px;
  margin: 40px auto;
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.song-list-item {
  width: auto;
  padding: 10px;
  border-radius: 7px;
  background-color: hsla(193, 98%, 32%, 0.7);
  text-align: center;
  transition: all 0.4s;
  box-shadow: 4px 4px 5px hsla(0, 0%, 0%, 0.7);
}
.song-list-item:hover {
  background-color: hsl(0, 0%, 80%);
  transform: scale(1.07);
  box-shadow: 4px 4px 10px hsla(0, 0%, 0%, 0.7);
}
.song-list-item a {
  color: hsl(0, 0%, 80%);
  font-size: 1.2rem;
  font-weight: bold;
}
.song-list-item:hover a {
  color: hsl(193, 98%, 32%);
}
.song-list-item img {
  box-shadow: 3px 3px 3px hsla(0, 0%, 0%, 0.3);
}
</style>
