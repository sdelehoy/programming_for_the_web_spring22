const myFavMovies = ['Dumb and Dumber', 'Lord of the Rings', 'Gran Torino'];
const yourFavMovie = window.prompt('What is your favorite movie?');
myFavMovies.push(yourFavMovie);
window.alert(myFavMovies.toString());