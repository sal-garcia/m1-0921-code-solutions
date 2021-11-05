/* exported reverse */
function reverse(array) {
  var storage = [];
  for (var i = 0; i < array.length; i++) {
    storage.unshift(array[i]);
  }
  return storage;
}
// defines the function
// defines a storage variable
// loops thru all of the indexes in array
// unshifts the elements at the i index into the storage variable
// returns the storage variable
