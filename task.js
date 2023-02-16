const friends = [
   { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
   { passport: '03005993', name: 'Ahoebe Buffay', age: 34, sex: 'f' }
]
const diff = ["mazda", "toyota", "kia", "geely", 2110, 600, 9, 9, 9]


//@ Найти сумму элементов массива
//*let sum = nums.reduce((acc, el) => acc + el)

//@ Найти минимальное значение массива
/*
let min = nums[0]
for (let i = 0; i < nums.length; i++) {
   min = nums[i] < min ? nums[i] : min
}
*/
//*let min = nums.reduce((acc,el) => Math.min(acc, el)) //на каждой итерации сравниваем acc с el
//* console.log(Math.min(...nums))

//@ отсортировать массив, элементами которого являются объекты а, сортировка должна быть по алфавиту применительно к имени ключа.
// Метод sort не будет корректно работать со строками
friends.sort((a,b) => {
   return a.name.localeCompare(b.name) 
})
// Используем метод localeCompare(), который сам по себе возвращает 0 или 1. Однако, в контексте функции и метода sort, результат 1 или 0 нас устраивает. И на основании этого можем сделать сортировку привычным нам способом.

//@ отсортировать массив о тменьшего к большему
//*let sorted = nums.sort((a,b) => a - b) 

const cars = ["mazda", "toyota", "kia", "geely"]
const nums = [2, 6, 3, 3, 5,12]

//@ Развернуть массив в обратную сторону, не испоьзуя reverse()
/* Способ 1
let reversed = []
for (let i = nums.length -1; i >= 0; i--) {
   reversed.push(nums[i])
}
// Запустили цикл с конца и запушили в новый массив каждый элемент
*/

/* Способ 2 
const reversed =  nums.map((el, index, nums) => nums[nums.length - index - 1])
*/

/* Способ 3 (пока не понятно, как именно это работает)
console.log(
   [...nums].map(nums.pop, nums)
)
*/

//@ Отфильтровать falsy значения в массиве
const falsy = [0, false, NaN, "", 3, 'da']
/* Способ 1
const notFalsy = []
for (let i = 0; i < falsy.length; i++) {
   if (!!falsy[i]) {
      notFalsy.push(falsy[i])
   }
}
*/

//@ Как посчитать сумму элементов массива (не используя метод flat())
// Для того, чтобы решит ьданную задачу, необходимо вручную написать функцию ,которая будет имитировать метод flat()
//*  Метод flat() поднимает массив из указанного нами уровня вложенности. В данном случае - это 1.

const ar = [2,3,4,[4, 111, 4], 6,7]

function createFlat(array) {
   let result = []

   array.forEach((el) => {
      if (Array.isArray(el)) {
         result = result.concat(createFlat(el))
         //! метод concat приклеивает к данным, которые уже попали в result, новые элементы. Т.е. forEach прозодит по каждому элементу один раз, на каждой итерации \\ ↑↑↑при условии, что мы мы обнаружили вложенный массив↑↑↑ \\ будем приклеевать даннй элемент (el)
      } else {
         result.push(el)
      }
   })
   return result
}
const flatArray = createFlat(ar)

// Объявляем функцию, которая будет принимать на себя один параметр - массив
// Внутри функции создаем переменную с пустым массивом, куда будем помещать резальтат
// Входящий массив перебираем. На каждой итерации проверяем, является ли текущий элемент массивом. Если да, тогда приклеиваем текущий элемент вложенного массива в переменную result
// Если элемент не массив, тогда просто пушим в result
//? По сути, когда js доходит до вложенного массива, он обращает внимание на то, что у нас есть условие на этот счет и элменты вложенного массива клеет к текущему. Когда js выходимт из вложенного массива, то дальше видит обычные элементы, который просто пушит. 
// Таким образом получаем новый массив, с которым уже можем работать привычным способом.



//@ Что будет выведено в консоль
/*
for (var i = 0; i < 100; i++) {
   setTimeout(() => {
      console.log(i)
   },0)
}
*/
//? В консоль будет выведено 100 раз 100


// var обладает функциольнаной областью видимости (const, let - блочной)
// т.к. у нас нет функции, а просто цикл, то i находится в глобальной области видимости
// Тут необходимо рассмотреть работу event loop.
// Функция setTimeout создает новый такс в EL, который ждет завершения выполнения всего синхронного кода
//? Самый простой вариант - использовать let.
//* Существует более изящный способ вывести цикл нормального вида (от 1 до 99)
/*
for (var i = 0; i < 100; i++) {
   setTimeout((n) => {
      console.log(n)
   },0, i)
}
*/


//* Когда мы передаем третим аргументом значение в setTimeout, то можем его использовать (n), как аргумент непосредственно в хендлере и выводить его


//@ Изъять уникальные значения в массиве
/*
const someArray = [1,2,1,3,2,8,9]
let un_arr = [...new Set(someArray)]
*/

//@ Перемешать массив
/*
const unshuffleArr = [1,2,3,4,5,6,7]

console.log(unshuffleArr.sort(() => Math.random() - 0.5))
*/


//@ В каком порядке будут записи в консоле

console.log(1)

const a = new Promise((resolve, reject) => resolve(console.log(2)))
a.then(res => console.log(3))

setTimeout(() => {
   console.log(4)
},0)

console.log(5)
/* ответ
// 1,2,5,3,4
// 1 - потому что код выполняется сверху вниз и эта строка записана первой.
//2 - хоть и создается промис, который сразу resolve - это синхронный код. Если бы 2 попало в a.then, тогда был бы асинхронным.
//5 - синхронный код, работает как и 1
//3 - асинхронный код, который начинает выполняться после синхронного
//4 - setTimeout - это новый таск, а ивент луп откладывает выполнение таксов на второй проход.
*/

//@ Создать запрос на сервер

const reqfetch('https://jsonplaceholder.typecode.com/todos', {
   method: 'get'
})
   req.then(responce => {
      return responce.json()
   })
   req.then(json => console.log(json))
   req.catch(error => console.log(error))

//@ Создать асинхронный код с использованием Async Await

async function foo() {
   const result = await fetch('https://jsonplaceholder/typicode/todos')
   return result.text()
}

async function resolve () {
   let result = await foo()
   return result
}

//? Есть 2 функции. В одной мы делаем запрос
   // объявляем асинхронную функцию
   // помещаем в переменную будущий результат запроса
   // возвращаем данные с удобным методом для нас (text())

// Во второй функции мы его получаем


//@ Написать функцию, которая проверяет, пустой массив или нет

const aa = []
const bb = [1]
const isEmpty = function(array) {
   if (array.length -1) {
      return console.log('empty')
   } else {
      return console.log('hasData')
   }
}