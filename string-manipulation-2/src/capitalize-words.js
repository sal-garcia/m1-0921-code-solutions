/* exported capitalizeWords */
function capitalizeWords(string) {
  var splittingString = string.split(' ');
  for (var i = 0; i < splittingString.length; i++) {
    splittingString[i] = splittingString[i][0].toUpperCase() + splittingString[i].slice(1, i.length).toLowerCase();
  }
  return splittingString.join(' ');
}
// define function
// split the string at the spaces
// loop thru each index in the returned array from using split
// capitalize each element in the array ar index 0
// concatinate that with the rest of the indexes in the element i except for the first
// and lower case the rest
// finally return the container variable
// and add .join(' ') to turn the array into a variable but with a space
// enbetween each character
