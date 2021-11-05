/* exported getKeys */
function getKeys(object) {
  var array = [];
  for (var property in object) {
    array.push(property);
  }
  return array;
}
// define the function
// define a storage array variable
// use a for in loop to loop thru each property in the object
// push each property into the array storage variable
// return that array storage variable
