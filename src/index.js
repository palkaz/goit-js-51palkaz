console.log('module 03.2');
console.log(`Автопроверка 21 - 41`);
// ---- question ----
// const obj = {
//   name: 'Bobby',
//   age: 25,
//   car: {
//     model: 'Tavria',
//     color: 'green',
//   },
// };

// const objCopy = {
//   ...obj,
//   car: {
//     ...obj.car,
//   },
// };

// objCopy.car.color = 'red';

// console.log('car color:', obj.car);

// ==== class & constructor ====
// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const bobby = new Human('Bobby', 15);
// const peter = new Human('Peter', 20);

// console.log(bobby);
// console.log(peter);

// ==== question ====
// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const { title: firstTitle, coverImage: firstCover } = firstBook;

// console.log('----- Book 1 -----');
// console.log(firstTitle);
// console.log(firstCover);

// const secondBook = {
//   title: 'Сон смешного человека',
// };

// const { title: secondTitle, coverImage: secondCover = 'dhsdfgsdgs' } =
//   secondBook;

// console.log('----- Book 2 -----');
// console.log(secondTitle);
// console.log(secondCover);

// ------ example ------
// function foo({ userName } = {}) {
//   console.log(userName);
// }

// foo();

// ----- destructure obj -----
// function foo({ a, ...rest }) {
//   console.log(rest);
// }

// foo({ a: 1, b: 2, c: 3 });

// ================================
// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

// ================================
// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ================================
// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 bots in stock"

// ================================
// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами
// companyName и stock и выводила репорт о количестве товаров на складе любой компании.

// Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;

//   for (const value of Object.values(stock)) {
//     total += value;
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// ); // "Belacci has 35 item in stock"

// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта
// с добавленными свойствами id и createdAt,
// а также list со значением "default" если в partialContact нет такого свойства.

// Решение
// function createContact({ list = 'default', ...partialContact }) {
//   return {
//     list,
//     id: new Date(),
//     createdAt: Date.now(),
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// ================================
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект
// со свойством fullName, вместо firstName и lastName.

// Решение
// function transformId({ firstName, lastName, ...user }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...user,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// ====== location ======
// const location = '';
// console.log(location);

// ====== CART =====
// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     // increaseQuantity
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = items[i];

//       if (productName === name) {
//         console.log('finded this product: ', productName);
//         console.log(i);
//         items.splice(i, 1);
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     const { items } = this;

//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },

//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },

//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (item.name === productName) {
//         item.quantity -= 1;

//         // remove
//         if (item.quantity === 0) {
//           this.remove(productName);
//         }

//         return;
//       }
//     }
//   },
// };

// console.log(cart.getItems());

// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'kiwi', price: 150 });
// console.table(cart.getItems());

// cart.increaseQuantity('mango');
// console.table(cart.getItems());

// cart.decreaseQuantity('mango');
// cart.decreaseQuantity('mango');
// cart.decreaseQuantity('mango');

// // if ('mango.quantity === 0') {
// //   cart.remove('mango');
// // }

// console.table(cart.getItems());

// ====== array of objects ======
// function transformId(users) {
//   const newUsers = [];

//   for (const user of users) {
//     const { firstName, lastName, ...rest } = user;

//     newUsers.push({
//       createadAt: Date.now(),
//       fullName: `${firstName} ${lastName}`,
//       ...rest,
//     });
//   }

//   return newUsers;
// }

// console.table(
//   transformId([
//     {
//       id: 1,
//       firstName: 'Jacob',
//       lastName: 'Mercer',
//       email: 'j.mercer@mail.com',
//       friendCount: 40,
//     },
//     {
//       id: 2,
//       firstName: 'Adrian',
//       lastName: 'Cross',
//       email: 'a.cross@hotmail.com',
//       friendCount: 20,
//     },
//   ])
// );
// ==================== task 21 in 41 ================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(`Средняя температура за 3 дня:`, meanTemperature);
// ==================== task 22 in 41 ================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(`Средняя температура за 3 дня:`, meanTemperature, icon);
// ==================== task 23 in 41 ================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highYesterday);
// ==================== task 24 in 41 ================
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
//   console.log(hex);
//   console.log(rgb);
// }
// ==================== task 25 in 41 ================
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// ==================== task 26 in 41 ================
// // Change code below this line
// // const todayLow = 0 ;
// function calculateMeanTemperature(forecast) {
//   const {today: {low: todayLow, high: todayHigh},tomorrow:{low:tomorrowLow, high:tomorrowHigh}} = forecast;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// ==================== task 27 in 41 ================
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// ==================== task 28 in 41 ================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore, worstScore, allScores);
// ==================== task 29 in 41 ================
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// ==================== task 30 in 41 ================
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const res = { completed, category, priority, ...data };
//   return res;

