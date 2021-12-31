/* exported unique */
function unique(array) {
  var storageArray = [];
  for (var i = 0; i < array.length; i++) {
    if (storageArray.includes(array[i]) === false) {
      storageArray.push(array[i]);
    }
  }
  return storageArray;
}
// define a variable for a storage array and assign it an empty array
// define  a for loop that loops  from 0 to the total length of the array
// check if the storage array does not includes the array element at [i]
// if it is false push that element at array[i] to the storage array variable
// finally just return the storage variable
