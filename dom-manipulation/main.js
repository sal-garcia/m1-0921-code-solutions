var numberOfClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', incrementing);
function incrementing(event) {
  numberOfClicks++;
  $clickCount.textContent = numberOfClicks;
  if (numberOfClicks >= 4 && numberOfClicks < 7) {
    $hotButton.classList.add(' cool');
  } else if (numberOfClicks >= 7 && numberOfClicks < 10) {
    $hotButton.classList.remove('cool');
    $hotButton.classList.add('tepid');
  } else if (numberOfClicks >= 10 && numberOfClicks < 13) {
    $hotButton.classList.remove('tepid');
    $hotButton.classList.add('warm');
  } else if (numberOfClicks >= 13 && numberOfClicks < 16) {
    $hotButton.classList.remove('warm');
    $hotButton.classList.add('hot');
  } else if (numberOfClicks > 15) {
    $hotButton.classList.remove('hot');
    $hotButton.classList.remove('cold');
    $hotButton.classList.add('nuclear');
  }
}
