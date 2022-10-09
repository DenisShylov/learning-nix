const btnElem = document.querySelectorAll('.calculator-item__group-btn');
const screenElem = document.querySelector('.calculator-item__screen-number');

let firstNumber = '';
let secondNumber = '';
let symbol = '';
function Calc(initValue) {
  let result = initValue;
  const calculator = {
    add(value) {
      result += value;
      return this;
    },

    subtract(value) {
      result -= value;
      return this;
    },

    mult(value) {
      result *= value;
      return this;
    },

    div(value) {
      result /= value;
      return this;
    },
    result() {
      return result;
    },
  };
  return calculator;
}
const listenerBtn = (e) => {
  if (!btnElem) return;
  // button Clear All
  if (e.target.textContent === 'AC') {
    firstNumber = '';
    screenElem.textContent = 0;
  } else if (e.target.textContent === '+/-') {
    firstNumber = e.target.textContent;
    screenElem.textContent = -screenElem.textContent;
  } else if (e.target.textContent === '%') {
    screenElem.textContent = screenElem.textContent / 100;
  } else if (e.target.textContent === '/') {
    screenElem.textContent = e.target.textContent;
  } else if (e.target.textContent === '*') {
    screenElem.textContent = e.target.textContent;
  } else if (e.target.textContent === '-') {
    screenElem.textContent = e.target.textContent;
  } else if (e.target.textContent === '+') {
    screenElem.textContent = e.target.textContent;
  } else if (e.target.textContent === '=') {
    screenElem.textContent = Calc(firstNumber).add(secondNumber).result();
  }
  if (e.target.classList.contains('grey-row')) {
    symbol = e.target.textContent;
    // screenElem.textContent = symbol;
  } else if (e.target.classList.contains('black-row')) {
    firstNumber += e.target.textContent;
    if (secondNumber === '' && symbol === '') {
      firstNumber += e.target.textContent;
      screenElem.textContent = firstNumber;
    } else if (firstNumber !== '' && symbol !== '') {
      secondNumber += e.target.textContent;
      screenElem.textContent = secondNumber;
    }
  }
};

// btnElem.addEventListener('click', listenerBtn);
[...btnElem].map((el) => el.addEventListener('click', listenerBtn));
