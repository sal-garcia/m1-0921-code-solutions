/* exported union */
function union(first, second) {
  var storageArray = [];
  for (var i = 0; i < first.length; i++) {
    if (storageArray.includes(first[i]) === false) {
      storageArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (storageArray.includes(second[j]) === false) {
      storageArray.push(second[j]);
    }
  }
  return storageArray;
}
// define the union function
// define a storage array variable and assign it an empty array
// loop from 0 to the length of the first array parameter
// and check if the storage array does not include the element [i] at the first array parameter
// if it doesnt push the element [i] at the first array parameter into the storage array
// loop thru the length of the second array parameter
// and do the same finally return the storage array
