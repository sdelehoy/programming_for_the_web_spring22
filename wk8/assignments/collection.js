Vue.createApp({
  data() {
    return {
      sightings: [
        {
          bird: 'Cedar Waxwing',
          location: 'Dixon Reservoir',
          date: '2018-08-24',
          time: '13:00',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cedar_Waxwing_-_Bombycilla_cedrorum%2C_George_Washington%27s_Birthplace_National_Monument%2C_Colonial_Beach%2C_Virginia_%2839997434862%29.jpg/162px-Cedar_Waxwing_-_Bombycilla_cedrorum%2C_George_Washington%27s_Birthplace_National_Monument%2C_Colonial_Beach%2C_Virginia_%2839997434862%29.jpg',
          info: 'https://www.allaboutbirds.org/guide/Cedar_Waxwing'
        },
        {
          bird: 'Mourning Dove',
          location: 'Dixon Reservoir',
          date: '2018-09-07',
          time: '12:56',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mourning_Dove_2006.jpg/160px-Mourning_Dove_2006.jpg',
          info: 'https://www.allaboutbirds.org/guide/Mourning_Dove'
        },
        {
          bird: 'Blue Jay',
          location: 'Horsetooth Reservoir',
          date: '2018-09-14',
          time: '07:23',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blue_jay_in_PP_%2830960%29.jpg/176px-Blue_jay_in_PP_%2830960%29.jpg',
          info: 'https://www.allaboutbirds.org/guide/Blue_Jay'
        },
        {
          bird: 'Canyon Wren',
          location: 'Horsetooth Reservoir',
          date: '2018-09-14',
          time: '07:24',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Canyon_Wren.jpg/177px-Canyon_Wren.jpg',
          info: 'https://www.allaboutbirds.org/guide/Canyon_Wren'
        },
        {
          bird: 'Steller\'s Jay',
          location: 'Horsetooth Reservoir',
          date: '2018-11-17',
          time: '10:32',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Steller%27s_Jay_flagstaff_arizona.jpg/159px-Steller%27s_Jay_flagstaff_arizona.jpg',
          info: 'https://www.allaboutbirds.org/guide/Stellers_Jay'
        }
      ],
      newSightingObj: {
        bird: '',
        location: '',
        date: 'null',
        time: '',
        image: '',
        info: ''
      }
    }
  },
  methods: {
    addSighting() {
      this.newSightingObj.info = 'https://www.allaboutbirds.org/news/search/?q=' + this.newSightingObj.bird;
      this.sightings = this.sightings.concat(this.newSightingObj);
      this.newSightingObj = {
        bird: '',
        location: '',
        date: 'null',
        time: '',
        image: '',
        info: ''
      };
    },
    deleteSighting (item) {
      this.sightings = this.sightings.filter(sighting => {
        return sighting !== item;
      });
    }
  }
}).mount('#app')