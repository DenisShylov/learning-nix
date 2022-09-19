// Task 1

// let name = 'Denis';
// let admin = name;
// alert(admin);

// Task 2
// В обоих случаях можно использовать верхний регистр

// Task 3

// let name = 'Ilya ';
// alert(` hello ${1} `); => hello 1
// alert(` hello ${'name '}`); => hello name
// alert(` hello ${name} `); =>  hello Ilya

// Task 4
// '' + 1 + 0; =>'10'
// '' - 1 + 0; => -1
// true + false; => 1
// 6 / '3'; => 2
// '2' * '3'; => 6
// 4 + 5 + 'px'; =>'9px'
// '$' + 4 + 5; =>'$45'
// '4' - 2; => 2
// '4px' - 2; =>NaN
// 7 / 0; =>Infinity
// ' – 9 ' + 5; =>' - 9 5'
// ' – 9 ' - 5; =>NaN
// null + 1; => 1
// undefined + 1; => NaN

// Task 5
// let a = 1, b = 1;
// let c = ++a;  => 2
// let d = b++;  => 1

// Task 6
// let a = 2; => a= 4
// let x = 1 + (a *= 2); => x = 5

// Task 7
// 5 > 4;  => true
// 'ананас' > 'яблуко'; => false
// '2' > '12'; => true
// undefined == null; => true
// undefined === null; => false
// null == '\n0\n'; => false
// null === +'\n0\n '; => false

// Task 8
// let name = prompt('Как вас зовут?');
// console.log(name);

// Task 9
// if ('0') {
//   alert(' Привіт');
// } => Выведет Привіт, потому что строка не пустая и дает true

// Task 10
// let question = prompt('Яка «офіційна» назва JavaScript ?»');

// if (question === 'ECMAScript') {
//   console.log('«Правильно!»');
// } else {
//   console.log('«Не знаєте? ECMAScript!»');
// }

// Task 11

// let num = prompt('Введите число ');

// if (num > 0) {
//   console.log(1);
// } else if (num < 0) {
//   console.log(-1);
// } else if (num == 0) {
//   console.log(0);
// }

// Task 12
// let a = 3;
// let b = 2;
// let result;
// a + b < 4 ? (result = ' Мало ') : (result = 'Багато');
// console.log(result);

// Task 13
// let message;

// login == ' Співробітник'
//   ? (message = ' Привіт ')
//   : login == 'Директор'
//   ? (message = ' Добрий день! ')
//   : login == ''
//   ? (message = 'Відсутній логін')
//   : (message = '');

// Task 14
// alert(null || 2 || undefined); => 2

// Task 15
// alert(alert(1) || 2 || alert(3)); => Сначала выведет 1 , а потом 2

// Task 16
// alert(1 && null && 2); => null

// task 17
// alert(alert(1) && alert(2)); => 1 и undefined

//  Task 18
// alert(null || (2 && 3) || 4); => 3

// Task 19

// const age = 14;
// if (age >= 14 && age <= 90) {
//   console.log(age);
// }

// Task 20

// const age = 15;
// if (age < 14 || age > 90) {
//   console.log(age);
// }

// if (!(age > 14) || !(age < 90)) {
//   console.log(age);
// }

// Task 21

// if (-1 || 0) alert('first'); => Выведется первым (-1 -true, 0 - false)
// if (-1 && 0) alert('second'); => Не выведется, потому что условие возвращает false
// if (null || (-1 && 1)) alert('third'); => Выведется вторым (null - false, (-1 && 1) - true)

// Task 22

// let login = prompt('Напишите ваш логин');

// if (login === null) {
//   alert('Скасовано');
// } else if (login !== 'Адмін') {
//   alert('Я вас не знаю');
// } else if (login === 'Адмін') {
//   let password = prompt('Введите пароль');

//   if (password === 'я головний') {
//     alert('Здрастуйте!');
//   } else if (password !== 'я головний' &&  password !== null) {
//     alert('Невірний пароль');
//   } else if (password === null) {
//     alert('Скасовано');
//   }
// }

// Task 23

