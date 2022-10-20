const minElem = document.querySelector('#min');
const maxElem = document.querySelector('#max');
const resultScreenElem = document.querySelector('.result-screen');
const rangeScreenElem = document.querySelector('.range-screen');
const generateBtn = document.querySelector('.generate-btn');
const countElem = document.querySelector('#range');

const getRandomIntInclusive = () => {
  let min = minElem.value;
  let max = maxElem.value;
  min = Math.ceil(min);
  max = Math.floor(max);
  resultScreenElem.textContent =
    Math.floor(Math.random() * (max - min + 1)) + min;
};

const rangeRandomNumbers = () => {
  let min = minElem.value;
  let max = maxElem.value;
  min = Math.ceil(min);
  max = Math.floor(max);
  const arr = [];
  if (countElem.value === '0') return;
  for (let i = 0; i < countElem.value; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  rangeScreenElem.textContent = arr;
};
generateBtn.addEventListener('click', getRandomIntInclusive);
generateBtn.addEventListener('click', rangeRandomNumbers);
