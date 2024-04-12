// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.
let programmer = {
  name: "Erbol",
  lastname: "Turdumbetov",
  age: 18,
  language: "Java Script",
  pay: "10.000 $",
};
for (i in programmer) {
  console.log(i);
}

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")
let firstNum = +prompt("Введите 1 число");
let secondNum = +prompt("Введите 2 число");
let sum = [];
sum = firstNum + secondNum;
if (sum > 10 && sum < 20) {
  sum = sum * 5;
} else if (sum > 20 && sum < 50) {
  sum = sum / 3;
} else {
  sum = sum + 10;
}
console.log(sum);
// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
let aboutUs = [
  ["name", "Makers"],
  ["type", "Bootcamp"],
  ["place", "Bishkek"],
  ["languages", "JavaScript, Python"],
  ["simply", "the best!"]
];
for (let i = 0; i < aboutUs.length; i++) {
    console.log(${aboutUs[i][0]}: ${aboutUs[i][1]})
}
// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };
let userssum = 0;
let users = {
  John: 28,
  Mark: 30,
  David: 25,
  Richard: 42,
};
for (i in users) {
  userssum += users[i];
}
console.log(userssum);
// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]
let arr = [2, "hello", true, "world", 5, "js"];
function removeElem(arr2) {
  arr2.splice(3, 1);
  return arr2;
}
console.log(removeElem(arr));


