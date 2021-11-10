/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var splitCharacters = string.split('');
  var indexFirst = splitCharacters[firstIndex];
  var indexSecond = splitCharacters[secondIndex];
  splitCharacters[firstIndex] = indexSecond;
  splitCharacters[secondIndex] = indexFirst;
  return splitCharacters.join('');
}

// define the function
// split the string parameter into different characters
// assign each index to a variable
// assign that variable to the oppoiste character at index
// return the character with all the characters and join them
// using join.('')
