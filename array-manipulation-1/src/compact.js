/* exported compact */
function compact(array) {
  var storage = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      storage.push(array[i]);
    }
  }
  return storage;
}
// define function
// define storage variable
// use a for loop to go thru all the indexes in the array
// checks that the element in the indexese is a truthy value
// returns the storage varibale
