Vue.createApp({
  data() {
    return {
      wikiLlama: 'https://en.wikipedia.org/wiki/Llama',
      llamaTitle: 'Wikipedia article on llamas',
      wikiAlpaca: 'https://en.wikipedia.org/wiki/Alpaca',
      alpacaTitle: 'Wikipedia article on alpacas',
      britannica: 'https://www.britannica.com/story/whats-the-difference-between-llamas-and-alpacas',
      britannicaTitle: 'What\'s the Difference Between Llamas and Alpacas',
      newWindow: '_blank',
      security: 'noopener noreferrer',
      textOnBackground: {
        color: 'hsl(0, 0%, 100%)',
        'text-shadow': '0px 0px 25px hsla(0, 0%, 0%, 0.2)'
      },
      darkModeOn: false
    }
  }
}).mount('#app')