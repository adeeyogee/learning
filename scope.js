// Область видимости переменных
// глобальная и локальная
// В браузере глобальная область видимости - это объект Window, а в node.js - Global
// Одна и та же переменная Х в разных областях видимости - это разные переменные



//__________________________________
function foo() {
   a = 2
   return console.log(a)
}

// use strict запрещает использование необъявленных переменных. данное выражение может быть объявлено либо в глобальной области, либо внутри функции
// Если мы используем строгий режим, то объявление переменной "а" не произойдет
// Однако, при отсутствии use strict произойдет автоматическое объявление переменной "а" и присваивание ей значения 2
// Это плохо, т.к. такая переменная будет автоматически объявлена в ГЛОБАЛЬНОЙ области, а функция не должна изменять переменные в глобальной области.
// Чтобы все было корректно, необходимо целенаправленно внутри функции объявить переменную

const a = 2
//__________________________________

// Scope chain


const x = 10

function myFn1() {
   function myFN2inner() {
      console.log(x)
   }
   myFN2inner()
}
myFn1()

// Мы запускаем первичную функцию, которая запускает функцию внутри себя и пытается вызвать в консоль переменную х. интерпретатор не обнаруживает в области видимости myFNinner значение переменной и поднимается на уровень выше - в область видимости myFn1. Там тоже ее нет. Интерпретатор находит значение переменной в глобальной области, еще на уровень выше. Цепочка областей видимости

//__________________________________


// Область видимости блока
// Блоком называется структура, помещенная в фигурные скобки {}
// Это может быть тело функции или результат действия условия или цикла
// Переменные, объявленные внутри блока остаются внутри этой области видимости (нововведение ES6)