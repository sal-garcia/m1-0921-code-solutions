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
