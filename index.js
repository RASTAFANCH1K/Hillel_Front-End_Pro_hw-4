// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

// ЗАДАНИЕ №1
// Написать функцию которая принимает строку и подстроку и нужно найти количество вхождений!!!
// РЕШЕНИЕ

function searchSubstr(string, substring) {
  return string.split(substring).length-1;
}

console.log( searchSubstr('4526214531235345123', '123') ); // результат 2

console.log( searchSubstr('4526214531235345123', '45') ); // результат 3

// ЗАДАНИЕ №2
// Написать функцию которая принимает массив и ищет макс число, дальше найти мин число которое имеет меньше индекс чем макс.
// Можно индекс оф использовать.
// РЕШЕНИЕ

function findMinBeforeMax(array) {
  let max = Math.max(...array);

  let minBeforeMax = [];

  let min;

  let res = "";

  for (let i = 0; i < array.indexOf(max); i++) {
    minBeforeMax.push(array[i]);
    min = Math.min(...minBeforeMax);
  }
  return res = res + min + " and " + max;
}

console.log( findMinBeforeMax([35,5, 2, 324, 2, 0, -1, 35]) ); // ответ 324 -макс, 2 - мин ибо индекс меньше

// ЗАДАНИЕ №3
// Есть массив с массивов нужно подсчитать сумму елементов которые лежат
// на главной диагонеле c помощью одного цикла и двух. то есть 1 + 5 + 9. 
// Подсчитать произведение побочной диагонали  3*5*5 также.
// РЕШЕНИЕ

const matrix = [ 
  [1,2,3], 
  [4,5,6], 
  [7,8,9] 
];

let mainDiagonal = [];

let collateralDiagonal = [];

// через один цикл
for (let i = 0; i < matrix.length; i++) {
  mainDiagonal[mainDiagonal.length] = matrix[i][i];
  collateralDiagonal[collateralDiagonal.length] = matrix[i][matrix.length - i - 1];
}

// через два цикла
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    if (i === j) {
      mainDiagonal[mainDiagonal.length] = matrix[i][i];
      collateralDiagonal[collateralDiagonal.length] = matrix[i][matrix.length - i - 1];
    }
  }
}

let mainSumNumbers = 0;

for (let i = 0; i < mainDiagonal.length; i++) {
  mainSumNumbers += mainDiagonal[i];
}

let collateralSumNumbers = 1;

for (let i = 0; i <= collateralDiagonal.length-1; i++) {
  collateralSumNumbers *= collateralDiagonal[i];
}

console.log(mainSumNumbers);

console.log(collateralSumNumbers);

// ЗАДАНИЕ №4
// Есть массив. Написать функцию которая подсчитает произведение все елементов и вернет результат
// РЕШЕНИЕ

function multipleOfFive(array) {
  let sumNumbers = 1;

  for (i = 0; i < array.length; i++) {
    sumNumbers *= array[i];
  }
  return sumNumbers;
}

console.log( multipleOfFive([20, 5, 3, 23, 15, 8, 10, 11]) );

// Advanced 
// ЗАДАНИЕ №5
// Есть бусы, каждая из бусинок это рандом из тру или фолс и количество бусинок не известно нужно подсчитать количество бусинок.
// Алгоритм расписать.