// if (browser === 'Edge') {
//   alert(" You've got the Edge! ");
// } else if (
//   browser === 'Chrome' ||
//   browser === 'Firefox' ||
//   browser === 'Safari' ||
//   browser === 'Opera'
// ) {
//   alert(' Okay we support these browsers too');
// } else {
//   alert(' We hope that this page looks ok!');
// }

//  Task 24
// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }

// Task 25

// let num = 2;
// if (num > 0) {
//   num += 1;
// } else {
//   num;
// }
// alert(num);

// Task 26

// let num = -2;
// if (num > 0) {
//   num += 1;
// } else {
//   num -= 2;
// }
// alert(num);

// Task 27

// let num = 0;
// if (num > 0) {
//   num += 1;
// } else if (num < 0) {
//   num -= 2;
// } else if (num === 0) {
//   num = 10;
// }
// alert(num);

// Task 28

// let a = -1;
// let b = -2;
// let c = 3;
// let result = 0;

// if (a > 0) {
//   result += 1;
// }
// if (b > 0) {
//   result += 1;
// }
// if (c > 0) {
//   result += 1;
// }
// alert(result);

// Task 29

// let a = -1;
// let b = -2;
// let c = 0;
// let resultPositive = 0;
// let resultNegative = 0;
// if (a > 0) {
//   resultPositive += 1;
// } else if (a < 0) {
//   resultNegative += 1;
// }
// if (b > 0) {
//   resultPositive += 1;
// } else if (b < 0) {
//   resultNegative += 1;
// }
// if (c > 0) {
//   resultPositive += 1;
// } else if (c < 0) {
//   resultNegative += 1;
// }
// alert('positive: ' + resultPositive);
// alert('negative: ' + resultNegative);

// Task 30
// let a = 1;
// let b = 2;

// if (a > b) {
//   alert(a);
// } else {
//   alert(b);
// }

// Task 31
// let a = 1;
// let b = 2;

// if (a < b) {
//   alert(a);
// } else {
//   alert(b);
// }

// Task 33

// let A = -10;
// let B = 311;
// let C = 0;
// if (A > B) {
//   C = B;
//   B = A;
//   alert('A: ' + C);
//   alert('B: ' + B);
// } else {
//   alert('A: ' + A);
//   alert('B: ' + B);
// }

// Task 34

// let A = 4;
// let B = 4;
// if (A !== B) {
//   A = A + B;
//   B = A;
// } else if (A === B) {
//   A = 0;
//   B = 0;
// }

// alert('A: ' + A);
// alert('B: ' + B);

// Task 35
// let A = 20;
// let B = 10;

// if (A !== B) {
//   if (A > B) {
//     B = A;
//   } else {
//     A = B;
//   }
// } else if (A === B) {
//   A = 0;
//   B = 0;
// }

// alert('A: ' + A);
// alert('B: ' + B);

// Task 36
// let a = 10;
// let b = 21;
// let c = 4;

// if (a < b && a < c) {
//   alert(a);
// } else if (b < a && b < c) {
//   alert(b);
// } else {
//   alert(c);
// }

// Task 37
// let a = 100;
// let b = 210;
// let c = 40;

// if (a > b && a > c) {
//   if (b > c) {
//     alert(b);
//   } else {
//     alert(c);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     alert(a);
//   } else {
//     alert(c);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     alert(a);
//   } else {
//     alert(b);
//   }
// }

// Task 38
// let a = 100;
// let b = 2150;
// let c = 404;

// if (a > b && a > c) {
//   if (b > c) {
//     alert(c);
//     alert(a);
//   } else {
//     alert(b);
//     alert(a);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     alert(c);
//     alert(b);
//   } else {
//     alert(a);
//     alert(b);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     alert(b);
//     alert(c);
//   } else {
//     alert(a);
//     alert(c);
//   }
// }

// Task 39

// let a = 1;
// let b = 20;
// let c = 4;
// if (a > b && a > c) {
//   if (b > c) {
//     alert(a + b);
//   } else {
//     alert(a + c);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     alert(b + a);
//   } else {
//     alert(b + c);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     alert(c + a);
//   } else {
//     alert(c + b);
//   }
// }

// Task 40

let a = 3;
let b = 10;
let c = 10;

if (a === b) {
  alert(c);
} else if (a === c) {
  alert(b);
} else if (b === c) {
  alert(a);
}
