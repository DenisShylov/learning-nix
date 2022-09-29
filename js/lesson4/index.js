//  Task 1

// function camelize(str) {
//   return str
//     .split('-')
//     .map((el, index) => {
//       if (index === 0) {
//         return el;
//       } else {
//         return el[0].toUpperCase() + el.slice(1);
//       }
//     })
//     .join('');
// }

// console.log(camelize('my-short-string'));
// console.log(camelize('-webkit-transition'));

// Task 2

// function filterRange(arr, a, b) {
//   return arr.filter((el) => el >= a && el <= b);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert(filtered); // 3,1 (збігаються значення)
// alert(arr); // 5,3,8,1 (без змін)

// Task 3

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     if (a >= arr[i] <= b) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // видалені числа поза діапазоном 1..4
// console.log(arr); // [3, 1]

// Task 4

// function compare(arr) {
//   return arr.sort((a, b) => b - a);
// }

// let arr = [5, 2, 1, -10, 8];
// // ... ваш код для сортування за спаданням
// console.log(compare(arr)); // 8, 5, 2, 1, -10

// Task 5

// function copySorted(arr) {
//   const newArr = arr.slice();
//   return newArr.sort();
// }
// let arr = ['HTML', 'JavaScript', 'CSS'];
// let sorted = copySorted(arr);
// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без змін)

// Task 6
// function Calc(initValue) {
//   let result = initValue;
//   const calculator = {
//     add(value) {
//       result += value;
//       return this;
//     },

//     subtract(value) {
//       result -= value;
//       return this;
//     },

//     mult(value) {
//       result *= value;
//       return this;
//     },

//     div(value) {
//       result /= value;
//       return this;
//     },
//     result() {
//       return result;
//     },
//   };
//   return calculator;
// }
// console.log(Calc(5).add(5).result()); // => 10
// console.log(Calc(10).subtract(5).result()); // => 5
// console.log(Calc(10).mult(5).result()); // => 50
// console.log(Calc(10).div(5).result()); // => 2
// Task 7
// function sortNames(arr) {
//   return arr.map((el) => el.name);
// }

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };
// let users = [vasya, petya, masha];
// let names = sortNames(users);
// alert(names); // Вася, Петя, Маша

// Task 8
// function sortByAge(users) {
//   return users.sort((a, b) => a.age - b.age);
// }
// let vasya = { name: ' Вася ', age: 25 };
// let petya = { name: ' Петя ', age: 30 };
// let masha = { name: ' Маша ', age: 28 };
// let arr = [vasya, petya, masha];
// console.log(sortByAge(arr));

// Task 9
// function getAverageAge(users) {
//   return users.reduce((acc, el) => acc + el.age, 0) / users.length;
// }

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };
// let arr = [vasya, petya, masha];
// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Task 10
// function unique(arr) {
//   const newArr = [];
//   for (let value of arr) {
//     if (!newArr.includes(value)) newArr.push(value);
//   }

//   return newArr;
// }
// let strings = [
//   'кришна',
//   'кришна',
//   'харе',
//   'харе',
//   'харе',
//   'харе',
//   'кришна',
//   'кришна',
//   ':-O',
// ];
// console.log(unique(strings)); // кришна, харе, :-O

// Task 11
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// let values = [
//   'Hare',
//   'Krishna',
//   'Hare',
//   'Krishna',
//   'Krishna',
//   'Krishna',
//   'Hare',
//   'Hare',
//   ':-O',
// ];
// alert(unique(values)); // Hare,Krishna,:-O

// Task 12
// Тут ми робимо два лічильники: counter і counter2, використовуючи ту саму функцію
// makeCounter.
// Вони незалежні? Що покаже другий лічильник? 0,1 чи 2,3 чи щось ще?
// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter2()); // 0
// alert(counter2()); // 1
// Второй счетчик выведет 0,1 , потому что мы по новой вызываем ф-цию, начиная со стартового значение переменной count

// Task 13
// Тут об'єкт лічильника створено за допомогою функції-конструктора.
// Чи працюватиме він? Що покаже?
// function Counter() {
//   let count = 0;
//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }
// let counter = new Counter();
// alert(counter.up()); // 1
// alert(counter.up()); // 2
// alert(counter.down()); // 1

// Ф-ция работает и вывводит значения 1, 2 ,1

// Task 14
// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(5)); // 120
