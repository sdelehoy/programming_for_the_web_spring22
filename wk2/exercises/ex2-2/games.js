const games = [
  {
    title: 'The Settlers of Catan',
    type: 'board game',
    numberOfPlayers: '2-4',
    rating: 7,
    shortDescription: 'In The Settlers of Catan players attempt to build settlements and collect resources.'
  },
  {
    title: 'Carcassonne',
    type: 'board game',
    numberOfPlayers: '2-5',
    rating: 8,
    shortDescription: 'In Carcassonne the game board is a medieval landscape built by the players as the game progresses.'
  },
  {
    title: 'Apples to Apples',
    type: 'card game',
    numberOfPlayers: '4-10',
    rating: 8,
    shortDescription: 'In Apples to Apples each player lays down a card with an noun they think the judge will determine best matches the adjective on the card the judge has laid down.'
  },
  {
    title: 'Hide and Seek',
    type: 'activity game',
    numberOfPlayers: 'unlimited',
    rating: 8,
    shortDescription: 'In Hide and Seek one person hides and the other players try to find that person.'
  },
  {
    title: 'Capture the Flag',
    type: 'activity game',
    numberOfPlayers: 'unlimited',
    rating: 7,
    shortDescription: 'In Capture the Flag players are divided into two teams. Each team gets a territory in which they place their flag and defend it from being taken.'
  }
];

const response = window.prompt('I have 5 games in my collection. Pick a number between 1 and 5 and I will tell you about that game.');

const arrIndex = Number(response) - 1;

window.alert('You selected ' + games[arrIndex].title + ' which is a ' + games[arrIndex].type + '. This game is for ' + games[arrIndex].numberOfPlayers + ' players. I rate it as ' + games[arrIndex].rating + ' out of 10. ' + games[arrIndex].shortDescription);