/* exported reverseWord */
function reverseWord(word) {
  var string = '';
  for (var i = word.length - 1; i >= 0; i--) {
    string += word[i];
  }
  return string;
}
// define the function
// define a storage variable with the value of strings
// define a for loop that starts on the second to last index and checks if the value of that index
// is greater or equal to zero
// if it is add the element of that index to the string variable
// and then increment
// lastly return the variable string
