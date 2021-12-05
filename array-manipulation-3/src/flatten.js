/* exported flatten */
function flatten(array) {
  var arrayStorage = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      arrayStorage = arrayStorage.concat(array[i]);
    } else {
      arrayStorage.push(array[i]);
    }
  }
  return arrayStorage;
}
// define the function
// define a stoarage variable and assign an empty array
// define a for loop that goes thru the length of the array
// first check that the Array prototype is array at [i]
// if it is inside of the code block concat the array storage variable with the arrays at [i]
// to merge them together
// else simply push the element at array[i] to the arrayStorage
// and finally return that storageArray
