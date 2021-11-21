var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskFunc);

function taskFunc(event) {
  console.log('event target', event.target);
  console.log('event target tagname', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
}
