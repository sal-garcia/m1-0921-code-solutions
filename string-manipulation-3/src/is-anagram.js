/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var firstStringNoSpace = firstString.replaceAll(' ', '');
  var secondStringNoSpace = secondString.replaceAll(' ', '');
  var lengthFirst = firstStringNoSpace.length;
  var lengthSecond = secondStringNoSpace.length;
  if (lengthFirst !== lengthSecond) {
    return false;
  }
  var stringOne = firstStringNoSpace.split('').sort().join('');
  var stringTwo = secondStringNoSpace.split('').sort().join('');
  if (stringOne === stringTwo) {
    return true;
  } else {
    return false;
  }
}
// define the function
// get rid of spaces in the first string parameter
// do the same for the secondString parameter
// assign the length of the firststring with no spaces to a variable
// do the same with the secondString parameter
// define an if statement checking if the length of the firstString
// is not equal to that of the secondString, if its not return false
// split the first string by character and then sort it by alpbaetical order
// and finally joins it with no spaces inbetween to make the array into a string
// it does the same with the secondString parameter
// defines another if condition checking if stringOne is equal to stringTwo
// if it is it returns true else if returns false
