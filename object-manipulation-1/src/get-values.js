/* exported getValues */
function getValues(object) {
  var array = [];
  for (var property in object) {
    array.push(object[property]);
  }
  return array;
}
// define the function
// define a storage array variable
// define a for in loop to go thru each property in the object
// push the value of the object at property into the array
// return the array
