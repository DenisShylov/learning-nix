function clear(elem) {
  const olElem = document.querySelector('ol');
  olElem.innerHTML = '';
}
const btnElem = document
  .querySelector('button')
  .addEventListener('click', clear);
