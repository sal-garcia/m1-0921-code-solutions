/* exported tail */
function tail(array) {
  var storage = [];
  for (var i = 1; i < array.length; i++) {
    storage.push(array[i]);
  }
  return storage;
}
// define function
// define storage variable
// loops thru each index in the array starting from the 1 position
// pushes the value into the storage variable
// returns the storage variable
