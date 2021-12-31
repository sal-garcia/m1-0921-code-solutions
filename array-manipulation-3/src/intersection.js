/* exported intersection */
function intersection(first, second) {
  var storageArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      storageArray.push(first[i]);
    }
  }
  return storageArray;
}
// define the function
// define a storage variable and assign it an empty array value
// loop from 0 to the length of the whole first parameter array
// check if the second parameter array includes the element [i] from the first parameter array
// if it does push the [i] element from the first array into the storage array
// finally return the storage array
