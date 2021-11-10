var counter = 0;
var $circle = document.querySelector('.circle');
var $background = document.querySelector('body');

$circle.addEventListener('click', lightbulb);

function lightbulb(e) {
  counter++;
  if (counter % 2 === 1) {
    $circle.classList.add('black');
    $background.classList.add('black-background');
  } if (counter % 2 === 0) {
    $circle.classList.remove('black');
    $background.classList.remove('black-background');

  }
}
