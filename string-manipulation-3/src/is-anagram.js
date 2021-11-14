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
