const games = [
  {
    title: 'The Settlers of Catan',
    type: 'board game',
    numberOfPlayers: 4,
    rating: 7,
    shortDescription: 'The Settlers of Catan is a multiplayer board game...Players take on the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources. Players gain victory points as their settlements grow; the first to reach a set number of victory points, typically 10, wins. -Wikipedia'
  },
  {
    title: 'Carcassonne',
    type: 'board game',
    numberOfPlayers: 5,
    rating: 8,
    shortDescription: 'Carcassonne is a tile-based German-style board game for two to five players...The game board is a medieval landscape built by the players as the game progresses. -Wikipedia'
  },
  {
    title: 'The Long Dark',
    type: 'video game',
    numberOfPlayers: 4,
    rating: 8,
    shortDescription:
  }
];
const num = window.prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about that game.');
window.alert('You selected ' + ' which is a ' + '. Up to ' + ' people can play. It is rated as ' + ' out of 10.' + );