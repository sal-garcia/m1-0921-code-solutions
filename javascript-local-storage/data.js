/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
window.addEventListener('beforeunload', windowFunc);
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

function windowFunc(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
