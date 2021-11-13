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
// define a for in loop that goes thru all of the properties
// and assign the property
// to the storage object at the source object at the property
