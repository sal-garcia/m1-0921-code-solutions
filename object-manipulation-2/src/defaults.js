/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!Object.keys(target).includes(key)) {
      target[key] = source[key];
    }
  }
}
// define the function
// define a for in loop that gets all of the keys in the object source
// define an if conditional statement that uses a prototype for objects
// to obtain the keys from target, and then compare them with the keys at source
// that have been passed into the for in loop.
