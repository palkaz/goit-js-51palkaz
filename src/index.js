console.log('module 04.1');

// function fn() {
//   console.log('hello');
// }

// fn();

// const fn = () => {
//   console.log('hello');
// };

// fn();

// const numbers = [5, 10, 15, 20, 25];

// for (const number of numbers) {
//   console.log(number);
// }

// numbers.forEach(function (number) {
//   console.log(number);
// });

// numbers.forEach((number) => {
//   console.log(number);
// });

// const myFn = (number) => console.log(number);

// numbers.forEach((number) => console.log(number));

// ------ map -------
// const numbers = [5, 10, 15, 20, 25];
// console.log(numbers);

// x2 -> [10, 20, 30, 40, 50]
// const newArr = [];

// numbers.forEach((number) => {
//   newArr.push(number * 2);
// });

// console.log(newArr);

// x + 5 -> [10, 15, 20, 25, 30]
// const newArr2 = [];

// numbers.forEach((number) => {
//   newArr2.push(number + 5);
// });

// console.log(newArr2);

// x10 -> [...]
// const newArr3 = [];

// numbers.forEach((number) => {
//   newArr3.push(number * 10);
// });

// console.log(newArr3);

// ===== map =====
// const numbers = [5, 10, 15, 20, 25];
// console.log(numbers);

// const x2 = (number) => number * 2;
// const xPlus5 = (number) => number + 5;

// const map = (arr, callback) => {
//   const newArr = [];

//   arr.forEach((item) => newArr.push(callback(item)));

//   return newArr;
// };

// console.log(map(numbers, x2)); // x2 -> [10, 20, 30, 40, 50]
// console.log(map(numbers, xPlus5)); // x + 5 -> [10, 15, 20, 25, 30]
// console.log(map(numbers, (number) => number * 10)); // x10

// console.log(
//   map(
//     ['www.google.com', 'www.facebook.com', 'www.amazon.com'],
//     (url) => `<a href='${url}'>${url}</a>`
//   )
// );

// <a href='www.google.com'>www.google.com</a>
// <a href='www.facebook.com'>www.facebook.com</a>

// ===== find =====
// const find = (arr, callback) => {
//   for (const item of arr) {
//     if (callback(item)) {
//       return item;
//     }
//   }
// };
// const users = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 }, // <--
//   { name: 'Chris', age: 25 },
// ];

// console.log(
//   find(users, function (item) {
//     return item.name === 'Bobby';
//   })
// );

// console.log(find(users, (item) => item.name === 'Bobby'));
// console.log(find(users, (item) => item.name === 'Peter'));
// console.log(find(users, (item) => item.age === 25));

// console.log(find([1, 2, 3, 4, 5], (number) => number > 3));
// console.log(find([1, 2, 3, 4, 5], (number) => number % 5 === 0));

// ==== filter ====
// const filter = (arr, callback) => {
//   const newArr = [];

//   arr.forEach((item) => {
//     if (callback(item)) {
//       newArr.push(item);
//     }
//   });

//   return newArr;
// };

// const users = [
//   { name: 'Bobby', age: 15 },
//   { name: 'Peter', age: 20 },
//   { name: 'Chris', age: 25 },
//   { name: 'Brown', age: 55 },
// ];

// console.log(filter(users, (user) => user.age < 25));
// console.log(filter(users, (user) => user.age > 20));
// console.log(filter(users, (user) => user.name[0] === 'B'));

// ===== question =====
// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// ===== question ======
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// ===== closures =====
// function fn(name) {
//   return function () {
//     console.log(name);
//   };
// }

// let x = 'Bobby';

// const closuredName = fn(x);
// closuredName();

// x = 'Peter';
// closuredName();

// ===== closure counter =====
// function Counter(initialValue = 0) {
//   let x = initialValue;

//   return function () {
//     console.log((x += 1)); // 1, 2, 3, 4
//   };
// }

// const counter1 = Counter();
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3

// const counter2 = Counter(10);
// counter2(); // 11
// counter2(); // 12
// counter2(); // 13

// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const createProduct = (partialProduct, callback) =>
//   callback({ id: Date.now(), ...partialProduct });

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 6 - Инлайн стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const map = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// };

// console.log(map([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(map([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(map([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(map([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const logItems = (items) => {
//   console.log(items);
//   items.forEach((item, idx) => console.log(`${idx + 1} - ${item}`));
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // nameList.forEach((name, idx) => console.log(`${name}: ${phoneList[idx]}`));
//   nameList.forEach((_, idx) =>
//     console.log(`${nameList[idx]}: ${phoneList[idx]}`)
//   );
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// function calсulateAverage(...args) {
//   let total = 0;

