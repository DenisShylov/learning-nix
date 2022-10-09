const sweetsElem = document.querySelector('.sweets');
const sweetsItemElem = document.querySelector('.sweets-item');

const showList = () => {
  if (!sweetsItemElem.style.display) {
    sweetsItemElem.style.display = 'block';
    sweetsElem.classList.add('sweets-show');
  } else {
    sweetsItemElem.style.display = '';
    sweetsElem.classList.remove('sweets-show');
  }
};

sweetsElem.addEventListener('click', showList);
