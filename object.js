//!ВАЖНОЕ ПРАВИЛО
/*
const a = [1,2,3]
const b = [1,2,3]
a!=b. Эти массивы не равны друг другу, хотя визуально они одинаковы. МАССИВ - ЭТО ОБЪЕКТ. Объект - это ссылочный тип данных. Т.е .когда мы создаем объект - мы его записываем в определенное место памяти. В данном случае у нас 2 объекта и у каждого из них есть свой адрес в памяти, поэтому они не равны друг другу
_______________________________________*/ 


// Объекты - ассоциативные массивы. Объект - это ссылочный тип данных. Т.е. - const options - где options - это всего лишь ссылка внутри памяти на объект,
// в то время как const myAge = 10 - это примитивный тип данных, т.к. myAge - не ссылка, хранит в памяти число 10
// структура: name - ключ, test - значение
// чтобы обратиться к элементу объекта, необходимо использовать точку или квадратные скобки
// методы - действия, которые умеет совершать объект (не только). Методы по сути это функции. Часть из них уже встроена JS, а другие мы можем создать самостоятельно. (См. пример внутри объекта options)
// Важное замечание: Хоть мы и объявляем объект через const, мы можем внутри него проводить изменения (мутировать объект). Дело в том, что сама переменная options остается неизменной. options - это по сути ссылка на объект и мы ее не меняем. Поэтому const тут можно и нужно использовать.
//Порядок свойств (name: 'test' - это свойство, которое делится на ключ и значение соответственно.) значения не имеет. Объект будет тем же самым от изменения порядка свойств.
const options = {
    name: 'firstName',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log("hey");
    }
};

// Вызов метода объекта осуществляется по цепочке Объект.ключ()
//options.makeTest() // hey



//const lastName = 'secondName'
options.secondName = 'ad' //добавление свойств в объект
//options[lastName] = 'test16' //запись через прямые скобки необходима для того, чтобы можно было присвоить любое выражение в качестве свойства. В данном случае мы объявили переменную, у которой значение secondName, после чего заносит данное свойство в объект через прямые скобки. таким образом у нас получается secondName: 'test16'
//delete(options.name) //команда удаления свойств из объектов
//_____________________________________________________

// FOR IN

// Цикл перебора свойств в объекте. Действия с каждым свойством объекта. Значения свойства - Object[key]
// for (key in Object) {тело} // key - это переменная и она будет меняться с каждой итерацией
// цикл for in будет действовать столько, сколько ключей в объекте
// В цикле перебора также можно создавать условия перебора

//↓↓↓ Комментарии к циклам необходимо читать все вместе, т.к. из-за специфики кода нарушена последовательность мысли

/*
let counter = 0; //создадим дополнительную переменную для вычисления количества ключей в объекте
for (let key in options) {

if (typeof(options[key]) === 'object') { //Создаем доп условие: "если в объекте options есть тип данных "объект", то нужно выполнить цикл перебора по аналогии.
    for (let i in options[key] ) { //для выполнения перебора, снова создаем переменную в цикле
        console.log(`Свойство ${i} имеет значение ${options[key][i]} `); //только теперь уже проводим цикл перебора уже на уровень ниже
        counter++; //с каждым циклом в переменную counter будет записываться +1 значение. А сам цикл будет длиться, пока не переберет все ключи в объекте
    }
} else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`) //последняя строка результата будет object Object - это объект colors. Js выводит нам в строковом виде результат и распознать объект в объекте так просто не может. Объявляем переменную (в таком цикле, обычно это переменная key) Говорим следующее: "Покажи нам key из объекта options, где key - каждый ключ в объекте поочередно" 
    counter++;
}
}
 чтобы получить объект в объекте можно записать так:
console.log(options['colors']['border'])
console.log(counter)
*/
//____________________________________________________


//@ КОНВЕРТАЦИЯ ОБЪЕКТА В МАССИВ
//Object.keys и Object.values - это методы. Object - это дефолтный объект браузера. Он есть всегда
//Синтаксис:
/*
Object.keys(options).forEach(key => {
    console.log(key, options[key])
})
*/
/*
Object.values(options).forEach(value => { // получаем значения ключей нашего объекта
    console.log(value)
})
*/
// на выходе мы получаем массив с нашими данными

// МЕТОД Object.keys()
//чтобы узнать количество ключей в объекте, не всегда удобно создавать цикл и переменную
//проще это сделать через этот метод. Однако у объекта нет свойства .length
//Object.keys() дает возможность "перегнать" объект в массив и потом уже вызвать свойство .length
//console.log(Object.keys(options).length)
//____________________________________________________


//@ ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
//
//Когда у нас есть вложения объект в объект, мы можем деструктуризировать, чтобы нам проще было работать с такими объектами.

//const destr = {border, bg} = options.colors;
//console.log(border) //black. Деструктуризация удалась. Мы напрямую вызвали необходимый элемент
//нужна переменная, куда мы поместим наши значения. в {} обозначаем, что хотим извлечь и через = прописываем откуда.

//Также, есть более применимый метод:
//console.log(options.name) // Для удобства мы можем деструктуризировать свойство name и присвоить его переменной:
const {name} = options // таким образом мы объявляем переменную name ( ее у нас не было), присваиваем свойство name переменной name
console.log(name)


//console.log(options.secondName)
//_____________________________________________________

//JSON - JavaScript Object Notation - формат обмена данными между серверами

// С сервера мы получаем строку с данными. Например 
// {'userId':1, 'id':1, 'title':'Test title','status':{'completed':false}}


//JSON.parse() // данный метод будет использоваться для конвертации JSON строки в формат объекта js
//b  JSON.stringify(options) // конвертация в формат JSON

//_____________________________________________________

//@ КЛОНИРОВАНИЕ ОБЪЕКТОВ

//const options2 = Object.assign({}, options) // такой вариант создания копий подойдет,если у объекта options нет вложенных свойств. В данном случае они присутствуют
//const options3 = {...options} // еще один метод копирования. Тоже не подходит для вложенных объектов.
//const options4 = JSON.parse(JSON.stringify(options)) // с помощью двойной конвертации сначала в строку,а потом снова в объект - мы создадим копию объекта со всеми ссылками и вложенными объектами. Оригинальный объект остается без изменений.
//_____________________________________________________

// ПРИМЕР МУТАЦИИ ОБЪЕКТА ЧЕРЕЗ ФУНКЦИЮ
/*
const testObject = {
    age: 21,
    name: 'Boris'
}

function increasePersonAge (person) {
    person.age +=1;
    return person
}

increasePersonAge(testObject.age) // 22
*/
// не было создано копии объекта и мы просто обратились к ключу по ссылке
//_____________________________________________________





