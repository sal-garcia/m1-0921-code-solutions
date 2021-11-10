/* exported ransomCase */
function ransomCase(string) {
  var storage = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      storage += string[i].toLowerCase();
    } else {
      storage += string[i].toUpperCase();
    }
  }
  return storage;
}

// define function
// loop thru each index
// check if the index is even or off
// if its even capitalize
// if its odd lowercase
