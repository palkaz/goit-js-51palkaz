console.log('module 03.1');
console.log('Автопроверка 1-20');

// ==== question ====
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// ==== hasOwnProperty ====
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';
// dog.legs = 5;

// console.log(dog.hasOwnProperty('legs'));

// ==== example ====
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location); // Объект location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// ==== object =====
// 1. When it is after the = , for example:
// const x = {}; // - literal of the object.

// // 2. When you are passing arguments in the
// function fn(obj) {
//   console.log(obj);
// }

// // 3. Or When you are returning literal in the function:
// const rtf = function () {
//   const x = {};

//   return x;
// };

// -----------------------------------------------------
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// Код

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// // добавляет поле mood со значением 'happy'
// user['mod'] = 'happy';

// // заменяет значение hobby на 'skydiving'
// user.hobby = 'skydiving';

// // заменяет значение premium на false
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// for (const item of Object.entries(user)) {
//   console.log(`${item[0]}: ${item[1]}`);
// }

// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(user);

// ===== for...in =====
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Манго';

// // all keys
// for (const key in dog) {
//   console.log(key);
// }

// // only own keys
// for (const key of Object.keys(dog)) {
//   console.log(key);
// }

// -----------------------------------------------------
// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.
// Код;

// function getSalariesSum(salaries = {}) {
//   let sum = 0;

//   for (const salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum;
// }

// console.log(
//   getSalariesSum({
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   })
// );

// console.log(getSalariesSum({}));

// console.log(getSalariesSum());

// -----------------------------------------------------
// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта
// Код

// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity;
//     }
//   }

//   return 0;
// }

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 }, // 5200
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 }, // 400
// ];

// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'sdgsfg'));

// -----------------------------------------------------
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: this.transactions.length,
//       amount, // amount: amount,
//       type, // type: type,
//       date: Date.now(),
//     };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;

//     const newTranslation = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.transactions.push(newTranslation);
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('no money :(');
//     } else {
//       this.balance -= amount;

//       const newTranslation = this.createTransaction(
//         amount,
//         Transaction.WITHDRAW
//       );

//       this.transactions.push(newTranslation);
//     }
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (const item of this.transactions) {
//       if (item.id === id) {
//         return item;
//       }
//     }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let sum = 0;

//     for (const item of this.transactions) {
//       if (item.type === type) {
//         sum += item.amount;
//       }
//     }

//     return sum;
//   },
// };

// console.log(account.balance); // 0

// account.deposit(100);
// account.deposit(50);
// console.log(account.balance); // 100

// account.withdraw(140);
// account.withdraw(50);
// console.log(account.balance); // 10

// console.log(account.transactions);

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(20));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// ================= GAME ==================
// const COUNT_LIMIT = 5;
// const x = Math.floor(Math.random() * 100) + 1;
// let userInput;
// let count = 0;
// console.log(x);

// do {
//   userInput = Number(prompt('Enter your number'));
//   count += 1;

//   if (userInput > x) {
//     console.log(`${userInput} > x`);
//   }
//   if (userInput < x) {
//     console.log(`${userInput} < x`);
//   }
// } while (userInput !== x && count != COUNT_LIMIT);

// if (userInput === x) {
//   console.log('Hurray!!!');
// } else {
//   console.log(count);
// }

// ======= location test =======
// const location = 123; // Uncaught SyntaxError: Identifier 'location' has already been declared (at index.js:1:1)
// console.log(location); // window.location

// ===========task 01 in 41 =============
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// ===========task 02 in 41 =============
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// console.log(apartment);
// ===========task 03 in 41 =============
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(apartment);
// ===========task 04 in 41 =============
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
// ===========task 05 in 41 =============
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// ===========task 06 in 41 =============
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// ===========task 07 in 41 =============
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: 'Jamaica',
//   city: 'Kingston',
// };
// ===========task 08 in 41 =============
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// ===========task 09 in 41 =============
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line

//   email: 'henry.carter@aptmail.com',
//   password: 'jqueryismyjam',
//   emailInputName,
//   passwordInputName,
//   // Change code above this line
// };
// ===========task 10 in 41 =============
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   console.log(keys.push(key));
//   console.log(values.push(apartment[key]));
// }
// ===========task 11 in 41 =============
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }
// ===========task 11 in 41 =============
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// const keys = Object.keys(object);
//   for(const key in keys ){
//  if(keys.hasOwnProperty(key)){
//   keys.push(key);

// }
//   // Change code above this line
//   return propCount;
// }
//     console.log(countProps({ name: "Mango", age: 2 }));
// ===========task 12 in 41 =============
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = Object.keys(object);
//   for (const key in keys) {
//     propCount += 1;
//   }
//   // Change code above this line
//   return propCount;
// }
// ===========task 13 in 41 =============
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// ===========task 14 in 41 =============
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   propCount = keys.length;

//   return propCount;
//   // Change code above this line
// }
// ===========task 15 in 41 =============
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// ===========task 16 in 41 =============
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//     // console.log(values);
//     // console.log(totalSalary);
//   }
//   // Change code above this line
//   //   console.log(totalSalary);
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// ===========task 17 in 41 =============
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// ===========task 18 in 41 =============
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   console.log(productName);
//   // Change code below this line
//   for (const product of products) {
//     //   console.log(product.price);
//     // console.log(productName);
//     if (product.name === productName) {
//       console.log(product.name, `:`, product.price);
//       return product.price;
//     }
//     // console.log(productName);
//     // console.log(`null`);
//     // return product.price;
//     // return productName;
//   }
//   console.log(productName, `:`, null);

//   return null;
//   // Change code above this line
// }
// // console.log(getProductPrice);
// getProductPrice('Grip');
// ===========task 19 in 41 =============
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   console.log(`проверка1:`, propName);
//   let resPropName = [];
//   //   const keys = Object.keys(product);
//   //   const keys = Object.keys(products);
//   //   console.log(products);
//   for (const product of products) {
//     if (product.hasOwnProperty([propName])) {
//       resPropName.push(product[propName]);
//     }
//   }
//   //   resPropName = [];
//   console.log(`проверка:`, resPropName);
//   return resPropName;
//   // Change code above this line
// }
// getAllPropValues('ame');
// ===========task 20 in 41 =============
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// // calculateTotalPrice('Blaster');
// console.log(calculateTotalPrice('Radar'));
