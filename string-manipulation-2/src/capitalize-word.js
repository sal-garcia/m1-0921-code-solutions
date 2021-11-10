/* exported capitalizeWord */
function capitalizeWord(word) {
  var storage = '';
  storage = word[0].toUpperCase() + word.slice(1).toLowerCase();

  if (storage === 'Javascript') {

    storage = 'JavaScript';

  }
  return storage;
}
// define function
// define a storage variable
// capitalize the character at index 0 of the word
// make sure that all other characters are lower cased
// after doing that to all check if there is a word that has been
// transformed into Javascript
// turn that word into JavaScript and assign it to the storage variable
// return the storage variable
