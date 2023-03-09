// МАССИВ - структура, которая содержит элементы по порядку
/*
const a = [1,2,3]
const b = [1,2,3]
a!=b. Эти массивы не равны друг другу, хотя визуально они одинаковы. МАССИВ - ЭТО ОБЪЕКТ. Объект - это ссылочный тип данных. Т.е .когда мы создаем объект - мы его записываем в определенное место памяти. В данном случае у нас 2 объекта и у каждого из них есть свой адрес в памяти, поэтому они не равны друг другу
*/
//*Псевдомассив - объект, который структурно похож на массив. Он не хранит в себе различные методы типа forEach, map, split и т.д. А только с виду похож на массив
// 2 вида синтаксиса для создания массива
// let arr = []
// let arr = new Array ()
// Общее число элементов массива содержится в его свойстве length

//*ПРАВИЛО
//   [] + false (когда мы работаем с такими операциями, то пустой массив будет приведен к строке
//console.log(typeof([] + false)); //string. Если мы складываем строку с другим типом данных, то получаем строку

const cars = ['mazda', 'toyota', 'kia', 'geely', '2110', '600', '9']
const numArray = [55, 11, 4, 5, 777]

//@ concat()
// Соединение массивов. Возвращает новый массив. Исходный массив, для которого был вызван метод concat() - не меняется
console.log(cars.concat(numArray))

//@split()
//1)разделение элементов массива
/*2)Позволяет получить из строкового значения массив (обратным методом является*/ //@join())
// const str = prompt("","")
// const products  = str.split(",")
// console.log(products)
// const firstItem = cars.shift() //можем взять элемент и закинуть его в переменную
// console.log(firstItem)

//@reverse()
//разворачивает массив в обратную сторону
//! Меняет изначальный массив

//@ slice()
// Режет массив на кусочки согласно заданным параметрам и ВОЗВРАЩАЕТ новый массив
//console.log(numArray.slice(1,3)) // Первый параметр (1) - указывает, с какого индекса мы начинает кусочек, второй параметр (3) - до какого индекса резать. Он не войдет в кусочек.

//___________________
//@cars.shift()
//метод, удаляющий первый элемент сначала списка (lamb). Также можно назначить переменной. по сути не удаляет элемент,а включает и выключает его
//@cars.unshift()
//добавление элемента в начало. Также можно назначить переменной
//@cars.pop()
//удаление последнего элемента и возвращает удаленный элемент. (const removedEl = numArray.pop() Удаленный последний элемент попадет в переменную)
//@cars.push('benz')
//добавление элемента в массив
//!________↑↑↑________Эти методы мутируют массив.

//@ indexof(*)
// Ищет внутри массива указанный элемент и возвращает его позицию. Вернет -1, если элемент не найден
// let index = cars.indexOf('kia')
//console.log(cars[index])

//@ flat(*)
const ar = [2, 3, (4)[('s', 'd', 4)], 6, 7, [true]]
//! Возвращает новый массив
// Данный метод делает массив плоским и поднимает вложенные массивы на индекс, указанный в скобках
//console.log(const arrr = ar.flat(1)) // [ 2, 3, 4, "s", "d", 4, 6, 7, true ]

//? Родные методы массивов

//@ for
// Функции высшего порядка массивов. Именно их лучше использовать для перебора (foEach, map, reduce)

//for (let i = 0; i < cars.length; i++){
//команда for объявляет цикл
//создаем некую переменную i, которая имеет индекс 0. Ноль - значит начинать итерацию с первого элемента массива
//дальше мы создаем условие, до какого момента необходимо итерировать данный цикл
//в этом случае, пока i меньше длинны массива cars
//также, необходимо сделать действие по завершении итерации. Увеличиваем значение i на 1 (i++)
//Конструкция (i < cars.length) нам дает возможностью  запускать цикл ДО ДЛИННЫ МАССИВА
//console.log(cars[i])

//?________________________________________
//@ forEach()
// Основной метод перебора массива. Самый правильный вариант
// (также,можем использовать и для объектов. смотреть в документе про объекты)
//Действие с каждым элементом массива
//Метод forEach проходится по каждому элементу массива и применяет callback функцию
//Метод не возвращает новый массив, а перебирает текущий. т.е. в результате функции мы получаем перебор типа:
/*
0: mazda внутри массива mazda,toyota,kia,geely arrays.js:100:15
1: toyota внутри массива mazda,toyota,kia,geely arrays.js:100:15
2: kia внутри массива mazda,toyota,kia,geely arrays.js:100:15
3: geely внутри массива mazda,toyota,kia,geely
*/
//Метод принимает 3 аргумента: 1)Тот элемент, который перебираем (можно назвать как угодно. в Нашем случае  item) 2)Номер по порядку 3)Ссылка на массив  (Следует заметить, что пункт 2 и 3 опционален. Если есть необходимость, то мы можем получить индекс (пункт2))
//Важно НЕ использовать function declaration. Обычно используют => () или anon function expr. (Т.е. функции без имени)

// cars.forEach(function(item, i, cars){
//     console.log(`${i}: ${item} внутри массива ${cars} `)
//  });
//! Не мутирует массив а работает лишь с его элементами.

//cars.forEach((item) => console.log(item + '-test')) // mazda-test. Добавляется строка -test к каждому элементу массива. Прописано через упрощенную запись стрелочной функции, когда функция имеет один параметр (item) и одно действие (можем не открывать {} )
//?_________________________________________

//@ reduce()

