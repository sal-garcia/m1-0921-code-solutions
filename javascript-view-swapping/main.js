var $tabContainer = document.querySelector('.tab-container');
var $nodeListOfAllTabs = document.querySelectorAll('.tab');
var $nodeListOfAllView = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabFunc);

function tabFunc(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $nodeListOfAllTabs.length; i++) {
      if (event.target === $nodeListOfAllTabs[i]) {
        $nodeListOfAllTabs[i].classList.add('active');
      } else {
        $nodeListOfAllTabs[i].classList.remove('active');
      }
    }
    var $dataViewOfEventTarget = event.target.getAttribute('data-view');

    for (var j = 0; j < $nodeListOfAllView.length; j++) {
      if ($nodeListOfAllView[j].getAttribute('data-view') !== $dataViewOfEventTarget) {
        $nodeListOfAllView[j].classList.add('hidden');
      } else {
        $nodeListOfAllView[j].classList.remove('hidden');
      }
    }

  }
}
