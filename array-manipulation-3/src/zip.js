/* exported zip */
function zip(first, second) {
  var arrayStorage = [];

  var lengthFirst = first.length;
  var lengthSecond = second.length;
  var count = 0;
  if (lengthFirst < lengthSecond) {
    count = lengthFirst;
  } else {
    count = lengthSecond;
  }

  for (let i = 0; i < count; i++) {
    arrayStorage.push([first[i], second[i]]);
  }
  return arrayStorage;
}
// define function
// define an array storage variable
// find the length of the first parameter and save that in a variable
// do the same with the length of the "second" parameter
// define another storage variable for the count assign it 0
