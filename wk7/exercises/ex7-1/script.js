Vue.createApp({
  data() {
    return {
      wikiLlama: 'https://en.wikipedia.org/wiki/Llama',
      llamaTitle: 'Wikipedia article on llamas',
      wikiAlpaca: 'https://en.wikipedia.org/wiki/Alpaca',
      alpacaTitle: 'Wikipedia article on alpacas',
      britannica: 'https://www.britannica.com/story/whats-the-difference-between-llamas-and-alpacas',
      britannicaTitle: 'What\'s the Difference Between Llamas and Alpacas'
    }
  }
}).mount('#app')