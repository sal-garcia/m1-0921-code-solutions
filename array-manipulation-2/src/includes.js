/* exported includes */
function includes(array, count) {
  var bool = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === count) {
      bool = true;
    }
  }
  return bool;
}

// define function
// define a storage variable bool with the value of false
// define a for loop with the initialization assigned to 0
// and the condition checking if 0 is less than the length of the
// array increment
// in the for loop code block define an if statement
// checking if array[i] is equal to the parameter "count"
// assign true to the bool
// after that just return the storage variable
