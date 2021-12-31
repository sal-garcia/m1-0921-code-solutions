/* exported difference */
function difference(first, second) {
  var storageArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      storageArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      storageArray.push(second[j]);
    }
  }
  return storageArray;
}
// define the function
// define a storage variable and assign it an empty array
// loop from 0 thru the whole length of the first parameter
// check if the second parameter array does not includes the element at first[i]
// if it doesn't push the element at first[i] into the storage array
// loop from 0 to the length of the second parameter array
// check if it doens't include the element at second [j]
// if it doesnt push second[j] into the storagearray
// finally return the storage array
