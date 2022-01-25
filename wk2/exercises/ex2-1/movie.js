const myFavMovies = ['Dumb and Dumber', 'Lord of the Rings', 'Gran Torino', 'The Matrix', 'Ip Man'];
const yourFavMovie = window.prompt('What is your favorite movie?');
const ourFavMovies = myFavMovies.concat(yourFavMovie);
window.alert(ourFavMovies.toString());