//@ ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// Деструктурирующее присваивание - это синтаксис, который позволяет сократить количество кода в тот момент, когда мы обращаемся к конкретным данным в массиве. Также когда у нас есть вложения объект в объект, мы можем деструктуризировать, чтобы нам проще было работать с такими объектами.
//! исходный массив, строка или любой итерируемый объект не изменяется

//? Синтаксис деструктуриющего присваивания в массиве

const array = [1, 2, 3, 4]
let [temp1, temp2] = array
// temp1 будет иметь нулевой индекс массива, temp2 - первый индекс

//? Можем применить данный синтаксис и к строке
let [temp3, temp4] = 'Ukraine' // Получим в переменные буквы U и k соответственно

//* Однако, можем получить и фразы в переменные, а не буквы

let [temp5, temp6] = 'opel cadet'.split(' ') // разделяем строку на массив и в качестве разделителя используем пробел
console.log(temp5, temp6)

//* Вдруг нам понадобиться вытянуть 1 и 3 слово из строки
let [temp7, ,temp8] = 'intel pentium inside'.split(' ')
console.log(temp7, temp8)

//? К объекту применяется аналогичным образом, однако вместо [] используем {} и внутри перечисляем ключи, которые хотим вытянуть

let obj = {
    name: 'Pascal',
    nickname: 'Law',
    age: 81,
}

let {age, name, nickname} = obj
console.log(age, name, nickname)
// Таким образом мы создали 3 переменные и присвоили им соответствующие значения ключей из объекта. Однако такой метод опасен тем, что где-то в коде уже может быть та или иная переменная. Это повлечет проблемы.

//? деструктуризация объекта по заданным нами переменным (а не по ключам)

let {age : x, nickname: y, name : z} = obj
console.log(x,y,z)
// В данном случаем age, nickname & name ведут себя уже не как внешние переменные, а как ключи, которым мы назначаем наши переменные 


//? Параметры по умолчанию
let [temp9, temp0] = [42]
console.log(temp9, temp0) // temp0 будет undefined, т.к. 42 попадает в temp9, других значений нет.
//В таком случаем для temp0 мы можем задать значение по умолчанию
//let [temp9, temp0 = 43] = [42] // 42, 43

// В объектах параметры по умолчанию также могут быть использованы
//let {age : x, nickname: y, name : z, key : k = 'new key'} = obj
//console.log(x,y,z,k)
// Если в объекте появится ключ key, то его значение всплывет, а пока значение у ключа key в объекте не присвоено, то будет работать параметр по умолчанию new key