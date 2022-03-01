Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!',
      wikiLlama: 'https://en.wikipedia.org/wiki/Llama',
      wikiAlpaca: 'https://en.wikipedia.org/wiki/Alpaca',
      britannica: 'https://www.britannica.com/story/whats-the-difference-between-llamas-and-alpacas'
    }
  }
}).mount('#app')