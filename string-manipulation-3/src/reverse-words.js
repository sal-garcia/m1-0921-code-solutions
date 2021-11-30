/* exported reverseWords */
function reverseWords(string) {
  var words = string.split(' ');
  var stringArray = [];
  for (var i = 0; i < words.length; i++) {

    stringArray.push(words[i].split('').reverse().join(''));
  }
  return stringArray.join(' ');
}

// define function
// then split the string at each word split(' ')
// define a storage variable and assigng it an array
// loop thru all of the indexes in the string parameter with a for loop
// in the for loops code block push each element at words[i] because words
// have been splitted by each space so it returns the whole word rather than a character
// if is did string[i]
// and also split each character of those words and reverse and finally join the characters
// to return a full word rather than an array and join all the words to return the sentence
// rather than an array of words
