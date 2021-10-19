var width = 5;
var height = 2;

var area = width * height;
console.log('area', area);
console.log(typeof area);

var bill = 10;
var payment = 15;

var change = payment - bill;
console.log('change', change);
console.log(typeof change);

var quizzes = 1;
var midterm = 3;
var final = 2;

var grade = quizzes + midterm + final / 3;
console.log('grade', grade);
console.log(typeof grade);

var firstName = 'sal';
var lastName = 'garcia';

var fullName = firstName + ' ' + lastName;
console.log('fullname', fullName);
console.log(typeof fullName);

var pH = 5;
var isAcidic = pH < 7;
console.log('isAcidic', isAcidic);
console.log(typeof isAcidic);

var headCount = 5;
var isSparta = headCount === 300;
console.log('isSparta', isSparta);
console.log(typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';
console.log('motto', motto);
console.log(typeof motto);
