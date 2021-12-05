/* exported equal */
function equal(first, second) {
  var bool = true;
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      bool = false;
    }
  }

  if (first.length !== second.length) {
    bool = false;
  }
  return bool;
}

// define the function
// define a storage variable for a boolean and equal it to true
// define a for loop that loops thru all of the elements in the first parameter
// if the element of first at [i] is not equal to second at [i] set bool to false
// if the length of first is not equal to that of the "second" parameter
// set the bool to false
// finally return the bool
