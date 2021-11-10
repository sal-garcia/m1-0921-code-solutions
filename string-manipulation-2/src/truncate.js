/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}
// define function
// splice string from 0 to length
// concatinate the ...
