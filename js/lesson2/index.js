// Task 1

// let i = 3;
// while (i) {
//   alert(i--);
// }
// Этот код на последней итерации выведет 1, потому что 0 приведется к false

// Task 2

// let a = 4;
// let b = 4;
// let c = 3;
// if (a < b && b < c) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a = -a;
//   b = -b;
//   c = -c;
// }
// console.log('A: ' + a, 'B: ' + b, 'C: ' + c);

// Task 3

// let a = 3;
// let b = 2;
// let c = 1;
// if ((a < b && b < c) || (a > b && b > c)) {
//   a *= 2;
//   b *= 2;
//   c *= 2;
// } else {
//   a = -a;
//   b = -b;
//   c = -c;
// }
// console.log('A: ' + a, 'B: ' + b, 'C: ' + c);

// Task 4

// let a = -5;
// let b = 10;
// let c = 1;

// let distanceAC = Math.abs(a - c);
// let distanceAB = Math.abs(a - b);

// if (distanceAC > distanceAB) {
//   console.log(b, distanceAB);
// } else {
//   console.log(c, distanceAC);
// }

// Task 5
// let x = 1;
// let y = 0;
// if (x === 0 && y === 0) {
//   console.log(0);
// } else if (x === 0 && y !== 0) {
//   console.log(1);
// } else if (x !== 0 && y === 0) {
//   console.log(2);
// } else {
//   console.log(3);
// }

// Task 6
// let x = 1;
// let y = -2;

// if (x > 0 && y > 0) {
//   console.log(1);
// } else if (x < 0 && y > 0) {
//   console.log(2);
// } else if (x < 0 && y < 0) {
//   console.log(3);
// } else if (x > 0 && y < 0) {
//   console.log(4);
// }

// Task 7
// let x1 = -2;
// let y1 = -3;
// let x2 = -4;
// let y2 = -3;
// let x3 = 4;
// let y3 = 5;
// let x4;
// let y4;

// if (x1 === x2) {
//   x4 = x3;
// } else if (x1 === x3) {
//   x4 = x2;
// } else {
//   x4 = x1;
// }

// if (y1 === y2) {
//   y4 = y3;
// } else if (y1 === y3) {
//   y4 = y2;
// } else {
//   y4 = y1;
// }
// console.log(`x = ${x4}; y = ${y4}`);

// Task 8
// let year = 2004;
// if (year % 4 === 0 && year % 100 !== 0) {
//   console.log('Высокосный год');
// } else if (year % 400 === 0) {
//   console.log('Высокосный год');
// } else {
//   console.log('Не высокосный год');
// }

// Task 9

// let a = -2;
// if (a > 0 && a % 2 === 0) {
//   console.log('позитивное парное число');
// } else if (a > 0 && a % 2 !== 0) {
//   console.log('позитивное непарное число');
// } else if (a === 0) {
//   console.log('нулевое число');
// } else if (a < 0 && a % 2 === 0) {
//   console.log('негативное парное число');
// } else if (a < 0 && a % 2 !== 0) {
//   console.log('негативное непарное число');
// }

// Task 10
// let a = 5;

// if (a % 2 === 0 && String(a).length === 3) {
//   console.log('парное трехзначное число');
// } else if (a % 2 !== 0 && String(a).length === 3) {
//   console.log('непарное трехзначное число');
// } else if (a % 2 === 0 && String(a).length === 2) {
//   console.log('парное двузначное число');
// } else if (a % 2 !== 0 && String(a).length === 2) {
//   console.log('непарное двузначное число');
// } else if (a % 2 === 0 && String(a).length === 1) {
//   console.log('парное однозначное число');
// } else if (a % 2 !== 0 && String(a).length === 1) {
//   console.log('непарное однозначное число');
// }

// Task 11
// Префіксний варіант ++i:
// let i = 0;
// while (++i < 5) alert(i); // => 1,2,3,4 Потому что при проверке условия , i сразу увеличивается
// Постфіксний варіант i++
// let i = 0;
// while (i++ < 5) alert(i); //=> 1,2,3,4,5 Потому что сначала проверяется условие, а потом увеличивается и выводится i с новым значением

// Task 12

// Постфіксна форма :
// for (let i = 0; i < 5; i++) alert(i); //=> 0,1,2,3,4

