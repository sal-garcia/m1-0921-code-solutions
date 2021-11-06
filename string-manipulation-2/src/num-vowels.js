/* exported numVowels */
function numVowels(string) {
  var storage = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'a') {
      storage++;
    } if (string[i] === 'E' || string[i] === 'e') {
      storage++;
    } if (string[i] === 'I' || string[i] === 'i') {
      storage++;
    } if (string[i] === 'O' || string[i] === 'o') {
      storage++;
    } if (string[i] === 'U' || string[i] === 'u') {
      storage++;
    }
  }
  return storage;
}
// define the function
// loop thru each index in the string parameter
// check if each index is equal to a capitalized or lower cased vowel
// increment if it does have a vowel
// return that  storage variable
