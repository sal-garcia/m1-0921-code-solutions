/* exported isVowel */

function isVowel(char) {
  var bool = false;
  if (char === 'A' || char === 'a') {
    bool = true;
  } else if (char === 'E' || char === 'e') {
    bool = true;
  } else if (char === 'I' || char === 'i') {
    bool = true;
  } else if (char === 'O' || char === 'o') {
    bool = true;
  } else if (char === 'U' || char === 'u') {
    bool = true;
  }
  return bool;
}
// define function
// define a storage variable as false
// check if there is a lower cased or upper cased vowel with if else statements
// if there is add true to the variable
// return the variable
