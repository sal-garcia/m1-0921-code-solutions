/* exported initial */
function initial(array) {
  var storage = [];
  for (var i = 0; i < array.length - 1; i++) {
    storage.push(array[i]);
  }
  return storage;
}
// define the function
// define a storage variable
// define a for loop that goes thru each element in the index except for the last one
// pushes that element value into the storage variable
// returns the storage variable
