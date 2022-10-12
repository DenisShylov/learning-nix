const minElem = document.querySelector('#min');
const maxElem = document.querySelector('#max');
const resultScreenElem = document.querySelector('.result-screen');
const generateBtn = document.querySelector('.generate-btn');

const getRandomIntInclusive = () => {
  let min = minElem.value;
  let max = maxElem.value;
  min = Math.ceil(min);
  max = Math.floor(max);
  resultScreenElem.textContent =
    Math.floor(Math.random() * (max - min + 1)) + min;
};

generateBtn.addEventListener('click', getRandomIntInclusive);
