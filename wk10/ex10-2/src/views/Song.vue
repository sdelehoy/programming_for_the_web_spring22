<script setup>
import { useRoute } from "vue-router";
import MusicList from "../data/music-list.json";
const route = useRoute();
const song = MusicList.find((song) => {
  return song.slug === route.params.slug;
});
</script>

<template>
  <div
    class="song-detail"
    :class="{
      rising: song.rank > song.position.positionLastWeek,
      falling: song.rank < song.position.positionLastWeek,
      same: song.rank === song.position.positionLastWeek,
    }"
  >
    <h1>{{ song.rank }}</h1>
    <img :src="song.cover" :alt="song.title" />
    <h2>{{ song.title }}</h2>
    <p>Artist: {{ song.artist }}</p>
    <p></p>
  </div>
</template>

<style scoped>
.song-detail {
  background-color: hsla(193, 98%, 32%, 0.7);
  max-width: 300px;
  margin: 40px auto;
  padding: 30px;
  color: hsl(0, 0%, 80%);
  text-align: center;
  font-size: 1.2rem;
  border-radius: 10px;
  box-shadow: 5px 5px 7px hsla(0, 0%, 0%, 0.7);
}
.song-detail.rising h1 {
  color: hsl(120, 88%, 35%);
}
.song-detail.falling h1 {
  color: hsl(0, 54%, 51%);
}
.song-detail.same h1 {
  color: hsl(52, 100%, 50%);
}
.song-detail img {
  box-shadow: 3px 3px 3px hsla(0, 0%, 0%, 0.3);
}
</style>
