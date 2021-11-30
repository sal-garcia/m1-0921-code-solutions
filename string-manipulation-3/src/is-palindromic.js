/* exported isPalindromic */
function isPalindromic(string) {
  var spaces = string.replaceAll(' ', ''); // the original string is left unchanged
  var bool = false;
  var backwards = [];
  for (var i = 0; i < spaces.length; i++) {
    backwards.unshift(spaces[i]);

  } if (backwards.join('') === spaces) {
    bool = true;
  }

  return bool;
}
// define function
// first you start by getting rid of all the spaces by using replaceAll
// then you define a storage variable for a false boolean
// then you define another storage variable for an array
// then you define a for loop that loops thru all of the indexes of spaces since the string
// has no spaces because it was modified
// in the code block of that for loop you will unshift each element into the storage array.
// then you will define an if statement checking if the content of that array turned into a string
// by using join('') is the same as the variable in which you copied the parameter minus the spaces
// if it is assign true to the bool variable that is storing a false boolean
// finally return the bool variable
