/* exported findIndex */
function findIndex(array, values) {
  var index = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === values) {
      index = i;
      break;
    }
  }
  return index;
}