// Данный метод необходим для приведения всех значений массива к одному
// Например, есть массив transactions, в котором указаны последние транзакции пользователя по банковским операциям за последний год
const transactions = [200, 500, 700, -1000, -200, 600, 30, -500]
// Используя редъюс мы сможем узнать текущий баланс счета. Позволяет присвоить переменной значение
// Синтаксис отличается новым параметром от map и foreEach. Первым параметром будет идти значение Аккумулятор, в которое будет плюсоваться результат на каждой итерации
// reduce(function(acc, item, index, array)) - эта коллбек функция будет вызываться на каждом шаге и это ПЕРВЫЙ ПАРАМЕТР МЕТОДА Аргументы index, array опциональны. ВТОРОЙ ПАРАМЕТР метода reduce - начальное значение Аккумулятора (acc)
let ballance = transactions.reduce(function (acc, item, index, array) {
  acc + item // в теле функции мы говорим: на каждой итерации возьми значение item и плюсани его в переменную acc
}, 0) // 0 - это ВТОРОЙ АРГУМЕНТ МЕТОДА.
console.log(ballance)

//?_________________________________________
//@ map()

//! Данный метод СОЗДАЕТ НОВЫЙ МАССИВ.
//Метод хорош тогда, когда есть необходимость в дальнейшем изменять, чередовать или как-то использовать данные.
// Входящий массив и выходящий после map() будут одинаковы в плане количества элементов (в отличии от filter().)
//В других случаях лучше пользоваться forEach() или for()
// const testCars = cars.map(el => el + '-test') // сокращенная запись => без (параметр) и {тело}
// console.log(testCars)
// Особенность данного метода: то, что возвращает Коллбек и будет записано в результат НОВОГО МАССИВА в отличии от метода forEach()
//Важно НЕ использовать function declaration. Обычно используют => () или anon function expr. (Т.е. функции без имени)
//?_________________________________________

//@ filter()
//Данный метод позволяет перебрать массив через функцию.
//!СОЗДАЕТ НОВЫЙ МАССИВ

// let cars2 = ["mazda", "toyota", "kia", "geely", 2110, 600, 9, 9, 9]

// const someCars = cars2.filter((element) => {
//    if (typeof element === 'number') {
//       return true
//    }
// })
// console.log(someCars)

//?_________________________________________

//@ sort()
//! Данный метод мутирует массив
//По умолчанию сортирует элементы массива как строки, по алфавиту
//Данный метод принимает в себя Callback функцию
//let x = cars.sort() //Метод  сортировки.
//console.log(x)

// function compareNum(a, b) { //Функция, которую мы передает в метод sort. Позволяет нам упорядочить числа от меньшего к большему
//     return a - b;
// }
// numArray.sort(compareNum)
// console.log(numArray)

//?_________________________________________

//@ find()
// Позволяет пройтись по массиву и найти элемент, удовлетворяющий условиям и вернуть его.
// если такой элемент отсутствует, то вернет undefined
const array3 = [150, 132, 80, 40, 11, 'stringData']

function isString(el) {
  if (typeof el === 'string') {
    return el
  }
}
// console.log(array3.find(isString))

//?_________________________________________

//@ every ()
// Проходит по всему массиву, после чего проверяет, соответствует ли каждый элемент массива данному условию
const array4 = numArray.every((el) => el > 0) // true
//* some () - работает также, только вернет true при соответствию условию некоторых элементов массива

//? ЗАДАЧА 0
//  (ДаН массив температуры градусов цельсия. Необходимо каждое значение преобразовать в градусы по Фаренгейту)
// const temp = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2] //C
// F = C*1.8 + 32

// используем метод .map() для перебора массива

// let tF = temp.map(item => {
//     console.log(item)
//     return 10+item*1.8;
// })
// console.log(tF)

//? ЗАДАЧА 1

// let text = 'Разверни данное сообщение'
// let reverseText = text.split('').reverse().join() //данный набор методов делает следующее:
// строку превращает в массив из букв
// разворачивает массив
// соединяет массив обратно в строку
// console.log(reverseText)
// console.log(cars)

//? ЗАДАЧА 2 (создать массив, первое и последние число которого = 1, а остальные = 0)
// [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ]

// const array = []

// for (i=0; i<10; i++) {
//     if (i===0 || i ===9) {
//         array[i]=1
//     } else {
//         array[i]=0
//     }

// }
// console.log(array)

//? ЗАДАЧА 3

// const a = [1,2,3]
// const b = [1,2,3]

//Верно ли что a == b ? Нет, это 2 разные переменные, которые содержат одинаковые данные.

//?ЗАДАЧА 4
//Удалить дубликаты из массива

// const arr = [1, 2, 3, 4, 1, 5, 6, 1, 7, 2];

//  new Set()
// let a1 = [...new Set (arr)]
// console.log(a1) // [ 1, 2, 3, 4, 5, 6, 7 ]

// Array.from
// let a2 = Array.from(new Set(arr))
// console.log(a2)

// filter()  Принимает callback функцию

// let a3 = arr.filter( (item, index) => { //1 - тот элемент, который перебирается в данный момент. 2 - номер элемента в массиве
//     return arr.indexOf(item) === index // По сути это проверка на дубляж . Мы сравниваем значение и индекс. Если значение, к примеру, 1 будет на индексе 4 (как это в примере), то итератор поймет, что это дубляж, так как 1 встречается впервые на индексе 0
// })
//  если поставить " не равно" !==, то мы получим массив дубликатов.
// console.log(a2)

//? Задача 5 найти среднее значение массива
// const euros = [29.76, 41.85, 46.5];
// const average = euros.reduce((total, amount, index, array) => {
//   total += amount;
//   if( index === array.length-1) {
//     return total/array.length;
//   }else {
//     return total;
//   }
// });average // 39.37
