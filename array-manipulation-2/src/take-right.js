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
// and then you push whatever elmenet is at array[i] if the condition
// is true
// you keep incrementing by one and doing the same
// finally you check if theres a parameter of the array with
// the length of zero if true you pass an empty array
// then you just return the storage variable
