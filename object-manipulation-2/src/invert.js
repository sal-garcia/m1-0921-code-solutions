/* exported invert */
function invert(source) {
  var storage = {};
  for (var key in source) { // pulling out object keys

    storage[source[key]] = key;
  }
  return storage;
}
// define the function
// define an object storage variable
// define a for in loop that goes thru all of the keys in source
// assign the key to the value and add that to the storage object
// return the storage variable
