var $span = document.querySelectorAll('span');
var indexCount = 0;
document.addEventListener('keydown', characters);

function characters(event) {

  if ($span.length <= indexCount) {

    return null;
  }

  if ($span[indexCount].textContent === event.key) {
    $span[indexCount].classList.add('green');
    $span[indexCount].classList.remove('black');
    $span[indexCount].classList.remove('red');
    $span[indexCount].classList.remove('bottomRed');
    indexCount++;

    if ($span.length === indexCount) {
      return null;
    }
    $span[indexCount].classList.add('black');

  } else {
    $span[indexCount].classList.add('red');
    $span[indexCount].classList.add('bottomRed');
  }
}
