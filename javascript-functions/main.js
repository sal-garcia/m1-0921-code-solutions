function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log('minutes to seconds ', convertMinutesToSeconds(5));

function greet(name) {
  var hey = 'hey' + ' ' + name;
  return hey;
}
console.log('greet', greet('sal'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('getArea', getArea(5, 10));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('getFirstName', getFirstName({ firstName: 'sal', lastName: 'babaoey' }));

function getLastElement(array) {
  var lastElement = array.length - 1;
  return array[lastElement];
}
console.log('getLastElement', getLastElement(['not', 'this']));
