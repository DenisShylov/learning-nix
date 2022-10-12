const btnElem = document.querySelectorAll('.calculator-item__group-btn');
const screenElem = document.querySelector('.calculator-item__screen-number');

let firstNumber = '';
let secondNumber = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '/', 'X', '%', '+/-'];

const clear = () => {
  firstNumber = '';
  secondNumber = '';
  sign = '';
  finish = false;
  screenElem.textContent = 0;
};

const listenerBtn = (e) => {
  // Обнуляем переменные (очистка скрина)
  if (e.target.textContent === 'AC') {
    clear();
  }
  const key = e.target.textContent;

  // Заполняем переменные
  if (digit.includes(key)) {
    if (secondNumber === '' && sign === '') {
      firstNumber += key;
      screenElem.textContent = firstNumber;
    } else if (firstNumber !== '' && secondNumber !== '' && finish) {
      secondNumber = key;
      finish = false;
      screenElem.textContent = secondNumber;
    } else {
      secondNumber += key;
      screenElem.textContent = secondNumber;
    }
    return;
  }

  // Нажат знак
  if (action.includes(key)) {
    if (key === '+/-' || key === '%') {
      sign = key;
      screenElem.textContent = firstNumber;
    } else {
      sign = key;
      screenElem.textContent = sign;
    }
  }

  // Выполняем операции

  if (key === '=') {
    if (secondNumber === '') secondNumber = firstNumber;
    switch (sign) {
      case '+':
        firstNumber = +firstNumber + +secondNumber;
        break;
      case '-':
        firstNumber = +firstNumber - +secondNumber;
        break;
      case 'X':
        firstNumber = +firstNumber * +secondNumber;
        break;
      case '/':
        if (secondNumber === '0') {
          screenElem.textContent = 'Ошибка';
          firstNumber = '';
          secondNumber = '';
          sign = '';
          return;
        }
        firstNumber = +firstNumber / +secondNumber;
        break;
      case '%':
        firstNumber = +firstNumber / 100;
        break;
      case '+/-':
        firstNumber = -firstNumber;
    }
    finish = true;
    screenElem.textContent = firstNumber;
  }
};

[...btnElem].map((el) => el.addEventListener('click', listenerBtn));
