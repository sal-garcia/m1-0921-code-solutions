var books = [
  {
    title: 'Harry Potter',
    isbn: 23523453425
  },
  {
    title: 1984,
    isbn: 98762345
  },
  {
    title: 'The 1619 Project',
    isbn: 1234089
  }
];
console.log('type of ', typeof books); // starts off as js object
console.log('books', books);

console.log('json stringify ', JSON.stringify(books)); // is serialized into a json string
console.log('type of json stringify ', typeof JSON.stringify(books));

var student = '{ "name": "julius", "NumberId": 2345 }'; // starst in the format of a JSON string
console.log('type of studentObj  ', typeof student);
console.log('studentObj  ', student);

console.log('json parse ', JSON.parse(student)); // is deserialized into a js object
console.log('typeof ', typeof JSON.parse(student));
