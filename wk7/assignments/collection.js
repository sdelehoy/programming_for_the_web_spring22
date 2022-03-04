Vue.createApp({
  data() {
    return {
      sightings: [
        {
          bird: 'Cedar Waxwing',
          location: 'Dixon Reservoir',
          date: 'August 24, 2018',
          time: '1:00 pm',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cedar_Waxwing_-_Bombycilla_cedrorum%2C_George_Washington%27s_Birthplace_National_Monument%2C_Colonial_Beach%2C_Virginia_%2839997434862%29.jpg/162px-Cedar_Waxwing_-_Bombycilla_cedrorum%2C_George_Washington%27s_Birthplace_National_Monument%2C_Colonial_Beach%2C_Virginia_%2839997434862%29.jpg'
        }, {
          bird: 'Mourning Dove',
          location: 'Dixon Reservoir',
          date: 'September 7, 2018',
          time: '12:56 pm',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mourning_Dove_2006.jpg/160px-Mourning_Dove_2006.jpg'
        }, {
          bird: 'Blue Jay',
          location: 'Horsetooth Reservoir',
          date: 'September 14, 2018',
          time: '7:23 am',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Blue_jay_in_PP_%2830960%29.jpg/176px-Blue_jay_in_PP_%2830960%29.jpg'
        }, {
          bird: 'Canyon Wren',
          location: 'Horsetooth Reservoir',
          date: 'September 14, 2018',
          time: '7:24 am',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Canyon_Wren.jpg/177px-Canyon_Wren.jpg'
        }, {
          bird: 'Steller\'s Jay',
          location: 'Horsetooth Reservoir',
          date: 'November 17, 2018',
          time: '10:32 am',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Steller%27s_Jay_flagstaff_arizona.jpg/159px-Steller%27s_Jay_flagstaff_arizona.jpg'
        }
      ]
    }
  }
}).mount('#app')