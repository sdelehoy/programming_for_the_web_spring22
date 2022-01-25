const games = [
  {
    title: 'The Settlers of Catan',
    type: 'board game',
    numberOfPlayers: 4,
    rating: 7,
    shortDescription: 'In The Settlers of Catan players attempt to build settlements and collect resources.'
  },
  {
    title: 'Carcassonne',
    type: 'board game',
    numberOfPlayers: 5,
    rating: 8,
    shortDescription: 'In Carcassonne the game board is a medieval landscape built by the players as the game progresses.'
  },
  {
    title: 'The Long Dark',
    type: 'video game',
    numberOfPlayers: 1,
    rating: 6,
    shortDescription: 'The Long Dark is a survival video game in an open world created with beautiful graphics. There is both a story mode as well as a survival mode.'
  }
];

const response = window.prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game.');

const arrNum = response - 1;

window.alert('You selected ' + games[arrNum].title + ' which is a ' + games[arrNum].type + '. Up to ' + games[arrNum].numberOfPlayers + ' people can play. It is rated as ' + games[arrNum].rating + ' out of 10. ' + games[arrNum].shortDescription);