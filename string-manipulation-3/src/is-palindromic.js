/* exported isPalindromic */
function isPalindromic(string) {
  var spaces = string.replaceAll(' ', ''); // the original string is left unchanged
  var bool = false;
  var backwards = [];
  for (var i = 0; i < spaces.length; i++) {
    backwards.unshift(spaces[i]);

  } if (backwards.join('') === spaces) {
    bool = true;
  }

  return bool;
}
