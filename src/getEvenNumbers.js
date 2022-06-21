//  module_01.1
// const a = 10;
// console.log("index a:", a);
// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);
// const userName = prompt("What is your name?");
// console.log(`Hello`, userName); // string
// console.log(`Hello`, Number(userName)); // number
// const x = 16;
// console.log(x % 8);
// const value = 27.5;
// Math.floor(value);
//  Math.ceil(value);
//  Math.round(value);
//  console.log(Math.ceil(value));
// const y = 27;
// console.log('парне число:', y % 2 === 0); // парне число
// console.log('не парне число', y % 2 !== 0); // не парне число
// let i = 1;
// console.log(i);
// i = i + 1;
// console.log(i);
// console.log((i = i + 1));
// // i += 1;
// // console.log(i);
// console.log(i += 1);
// // i++;
// // console.log(i);
// console.log(i++); // post-increment
// console.log(i); // 4
// // ++i;
// // console.log(i);
// console.log(++i); // pre-increment
// ==================
// Example 1 - Базовые математические операторы
// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.
// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// // console.log(diff);
// console.log(Math.abs(diff)); //по модулю
// ==================
// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.
// let students = 100;
// students = students + 50;
// students += 50;
// console.log(students);
// ==================
// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.
// const result = 108 + 223 - 2 * 5;
// console.log(result);
// ==================
// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что будет в консоли при значениях 27.3 и 27.9.
// const value = 27.5;
// console.log(Math.floor(value)); // 27
// console.log(Math.ceil(value)); // 28
// console.log(Math.round(27.4)); // 27
// console.log(Math.round(27.5)); // 28
// const x = 3.1415
// console.log(x.toFixed(3));
// ==================
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;
// const message = `${companyName} has ${totalBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ==================
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;
// let weight = '88,3';
// let height = '1.75';
// weight = weight.replace(',', '.');
// height = height.replace(',', '.');
// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);
// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);
// console.log(bmi);
// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);
// console.log(bmi); // 28.8
// const weight = Number.parseFloat('88,3'.replace(',', '.'));
// const height = Number.parseFloat('1.75'.replace(',', '.'));
// const bmi = Number((weight / Math.pow(height, 2)).toFixed(1));
// console.log(bmi); // 28.8
// // console.log('4' == 4);
// Решал Самостоятельно
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.
// const companyName = 'Cyberdyne Systems';
// const A = `has`;
// const B = `bots in stock`;
// const repairBots = 150;
// const defenceBots = 50;
// const totalBots = repairBots + defenceBots;
// const message = `${companyName} ${A} ${totalBots} ${B}`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;
// let weight = '88,3';
// let height = '1.75';
// weight = weight.replace(',', '.');
// height = height.replace(',', '.');
// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);
// let bmi = weight / Math.pow(height, 2);
// bmi = bmi.toFixed(1);
// bmi = Number(bmi);
// console.log(bmi);
// console.log(bmi); // 28.8
// console.log(5 > 4);
// console.log(10 >= '7');
// console.log('2' > '12');
// console.log('2' < '12');
// console.log('4' == 4);
// console.log('6' === 6);
// console.log('false' === false);
// console.log(1 == true);
// console.log(1 === true);
// console.log('0' == false);
// console.log('0' === false);
// console.log('Papaya' < 'papaya');
// console.log('Papaya' === 'papaya');
// console.log(undefined == null);
// console.log(undefined === null);
// Example 8 - Логические операторы
// Каким будет результат выражений?
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && 'kiwi');
// console.log(true && 0 && 'kiwi');
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) > 0);
// console.log(null || (2 && 3) || 4);
// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
//   if (i === 3) {
//     console.log('Нашли число 3, прерываем выполнение цикла');
//     break;
//   }
// }
// console.log('Лог после цикла');
// const number = 10;
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }
// const incomingValue = 0;
// const defaultValue = 10;
// const value1 = incomingValue || defaultValue;
// const value2 = incomingValue ?? defaultValue;
// console.log(value1);
// console.log(value2);
// const totalMinutes = 256;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);
// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
// const userAnswer = prompt('Какое офицальное название JavaScript?');
// if (userAnswer.toLowerCase() === 'ECMAScript'.toLowerCase()) {
//   console.log('Верно!');
// } else {
//   console.log('Не верно,попытайтесь ещё');
// }
// const userAnswer = prompt('Какое офицальное название JavaScript?');
// console.log(
//   userAnswer.toLowerCase() === 'ECMAScript'.toLocaleLowerCase()
//     ? 'Верно!'
//     : 'Не верно,попытайтесь ещё'
// );
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.
// const hours = 14;
// const minutes = 10;
// let timestring;
// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);
// const hours = 14;
// const minutes = 10;
// console.log(minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`);
// const userInput = prompt('Введите число');
// const number = Number(userInput);
// let answer;
// if (userInput > 0) answer = 'Число положительное.';
// if (userInput < 0) answer = 'Число отрицательное.';
// if (userInput == 0) answer = 'Это ноль.';
// console.log(answer);
// const userInput = prompt('Введите число');
// const number = Number(userInput) || 0;
// let answer;
// if (userInput > 0) {
//   answer = 'Число положительное.';
// } else if (userInput < 0) {
//   answer = 'Число отрицательное.';
// } else {
//   answer = 'Это ноль.';
// }
// console.log(answer);
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b. Если оба значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна быть сумма значения b и числа 512.
// const a = 20;
// const b = 180;
// if (a > 100 && b > 100) {
//   let res;
//   if (a > b) {
//     res = a;
//   } else {
//     res = b;
//   }
//   console.log(res);
// } else {
//   let res;
//   res = b + 512;
//   console.log(res);
// }
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй конструкцию if...else.
// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки
// // if (!link.endsWith('/')) link += '/';
// // Пиши код выше этой строки
// console.log(link);
// Example 6 - Форматирование ссылки (includes и логическое «И»)
// Напиши скрипт который проверяет заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию if...else.
// let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';
// Пиши код ниже этой строки
// if (!link.endsWith('/') && link.includes('my-site')) link += '/';
// Пиши код выше этой строки
// console.log(link);
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.
// let link = 'https://somesite.com/about';
// let link = 'https://my-site.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';
// console.log(link);
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.
// Если значение переменной hours:
// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"
// const hours = 27;
// let text;
// if (hours < 17) {
//   text = 'Pending';
// } else if (hours >= 17 && hours <= 24) {
//   text = 'Expires';
// } else {
//   text = 'Overdue';
// }
// console.log(text);
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.
// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"
// const daysUntilDeadline = 3;
// // Пиши код ниже этой строки
// let text;
// if (daysUntilDeadline === 0) {
//   text = 'Сегодня';
// } else if (daysUntilDeadline === 1) {
//   text = 'Завтра';
// } else if (daysUntilDeadline === 2) {
//   text = 'Послезавтра';
// } else if (daysUntilDeadline >= 3) {
//   text = 'Дата в будущем';
// }
// console.log(text);
// Выполни рефакторинг кода задачи номер 5 используя switch.
// const daysUntilDeadline = 3;
// let text;
// switch (daysUntilDeadline) {
//   case 0:
//     text = 'Сегодня';
//     break;
//   case 1:
//     text = 'Завтра';
//     break;
//   case 2:
//     text = 'Послезавтра';
//     break;
//   default:
//     text = 'Дата в будущем';
// }
// console.log(text);
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.
// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) console.log(i);
// }
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.
// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:
// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"
// const login = prompt('login');
// if (login) {
//   if (login === 'Админ') {
//     const password = prompt('Password');
//     if (password === 'Я админ') {
//       console.log('Здравствуйте!');
//     } else {
//       console.log('Неверный пароль');
//     }
//   } else {
//     console.log('Я вас не знаю');
//   }
// } else {
//   console.log('Отменено');
// }
// function calculateTotal(number) {
//   //   console.log(number);
//   //   Change code below this line
//   {
//     let result = 0;
//     for (let i = 0; i <= number; i = i + 1) {
//       result = result + i;
//     }
//     return result;
//   }
// }
// console.log(`Результат:`, calculateTotal(24));
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(`Результат функции;`, fruit);
// }
// ===========================================
// const order = [1, 2, 3];
// // console.log(order.length);
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     // console.log(order[i]);
//     total = total + order[i];
//     console.log(`total=`, total);
//   }
//   // Change code above this line
//   return total;
// }
// console.log(`Результат:`, calculateTotalPrice([3, 4, 5]));
// =========================================
// function findLongestWord(string) {
//   // Change code below this line
//   // =================
//   const stringArray = string.split(' ');
//   let longesWord = stringArray[0];
//   // console.log(stringArray);
//   for (let i = 0; i < stringArray.length; i += 1) {
//     if (stringArray[i].length > longesWord.length) {
//       console.log(`if test:`, stringArray[i].length);
//       console.log(`if test:`, stringArray[i]);
//       longesWord = stringArray[i];
//       // console.log(`test:`, longesWord);
//     }
//     // console.log(stringArray.length[i]);
//     // console.log(longesWord);
//   }
//   return longesWord;
// }
// console.log(findLongestWord('May the force be with you'));
// ====================================
// function createArrayOfNumbers(min, max) {
//   // Change code below this line
//   const numbers = [];
//   // numbers.push(min);
//   // numbers.push(max);
//   // console.log(`numbers`, numbers);
//   let pushPast = max - min;
//   for (let i = min; i <= max; i += 1) {
//     // console.log(`numbers`, numbers);
//     numbers.push(i);
//   }
//   // numbers.push(max);
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(17, 21));
// ==========================================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const presentValue = [];
//   // console.log(value);
//   for (
//     let i = 1;
//     i < numbers.length;
//     i += 1 // console.log(presentValue);
//   ) {
//     if (numbers[i] > value) {
//       // console.log([i]);
//       // console.log(`numbers`, numbers[i]);
//       presentValue.push(numbers[i]);
//       // console.log(presentValue);
//     }
//   }
//   return presentValue;
// }
// // Change code above this line
// console.log(filterArray([1, 3, 6, 8, 2], 2));
// // =======================
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   let res = fruits.includes(fruit);
//   return res; // Change this line
// }
// console.log(checkFruit('pear'));
// console.log(checkFruit('Pear'));
// =======================
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (variable of array1) {
//     if (array2.includes(variable)) {
//       newArray.push(variable);
//     }
//   }
//   return newArray;
//   // Change code above this line
// }
// =================================
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (varibel of order) {
//     total = varibel + total;
//   }
//   // Change code above this line
//   return total;
// }
// =============================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   let variable = 0;
//   for (variable of numbers) {
//     // console.log(variable);
//     if (variable > value) {
//       filteredNumbers.push(variable);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 2));
// =================== 28 ===================
// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;
// ================== 29 ===============
function getEvenNumbers(start, end) {
  // Change code below this line
  const res = [];
  for (let i = 0; i < start.length && start.length < end; i += 1) {
    if (start.length[i] % 2 === 0) {
      res.push(i);
    }
  }
  return getEvenNumbers;
  // Change code above this line
}
