/* exported chunk */
function chunk(array, size) {
  var storage = [];
  var i = 0;
  while (i < array.length) {

    var arrayInsideArray = array.slice(i, i + size);
    storage.push(arrayInsideArray);
    i = i + size;
  }
  return storage;
}

// define function
// define a storage variable
// define a varible i with a value of 0
// define a while loop that checks that i is less than the
// total length of the array
// slice the array from i to i + size and assign it to a variable
// push that new variable into the storage variable
// that variable is pushed increment i by whatever parameter size is
// the whole thing repeats again but with i being the value of size
// so the new slice will happen from i which is the size value to i+size
// finally return that storage variable with all of the arrays