//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// ==================== task 31 in 41 ================
// console.log(`task 31`);
// // Change code below this line
// function add(...args) {
//   let resSummArgs = 0;
//   console.log(args);
//   for (const start of args) {
//     resSummArgs += start;
//   }
// //   console.log(resSummArgs);
//   return resSummArgs;

//   // Change code above this line
// }
// add(32, 6, 13, 19, 8);
// console.log(add(32, 6, 13, 19, 8));
// ==================== task 32 in 41 ================
// console.log(`task 32`);
// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNumber < arg) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// addOverNum(3, 50, 15, 27);
// console.log(addOverNum(3, 50, 15, 27));
// ==================== task 33 in 41 ================
// console.log(`task 33`);
// function findMatches(args, ...numbers) {
//   // распыляем объект; сразу в имени переменой присваеваем массиву аргумент args, а данным что дальше записываем в масив с именем numbers
//   // создаем пустой массив для результатов функции
//   const matches = []; // Don't change this line

//   //  инерация по массиву через for of
//   for (const arg of args) {
//     //   проверяем, есть ли в массиве numbers значения arg
//     if (numbers.includes(arg)) {
//       //   console.log(numbers.includes(args);
//       // если есть то пушим в matches
//       matches.push(arg);
//     }
//   }
//   // нет, возвращаем результат
//   //   console.log(`mat:`, matches);
//   // Change code above this line
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// console.log(`result foo:`, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// ==================== task 34 in 41 ================
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };
// ==================== task 35 in 41 ================
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     //   находим в масиве oldName(метод indexOf)
//       const bookIndex = this.books.indexOf(oldName);
//     //   меняем в масиве oldName на newName
//     this.books.splice(bookIndex, 1, newName);

//     return this.books;
//     // Change code above this line
//   },
// };
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// ==================== task 36 in 41 ================
// const atTheOldToad = {
//   // Change code below this line

//   potions: [],

//   // Change code above this line
// };
// console.log(atTheOldToad);
// ==================== task 37 in 41 ================
// Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   // Change code above this line
// };
// console.log(atTheOldToad.getPotions());
// ==================== task 38 in 41 ================
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);
//     // console.log(potions);
//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion('Invisibility');
// console.log(atTheOldToad);
// ==================== task 39 in 41 ================
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     //   находим в масиве oldName(метод indexOf) task 35
//     const bookIndex = this.potions.indexOf(potionName);
//     //     //   меняем в масиве oldName на newName

//     this.potions.splice(bookIndex, 1);

//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad);
// ==================== task 40 in 41 ================
// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     // находим в масиве старое имя
//     const bookIndex = this.potions.indexOf(oldName);
//     //   меняем на новое
//     this.potions.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// console.log(atTheOldToad);
// ==================== task 41 in 41 ================
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     //   интерация по массиву через for
//     for (const potion of this.potions) {
//       // если ytn такоuj массивf с этим именем, то строка 745
//       if (potion.name === newPotion.name) {
//         //   если есть то сообщение об ошибке
//         return console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//       }
//     }
//     //  пушим новый объект в potions
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },

//   // Change code above this line
// };

// // console.log(getPotions());
// console.log(atTheOldToad.getPotions());
// // atTheOldToad.removePotion('Dragon breath');
// // atTheOldToad.getPotions('Speed potion');
// // atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
// // atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// atTheOldToad.removePotion('Dragon reath');
// console.log(atTheOldToad.getPotions());
