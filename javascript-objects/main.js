var student = {
  firstName: 'sal',
  lastName: 'garcia',
  age: 21
};

var fullName = student.firstName + student.lastName;
console.log('fullName', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'student';
console.log('livesInIrvine', student.livesInIrvine);
console.log('previousOccupation', student.previousOccupation);

var vehicle = {
  make: 'volkswagen',
  model: 'type 2',
  year: 1980
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = false;
console.log('vehicle color', vehicle['color']);
console.log('is convertible', ['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'rudy',
  type: 'dog'
};
delete pet['name'];
delete pet.type;
console.log('pet', pet);
