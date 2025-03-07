function handleIstoggle(selector) {
  const toggleElement = document.querySelector(selector);
  if (!toggleElement.classList.contains('is-toggled')) {  
    toggleElement.classList.add('is-toggled');
  } else {
    toggleElement.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelectorAll('.js-button');
  if(previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}