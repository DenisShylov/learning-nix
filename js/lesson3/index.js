// Task 1
// const obj = {};
// function isEmpty(obj) {
//   if (Object.keys(obj).length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEmpty(obj));

// Task 2
// const obj = {
//   1: '',
//   2: 123,
//   3: 5,
//   4: 'hi',
// };
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
//   console.log(obj);
// }
// multiplyNumeric(obj);

// Task 3

// function readNumber() {
//   let userNum;
//   while (true) {
//     userNum = prompt('Введите число');
//     if (isFinite(userNum)) {
//       break;
//     } else if (userNum === null || userNum === '') {
//       break;
//     }
//   }
//   if (userNum === null || userNum === '') {
//     return null;
//   }
//   return userNum;
// }
// console.log(readNumber());

// Task 4
// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }
// console.log(random(1, 5));

// Task 5
// function randomInteger(min, max) {
//   min = Math.ceil(min);
// max = Math.floor(max);
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInteger(1, 5));

// Task 6
// function ucFirst(str) {
//   let firstChar = str[0].toUpperCase();
//   let otherChar = str.substring(1).toLowerCase();
//   return `${firstChar}${otherChar}`;
// }

// console.log(ucFirst('friday'));

// Task 7
// function checkSpam(str) {
//   let newStr = str.toLowerCase();
//   return newStr.includes('viagra') || newStr.includes('xxx') ? true : false;
// }

// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx '));
// console.log(checkSpam('innocent rabbit'));

// Task 8
// function truncate(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
// }

// console.log(truncate('Ось що мені хотілося б сказати на цю тему:', 20)); //= "Ось що мені хотіло ..."
// console.log(truncate('Усім привіт!', 20)); //= "Усім привіт!"

// Task 9
// function extractCurrencyValue(str) {
//   return +str.substring(1);
// }
// alert(extractCurrencyValue('$120') === 120); // true

// Task 10
// function sumInput() {
//   const arr = [];

//   while (true) {
//     let request = prompt('Введите число');

//     if (request === '' || request === null || !isFinite(request)) break;

//     arr.push(+request);
//   }

//   let sum = 0;
//   for (let number of arr) {
//     sum += number;
//   }
//   return sum;
// }

// console.log(sumInput());

// Task 11
// function checkAge (age) {
// if (age > 18) {
// return true;
// } else {
// ...
// return confirm( ' Батьки дозволили ?');
// }
// }
// Чи буде ця функція працювати якось інакше, якщо прибрати else ?
// function checkAge (age) {
// if (age > 18) {
// return true;
// }
// ...
// return confirm( ' Батьки дозволили ?');
// }
// Чи є хоч одна відмінність у поведінці цього варіанту?
// Ф-ция будет работать так же , потому что у нас только одно условие, а значит если оно не выполнится, то в любом случае выведется то,
// что возвращает ф-ция

// Task  12

// function checkAge(age) {
//   return age > 18 ? true : confirm(' Батьки дозволили ?');
// }

// function checkAge(age) {
//   return age > 18 || confirm(' Батьки дозволили ?');
// }

// Task 13
// function min(a, b) {
//   if (a > b) return a;
//   return b;
// }

// console.log(min(3, 2));
// console.log(min(1, 5));

// Task 14
// function pow(x, n) {
//   let num = x;
//   for (let i = 1; i < n; i++) {
//     num *= x;
//   }
//   return num;
// }

// console.log(pow(2, 2));
// console.log(pow(2, 3));

// Task 15
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// console.log(
//   ask(
//     'Ви згодні?',
//     function () {
//       alert('Ви погодилися.');
//     },
//     function () {
//       alert('Ви скасували виконання.');
//     }
//   )
// );
// Стрелочная ф-ция
// const ask = (question, yes, no) => (confirm(question) ? yes() : no());

// Task 16
// function getMonth() {
//   const SALARY = 3333;
//   const SPENDING = 1750;
//   const PALM_PRICE = 8000;
//   const REST_OF_MONEY = SALARY - SPENDING;

//   return `${PALM_PRICE / REST_OF_MONEY} month `;
// }
// console.log(getMonth());

// Task 17

// function sumOfNegativeNumbers() {
//   let num = 0;
//   let sum = 0;
//   for (let i = 0; i < 10; i++) {
//     num = +prompt('Введите число');
//     if (num < 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// console.log(sumOfNegativeNumbers());
