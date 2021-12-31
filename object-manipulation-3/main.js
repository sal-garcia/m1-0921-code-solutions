console.log('Lodash is loaded:', typeof _ !== 'undefined');
// collection of four players
var players = [
  {
    name: 'paul',
    hand: []
  },
  {
    name: 'john',
    hand: []
  },
  {
    name: 'bob',
    hand: []
  },
  {
    name: 'fred',
    hand: []
  }
];
var suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

var deckArray = [];

// a loop that will Create the 52 card deck having the ranks index as the property
// and the suitsIndex as the value of the property which wont change until
// the loop goes thru all of the indexes in the ranks array
for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
  for (var rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
    deckArray.push({ rank: ranks[rankIndex], suit: suits[suitIndex] });
  }
}
// console.log(deckArray);

// Shuffle the deck of cards (array) using lodash
var shuffledArray = _.shuffle(deckArray);

// Insert two cards into each players hand
// by popping the last item in the shuffledArray(so that its random)and assigning it to a variable
// and then pushing that variable into the hand of the players at [playersIndex]
for (var playersIndex = 0; playersIndex < players.length; playersIndex++) {
  var cardOne = shuffledArray.pop();
  players[playersIndex].hand.push(cardOne);
  var cardTwo = shuffledArray.pop();
  players[playersIndex].hand.push(cardTwo);
}

// Keep track of the highest score and the winner
var highestScore = 0;
var winner = null;

// Determine the winner by summing up the scores of their two cards
for (var i = 0; i < players.length; i++) { // loop thru the players

  var scoreContainer = 0;
  var hand = players[i].hand;// is the value of the each players hand

  for (var j = 0; j < hand.length; j++) { // loops thru each value in hand
    var card = hand[j]; // the value of each card
    // Account for face cards (10 points) and aces (11 points)
    if (card.rank === 'Jack' || card.rank === 'Queen' || card.rank === 'King') {
      scoreContainer += 10;
    } else if (card.rank === 'Ace') {
      scoreContainer += 11;
    } else {
      scoreContainer += parseInt(card.rank);// makes string into an integer
    }
  }
  console.log(`score of ${players[i].name}   is: ${scoreContainer}`);// template literal notation

  // Determine winner and make sure to replace the highest with their score
  if (scoreContainer > highestScore) {
    highestScore = scoreContainer;
    winner = players[i];
  }
}

console.log(`winner is ${winner.name}`);// template literal notation
