<script setup>
import { reactive } from "vue";
import BirdRow from "./components/BirdRow.vue";
let sightings = [
  {
    bird: "Cedar Waxwing",
    location: "Dixon Reservoir",
    date: "2018-08-24",
    time: "13:00",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cedar_Waxwing_-_Bombycilla_cedrorum%2C_George_Washington%27s_Birthplace_National_Monument%2C_Colonial_Beach%2C_Virginia_%2839997434862%29.jpg/162px-Cedar_Waxwing_-_Bombycilla_cedrorum%2C_George_Washington%27s_Birthplace_National_Monument%2C_Colonial_Beach%2C_Virginia_%2839997434862%29.jpg",
    info: "https://www.allaboutbirds.org/guide/Cedar_Waxwing",
  },
  {
    bird: "Mourning Dove",
    location: "Dixon Reservoir",
    date: "2018-09-07",
    time: "12:56",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mourning_Dove_2006.jpg/160px-Mourning_Dove_2006.jpg",
    info: "https://www.allaboutbirds.org/guide/Mourning_Dove",
  },
  {
    bird: "Blue Jay",
    location: "Horsetooth Reservoir",
    date: "2018-09-14",
    time: "07:23",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blue_jay_in_PP_%2830960%29.jpg/176px-Blue_jay_in_PP_%2830960%29.jpg",
    info: "https://www.allaboutbirds.org/guide/Blue_Jay",
  },
  {
    bird: "Canyon Wren",
    location: "Horsetooth Reservoir",
    date: "2018-09-14",
    time: "07:24",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Canyon_Wren.jpg/177px-Canyon_Wren.jpg",
    info: "https://www.allaboutbirds.org/guide/Canyon_Wren",
  },
  {
    bird: "Steller's Jay",
    location: "Horsetooth Reservoir",
    date: "2018-11-17",
    time: "10:32",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Steller%27s_Jay_flagstaff_arizona.jpg/159px-Steller%27s_Jay_flagstaff_arizona.jpg",
    info: "https://www.allaboutbirds.org/guide/Stellers_Jay",
  },
];
let newSightingObj = {
  bird: "",
  location: "",
  date: "null",
  time: "",
  image: "",
  info: "",
};
const state = reactive({ sightings, newSightingObj });
function deleteSighting(item) {
  state.sightings = state.sightings.filter((sighting) => {
    return sighting !== item;
  });
}
function addSighting() {
  state.newSightingObj.info =
    "https://www.allaboutbirds.org/news/search/?q=" + state.newSightingObj.bird;
  state.sightings = state.sightings.concat(state.newSightingObj);
  state.newSightingObj = {
    bird: "",
    location: "",
    date: "",
    time: "",
    image: "",
    info: "",
  };
}
function isValid() {
  return (
    state.newSightingObj.bird &&
    state.newSightingObj.location &&
    state.newSightingObj.date &&
    state.newSightingObj.time
  );
}
</script>

<template>
  <div>
    <header class="header">
      <h1 class="header__title">Bird Sightings</h1>
    </header>
    <div class="outer-container">
      <div class="container">
        <form @submit.prevent="addSighting">
          <fieldset>
            <legend class="form__title">Add a Bird Sighting</legend>
            <div class="form__content">
              <div class="form__input">
                <label for="bird">Bird</label>
                <input
                  id="bird"
                  type="text"
                  placeholder="Northern Cardinal"
                  v-model="state.newSightingObj.bird"
                />
              </div>
              <div class="form__input">
                <label for="location">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Lakeside Park"
                  v-model="state.newSightingObj.location"
                />
              </div>
              <div class="form__input">
                <label for="date">Date</label>
                <input
                  id="date"
                  type="date"
                  v-model="state.newSightingObj.date"
                />
              </div>
              <div class="form__input">
                <label for="time">Time</label>
                <input
                  id="time"
                  type="time"
                  v-model="state.newSightingObj.time"
                />
              </div>
              <div class="form__input">
                <label for="image">Image</label>
                <input
                  id="image"
                  type="text"
                  placeholder="https://..."
                  v-model="state.newSightingObj.image"
                />
              </div>
            </div>
            <button type="submit" class="form__button" :disabled="!isValid()">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      <div class="container">
        <h2 class="table__title">Your Recorded Sightings</h2>
        <table>
          <thead>
            <th>Image</th>
            <th>Bird</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>Delete</th>
          </thead>
          <tbody>
            <BirdRow
              v-for="(sighting, index) in state.sightings"
              :key="index"
              :class="{ odd: index % 2 === 0 }"
              :sighting="sighting"
              @delete-row="deleteSighting"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: "Helvetica", "Arial", sans-serif;
  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  margin: 0;
}
.header {
  background-color: hsl(0 0% 20%);
  padding: 2.5%;
}
.header__title {
  text-align: center;
  font-size: 2.5rem;
  color: hsl(0, 0%, 100%);
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-weight: lighter;
  margin: 0;
}
.outer-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 3% auto;
}
.container {
  padding: 2%;
  box-shadow: 0px 7px 15px hsla(0 0% 0% / 0.4);
  border-radius: 20px;
  margin: auto;
  background-color: hsl(0, 0%, 100%);
}
fieldset {
  border: none;
}
.form__title {
  background-color: hsl(108, 38%, 41%);
  color: hsl(0, 0%, 100%);
  padding: 15px 30px;
  width: 100%;
}
.form__title,
.table__title {
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: lighter;
  text-align: center;
}
.form__content {
  display: flex;
  gap: 24px;
  margin: 20px 0;
}
label,
input[type="text"] {
  font-size: 1rem;
}
.form__button {
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
table,
thead,
tbody,
th,
tr,
td {
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
}
thead {
  background-color: hsl(108, 38%, 41%);
  color: hsl(0, 0%, 100%);
}
th {
  padding: 20px;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-align: left;
  font-weight: lighter;
}
td {
  padding: 15px;
  padding-right: 40px;
  font-size: 1.3rem;
  font-weight: lighter;
}
.odd {
  background-color: hsl(0, 0%, 95%);
}
</style>
