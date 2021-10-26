var numOne = 1;
var nunTwo = 2;
var numThree = 3;
var maximumValue = Math.max(numOne, nunTwo, numThree);
console.log('maximumValue', maximumValue);
var heroes = ['superman', 'spiderman', 'greenlantern', 'batman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

var library = [
  {
    title: 'it',
    author: 'stephen king'
  },
  {
    title: 1984,
    author: 'george orwell'
  },
  {
    title: 'the lorax',
    author: 'dr seus'
  }
];
var lastBook = library.pop();
console.log('last book', lastBook);
var firstBook = library.shift();
console.log('first book', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library', library);

var fullName = 'sal garcia';
var firstAndLastName = fullName.split(' ');
console.log('first and last name', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('say my name', sayMyName);
