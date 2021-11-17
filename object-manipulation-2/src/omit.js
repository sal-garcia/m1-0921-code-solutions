/* exported omit */
function omit(source, keys) {
  var storage = {};
  for (var property in source) {
    if (keys.indexOf(property) === -1) {
      storage[property] = source[property];
    }
  }
  return storage;
}

// define the function
// define a storage variable and assign it an object
// define a for in loop that goes thru all of the properties in the
// object source
// check if the element is found in any of the indexes
// if its not assign the source object at [property] to storage
// [property]
// return the storage variable
