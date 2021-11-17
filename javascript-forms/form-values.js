var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', formFunc);

function formFunc(event) {
  event.preventDefault();
  var $userName = document.getElementById('user-name').value;
  var $userEmail = document.forms[0].email.value;
  var $userMessage = document.forms[0].message.value;
  var obj = { $userName, $userEmail, $userMessage };
  console.log(obj);
  $contactForm.reset();
}
