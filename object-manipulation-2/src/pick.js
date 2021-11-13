/* exported pick */
function pick(source, keys) {
  var storage = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      storage[keys[i]] = source[keys[i]];
    }
  }
  return storage;
}

// define the function
// define a storage variable and set it equal to an empty object
// define a for loop that goes from 0 to the length of keys by one
// and a if statement that checks if the elements of source at key
// is not equal to undefined.
// assign the value of source at [key] to the storage at [key]
// finally return the variable storage
