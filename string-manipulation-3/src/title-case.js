/* exported titleCase */
function titleCase(string) {
  var newString = '';
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    var currentWord = splitString[i].toLowerCase();
    var previousWord = splitString[i - 1];
    if (currentWord === 'api') {
      newString += 'API';
    } else if (currentWord.includes('javascript')) {
      if (currentWord.includes(':')) {
        newString += 'JavaScript:' + ' ';
      } else {
        newString += 'JavaScript' + ' ';
      }
    } else if (
      currentWord.length < 4 &&
      previousWord &&
      !previousWord.includes(':') &&
      currentWord !== 'web'
    ) {
      newString += currentWord.toLowerCase() + ' ';
    } else if (currentWord.includes('-')) {
      var hyphenWord = currentWord.split('-');
      for (var x = 0; x < hyphenWord.length; x++) {
        if (hyphenWord[x] !== hyphenWord[hyphenWord.length - 1]) {
          newString +=
            hyphenWord[x][0].toUpperCase() + hyphenWord[x].slice(1) + '-';
        } else {
          newString +=
            hyphenWord[x][0].toUpperCase() + hyphenWord[x].slice(1) + ' ';
        }
      }
    } else if (currentWord !== splitString[splitString.length - 1]) {
      newString += currentWord[0].toUpperCase() + currentWord.slice(1) + ' ';
    } else {
      newString += currentWord[0].toUpperCase() + currentWord.slice(1);
    }
  }
  return newString;
}
// first i define the function
// then a storage variable is created with a an emptry string called newstring
// then string is split into each character and it is stored into a variable
// then a for loop is defined from 0 to the splitsttring.length being incremented by one
// inside the code block you will lowercase each character at [i] and assign it to a new variable
// named currentWord
// and then after that you will subtract the index place at [i]-1 to get the element before each element
// and that will be assigned into a variable.
// then you will check if the currentword element is equal to "api" if it is it make new string
// += 'API'
// then you will check if it includes the string 'javscript with an else if condition
// and inside of that you will check if it the current word includes ':'
// if it does you will assign 'JavaScript:' plus a space to the newstring variable
// if it doesnt you will just assign 'JavaScript and a space to the same variable
// then you define another else if condition checking if the length of the currentword variable is
// less than 4 and previous word and not strictly equals to previous word with an ':'
// and current word is not stritly equals to 'web'
// if all that is met you will add to new string  each element capitalized with the first letter and sliced with the rest
// plus a space
// then you check if currentword variable inludes a -
// then youll split it at each - and assign that to a new variable
// else add the same except for the -
// add another conditional statement checking if currentword is not equals to splitstring
// at split string minus 1
// if its not then add currentword capitalized at 0 and sliced at 1 plus space to newstring
// then make another condition doing the same minus the space
// finally return newstring