//   args.forEach((item) => (total += item));

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// ===== example ======
// const makeSheff = function (name) {
//   return function (dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
// };

// const mango = makeSheff('Mango');
// mango('pirozok');

// const bobby = makeSheff('Bobby');
// bobby('palianycia');
// =========================== Автопроверки =================
// =====================task 01 in 48 ===========================
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(makePizza());//результат выполнения функции
// console.log(makePizza);  // ссылка на функцию
// =====================task 02 in 48 ===========================
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом имя готовой доставляемой пиццы.
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Royal Grand', makePizza));
// console.log(makeMessage('Ultracheese', deliverPizza));
// =====================task 03 in 48 ===========================
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию eatPizza(pizzaName), которая логирует строку "Eating pizza <имя пиццы>".
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });
// =====================task 04 in 48 ===========================
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     } else {
//       const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
//       return onError(error);
//     }
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// =====================task 05 in 48 ===========================
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1)
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]); //138
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// calculateTotalPrice([164, 48, 291]); //503
// console.log(calculateTotalPrice([164, 48, 291]));
// =====================task 06 in 48 ===========================
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (
//     number // for (let i = 0; i < numbers.length; i += 1)
//   ) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([12, 24, 8, 41, 76], 20);
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //24,41,76

// =====================task 07 in 48 ===========================
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.
// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1)
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// =====================task 08 in 48 ===========================
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она была объявлена как стрелочная.
// Change code below this line

// // function calculateTotalPrice(quantity, pricePerItem)//было
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line стало
//   return quantity * pricePerItem;
// };
// console.log(calculateTotalPrice(5, 100)); //500

// =====================task 09 in 48 ===========================
// Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.
// // Change code below this line
// // const calculateTotalPrice = (quantity, pricePerItem) => {
// //   return quantity * pricePerItem;
// // }; было

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Change code above this line стало
// =====================task 10 in 48 ===========================
// Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.
// // Change code below this line
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));//138
// =====================task 11 in 48 ===========================
// // Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   console.log(filteredNumbers);
//   // Change code above this line
//   return filteredNumbers;
// };
// filterArray([1, 2, 3, 4, 5], 3); //4,5

// =====================task 12 in 48 ===========================
// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.
// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   console.log(commonElements);
//   // Change code above this line
//   return commonElements;
// };
// getCommonElements([1, 2, 3], [2, 4]);//2
// =====================task 13 in 48 ===========================
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.
// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else newArray.push(element);
//   });

//   return newArray;
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // Change code above this line
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// =====================task 14 in 48 ===========================
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths); //(4) [5, 4, 5, 7]

// =====================task 15 in 48 ===========================
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг(свойство title) из всех объектов массива books.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

// =====================task 16 in 48 ===========================
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line
// // const titles = books.map( book => book.title);
// // books.map(book => book.genres);
// // books.flatMap(book => book.genres);
// const genres = books.flatMap(book => book.genres);
// console.log(genres);
// =====================task 17 in 48 ===========================
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.
// const users =
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Change code below this line

// const getUserNames = users => users.map(user => user.name);

// // Change code above this line
// =====================task 18 in 48 ===========================
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Дополни функцию getUserEmails(users) так, чтобы она возвращала массив почтовых адресов пользователей (свойство email) из массива объектов в параметре users.
// const getUserEmails = users => users.map(user => user.email);

// =====================task 19 in 48 ===========================
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line
// // numbers.filter((element, index, array) => {
// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers); // [24, 82, 36, 18, 52]
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers); //[17, 61, 47, 73]

// =====================task 20 in 48 ===========================
// Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course при переборе массива методом filter.

// Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres, index, array) => array.indexOf(genres) === index);
// console.log(allGenres);

// =====================task 21 in 48 ===========================
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

// =====================task 22 in 48 ===========================
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.
// по аналогии с 17 задачей
// [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor===color);

// // const getUserNames = users => users.map(user => user.name);

// // Change code above this line
// Если значение параметра color это "blue", функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr

// =====================task 23 in 48 ===========================
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.
// Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user => user.age > minAge &&  user.age < maxAge );

// // const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor===color);

// // Change code above this line
// =====================task 24 in 48 ===========================
// массив тот же
// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

// //   const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor===color);

// // Change code above this line
// =====================task 25 in 48 ===========================