// Префіксна форма :
// for (let i = 0; i < 5; ++i) alert(i); //=> 0,1,2,3,4
// Цикл работает следующим образом: 1) проверка начала (let i = 0); 2) Проверка условия(i<5),если true тогда выполняем тело (alert(i));
// 3) увеличиваем переменную i на 1 (i++); 4) проверка условия. Начало проверяется только один раз

// Task 13

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Task 14

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// Task 15

// while (true) {
//   let questions = prompt('Введите число >100');
//   if (questions > 100 || questions === null) {
//     break;
//   }
// }

// Task 16
// let num = 10;

// outer: for (let i = 2; i <= num; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) continue outer;
//   }
//   console.log(i);
// }

// Task 17
// let num = +prompt('введите число');
// let num2 = +prompt('введите число');

// console.log((num + num2) / 2);

// Task 18
// let num = +prompt('Введите число');

// console.log(Math.sqrt(num));

// Task 19
// let a = +prompt('Введите число a');
// let b = +prompt('Введите число b');
// let c = +prompt('Введите число c');
// if (a < b && a < c) {
//   if (b > c) {
//     console.log(b - a);
//   } else {
//     console.log(c - a);
//   }
// }
// if (b < a && b < c) {
//   if (a > c) {
//     console.log(a - b);
//   } else {
//     console.log(c - b);
//   }
// }
// if (c < a && c < b) {
//   if (a > b) {
//     console.log(a - c);
//   } else {
//     console.log(b - c);
//   }
// }

// Task 20
// let num = +prompt('Введите число');
// if (num % 2 === 0) {
//   console.log(num);
// }

// Task 21

// ВАРИАНТ 1
// let a = 32;
// let count = String(a).length;
// let sumNum = String(a)
//   .split('')
//   .reduce((acc, num) => +acc + +num);

// ВАРИАНТ 2
//  let a = 32;
// let sumNum = (a - (a % 10)) / 10 + (a % 10);
// if ((a - (a % 10)) / 10 === 0) {
//   count += 1;
// } else {
//   count = 2;
// }
// console.log(`count: ${count}; sum: ${sumNum}`);

// Task 22
// let inch = +prompt('Введите число в дюймах');
// let centimeters = +prompt('Введите число в сантиметрах');
// const CENTIMETERS_IN_INCH = 2.54;
// const INCH_IN_CENTIMETERS = 0.393701;

// if (centimeters) {
//   centimeters *= INCH_IN_CENTIMETERS;
// }
// if (inch) {
//   inch *= CENTIMETERS_IN_INCH;
// }
// console.log(`Дюймы: ${inch} см`);
// console.log(`См: ${centimeters} дюйма`);

// Task 23

let firstQuestion = alert('Сколько дней в не высокосном году ?');
let optionA = +prompt('A:366; B:365; C:350;');

if (optionA === 365) {
  alert('Верно! 365');
} else {
  alert('Вы ошиблись');
}

let secondQuestion = alert('Сколько грамм в одном киллограмме ?');
let optionB = +prompt('A:999; B:1: C:1000');

if (optionB === 1000) {
  alert('Верно! 1000');
} else {
  alert('Вы ошиблись');
}
// Task 24

// let num = prompt('Введите трехзначное число');
// if (num % 2 === 0) {
//   let sum = num.split('').reduce((acc, num) => +acc + +num);
//   console.log(sum);
// } else if (num % 2 !== 0) {
//   let mult = num.split('').reduce((acc, num) => +acc * +num);
//   console.log(mult);
// }

// Task 25
// let a = +prompt('Введите а:');
// let b = +prompt('Введите b:');
// let c = +prompt('Введите c:');

// if (a < b + c && b < a + c && c < a + b) {
//   console.log('Треугольник существует');
// } else {
//   console.log('Треугольник не существует');
// }

// Task 26
// let x = 4;
// let y = 9;
// let d = Math.sqrt(x ** 2 + y ** 2);

// if (d < 10) {
//   console.log('Точка лежит внутри круга');
// } else {
//   console.log('Точка не лежит внутри круга');
// }

// Task 27
// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// Task 28
// const user = {
//   name: 'John',
// };
// user.name = 'Pete'; // Объект можно изменить , потому что переменная содержит ссылку на него

// Task 29
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }
// console.log(sum);

// Task 30

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
