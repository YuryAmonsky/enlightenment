function handleBurgerClick() {
  document.querySelector('.burger-container')
    .classList.add('burger-container_opened');
  document.querySelector('.burger-menu')
    .classList.add('burger-menu_opened');
}

function handleCloseButtonClick() {
  document.querySelector('.burger-menu')
    .classList.remove('burger-menu_opened');
  document.querySelector('.burger-container')
    .classList.remove('burger-container_opened');
}