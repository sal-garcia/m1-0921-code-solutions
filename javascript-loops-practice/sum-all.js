/* exported sumAll */
function sumAll(number) {
  var num = 0;
  for (var i = 0; i < number.length; i++) {
    num += number[i];
  }
  return num;
}
