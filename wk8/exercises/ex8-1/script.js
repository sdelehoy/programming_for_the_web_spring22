Vue.createApp({
  data() {
    return {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      selectedColors: [],
      colors: [
        { name: 'Beige', value: 'beige'},
        { name: 'Black - Bay', value: 'black-bay'},
        { name: 'Black - True', value: 'black-true'},
        { name: 'Brown - Light', value: 'brown-lt'},
        { name: 'Brown - Medium', value: 'brown-md'},
        { name: 'Brown - Dark', value: 'brown-dk'},
        { name: 'Fawn - Light', value: 'fawn-lt'},
        { name: 'Fawn - Medium', value: 'fawn-md'},
        { name: 'Fawn - Dark', value: 'fawn-dk'},
        { name: 'Rose Grey - Light', value: 'rose-grey-lt'},
        { name: 'Rose Grey - Medium', value: 'rose-grey-md'},
        { name: 'Rose Grey - Dark', value: 'rose-grey-dk'},
        { name: 'Silver Grey - Light', value: 'silver-grey-lt'},
        { name: 'Silver Grey - Medium', value: 'silver-grey-md'},
        { name: 'Silver Grey - Dark', value: 'silver-grey-dk'},
        { name: 'White', value: 'white'}
      ],
      status: ''
    }
  }
}).mount('#formApp')