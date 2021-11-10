/* exported chunk */
function chunk(array, size) {
  var storage = [];
  for (var i = 0; i < array.length; i += size) {
    var chunk = array.slice(i, i + size);
    storage.push(chunk);
  }
  return storage;
}
