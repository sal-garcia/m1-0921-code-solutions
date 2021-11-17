var $purpleButton = document.querySelector('.purple-button');
var $orangeButton = document.querySelector('.orange-button');
var $container = document.querySelector('.container');
var $modal = document.querySelector('.modal');
$purpleButton.addEventListener('click', purple);
$orangeButton.addEventListener('click', orange);

function purple(e) {
  $modal.classList.add('visible');
  $container.classList.add('shadow');
  $purpleButton.classList.add('button-shadow');

}

function orange(e) {
  $modal.classList.remove('visible');
  $container.classList.remove('shadow');
  $purpleButton.classList.remove('button-shadow');

}
