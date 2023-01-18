//ЧИСЛОВОЙ ТИП ДАННЫХ

//Методы - вспомогательные функции. Всегда пишутся с круглыми скобками
//Свойства (property) - вспомогательные значения. Вызываются через точку




// let num = 42 //integer (целое число)
// let num2 = 42.4 // float (с плавающей точкой)
// let num3 = 10e3 //число в степени (либо оператор ** 3 - также возведет в степень 3. Одно и то же)
// let num4 = '12,4px'
// let num5 = '12.6'


// let stringInt = '40' //это строка,а не число
// let strFloat = 42.2 //это число
// console.log(stringInt + strFloat) // результат 4042.2 Складывается строка и число

// console.log(parseInt(stringInt)+strFloat) //82.2 Метод parseInt приводит строку к числу 
// console.log(+stringInt+strFloat) // более сокращенный вариант преобразования строки в число с помощью + перед переменной
// parseFloat также преобразует флоаты к числу. Int = Integer (целое), Float = с плавающей точкой

// console.log(0.4 + 0.2)  //0.6000000000000001
// console.log((0.4+0.2).toFixed(3)) //0.600 
//метод toFixed дает возможность ограничить число знаков после точки и избежать нарушения в работе кода в будущем


                                

//MATH (это отдельная библиотека с методами)



// console.log(Math.E) // Постоянная е
 console.log(Math.PI) // 3.141592653589793 Постоянная Пи
 console.log(+Math.PI.toFixed(3)) // 3.142 Данный метод дает возможность выбрать число знаков после точки. Однако значение возвращается в виде строки. ЧТобы toFixed возвращал число, необходимо поставить + (Преобразовать в number) +Math.PI.toFixed(3) // Это связано с несовершенством языка js
// console.log(Math.sqrt(25)) //5 Кв корень из 25
// console.log(Math.pow(2, 7)) // 128 2 в степени 7
// console.log(Math.max(11,12,55555,40)) //55555 Показать максимальное число
// console.log(Math.random()) //случайно число от 0 до 1
// console.log(Math.round(num2)) //округляет число по математическому принципу: от 1 до 4 - в меньшую сторону.
// console.log(Math.ceil(1.45)) // 2 Округление до верхней границы
// console.log(Math.floor(1.99)) // 1 Округление к нижней границе
// console.log(Math.trunc(3.14)) // 3 Обрезает число до целого
// console.log(Number.parseInt('Frolikov5')) //  5 .Приводит строку к ЦЕЛОМУ числу. На самом деле, этим методом мы просим интерпретатор распознать значение. И, если там будет число, то оно будет приведено к целому. Это можно использовать следующим образом:
console.log(Math.PI * Number.parseInt('20px') ** 2) // Формула вычисления площади окружности. Постоянная ПИ * на данные из css ('20px') в квадрате

// console.log(Number.parseFloat(num5)) // Приводит строку к числу, но оставляет его с плавающей точкой
// console.log(Number.isNaN(10)) // false Метод проверяет, является ли значение Not a Number

// console.log(Number.isFinite(9)) // true Проверяет, является ли значение конечным. Можно использовать для проверки "является ли значение числом"



/*______________________________
function numsBetween (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(numsBetween(11, 22)) //Данная функция высчитывает параметры min, max и выдает случайное значение в заданном диапазоне


//ГЕНЕРАТОР СЛУЧАЙНЫХ ЧИСЕЛ

let number = Math.floor(10*Math.random()) + 1
console.log (number)
// код выше создает случайное число от 1 до 10. Команда Math.random генерирует
//случайное число 0 до 1. Умножая его на 10 (*10) мы получаем дробь от 0 до 10. может быть (0.1, 1.1, 9.8)
//Math.floor округляет дробь вниз и добавляем единицу (+1), чтобы выпадало 10 (т.к. Math.floor будет округлять все до 9)
//по итогу, данный код будет создавать число от 1 до 10 (а не от 0 до 10). благодаря округлению

_____________________*/







// DATES
//Начало unix time - 1.01.1970 - дата появления интернета


const setDate = new Date(1 * 24 * 60 * 60 * 1000) // Получаем начало unix time
// console.log(setDate)


//* Методы вызова даты и времени

const futureDate = new Date (2290, 1, 14, 11, 24, 44) // Получаем дату в будущем
 //                          ↑г,   ↑м, ↑д, ↑ч,↑м, ↑с  Месяцы начинаются с 0 
 
// console.log(futureDate.getFullYear()) // Получаем год
// console.log(futureDate.getMonth())
// console.log(futureDate.getDate()) // Получаем число месяца
// console.log(futureDate.getDay()) //! Нумерация дней недели начинается с 0. Первый день недели - воскресенье
// console.log(futureDate.getHours())
// console.log(futureDate.getMinutes())
// console.log(futureDate.getSeconds())
// console.log(futureDate.getSeconds())
// console.log(futureDate.toISOString()) // Международный формат отображения дат
console.log(futureDate.setMonth(4)) //

// // timestamp - количество миллисекунд, которое прошло с начала unix time
// console.log(futureDate.getTime()) // количество миллисекунд, которое прошло с начала unix time

