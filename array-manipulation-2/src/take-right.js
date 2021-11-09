/* exported takeRight */
function takeRight(array, count) {
  var storage = [];

  for (var i = array.length - count; i <= array.length - 1; i++) {
    storage.push(array[i]);
    if (array.length === 0) {
      storage = [];
    }
  }
  return storage;
}

// define the function
// define a storage variable and assign it an empty array
// define a for loop with the initialization as the length of the
// array minus the count
// the condition checks if that is less or equal to the total
// length of the array minus 1
// and then you increments
