//Для создания даты используется синтаксис new Date()
//console - объект
// метод .log() всегда возвращает undefined
//В console.table необходимо передавать массив и не переменные для корректного отображения


// ИНСТРУКЦИИ И ВЫРАЖЕНИЯ

// Основное правило, как отличить выражение от инструкции. Выражение может быть аргументом для функции, а инструкция нет.
// Выражение  - часть кода, которая возвращает определенное значение.
//_______________________________
// Создадим функцию для примера
/* function myFn (a) {
    console.log(a)
}
const b = true
let c = 10
*/

// 1) myFn(2 + 3) // 5. В качестве аргумента мы передаем выражение.
// 2) myFn(b) // true. Сначала мы получаем результат выражения b ↑↑↑, а потом используем его в качестве аргумента.
// 3) myFn(c = c + 1) // 11. Присваивание значения переменной - это выражение. Сначала переменной с присвоится  значение с + 1, а потом сработает функция и вернет 11.

// myFn(c = c +1;) // Uncaught syntax error. В качестве аргумента передается инструкция (из-за ;)
//myFn(let d) // Uncaught syntax error. В качестве аргумента передается инструкция. Объявление переменной - инструкция. А присваивание ей значения - выражение.
//______________________________


//______________________________
// Пример инструкций
// После инструкций ; можно опускать. Инструкцию нельзя трансформировать в выражение. А выражение в инструкцию-выражение - можно.
// let a;      // Инструкция. Не возвращает значения. Инструкция выполняет определенные действия. Завершается ; 
// let a = 10  // Инструкция. Не возвращает значения.
/* if (a > b) {
    console.log('a is bigger')
}
*/  // Инструкция. Не возвращает значения. Выполняет действия.

/* 
for (let i = 0; i > 5; i++) {
    console.log(i);
}
*/ // Инструкция. Не возвращает значения. Выполняет действия.
//_______________________________

// Примеры выражений 
// d = 'good' + 'evening' //Выражение. Возвращает значение

// Примеры выражений-инструкций
//'abc'; //  Это одновременно и инструкция, и выражение. Находится на отдельной строке
// a = a +3; // Если такое выражение написать без ; то это будет 100% выражение. Если поставим ; в конце, то преобразуем в инструкцию-выражение.

//_______________________________

//Существует 2 сложности загрузки скрипта и страницы:
// 1. Если скрипт подключен в head, то может возникнуть задержка отображения DOM элементов на странице. К примеру, если скрипт объемный или сервер на котором лежит скрипт - лагает.
//К тому же, если скрипт взаимодействует с DOM элементами, то логично было бы подключать скрипт в самый конец тега body, чтобы сначала загрузились элементы.
 
// 2. Если мы помещаем скрипт в конец body, а верстки html у нас ОЧЕНЬ много, то скрипт будет загружаться через какое-то время. А так как js призвал "оживлять" сайт (как правило), то пока скрипт не загрузится, сайт хоть уже и будет отображен с версткой, он будет все не до конца иметь полноценный вид


// defer и async

// defer дает команду браузеру загружать скрип тв фонов режиме. Такие скрипты начинают работать, когда загрузились DOM дерево. Их можно помещать в head
//<script defer src="app.js"></script>
//<script defer src="loader.js"></script>
//При наличии атрибута в нескольких случаях,  скрипты будут загружаться по порядку. Это минус в плане загрузки страницы. loader.js будет ждать пока не загрузится app.js
//___________________________


//async скрипты и DOM не ждут друг друга. Т.е. когда очередь доходит до скрипта с async, СКРИПТ НАЧИНАЕТ ЗАГРУЖАТЬСЯ В ФОНЕ И ЗАПУСКАЕТСЯ СРАЗУ,КАК ТОЛЬКО ЗАГРУЗИЛСЯ.
//Это принципиальное отличие. скрипт с defer будет ждать загрузку DOM, а async запустится, как только загрузится. 
//Такие скрипты вообще никого не ждут
//<script async src="app.js"></script>
//технология загрузки async удобна в том случае, когда мы загружаем скрипты, которые никак не работают с DOM и другими скриптами. К примеру метрики и счетчики 


//ДОБАВЛЕНИЕ СКРИПТА НА СТРАНИЦУ ИСПОЛЬЗУЯ СКРИПТ

// const script = document.createElement('script');
// script.src = "js/test.js";
// document.body.append(script); в этой строке указано,куда будет подключен скрипт. в данном случае - в конец тега body

//такой метод добавления сразу подключает на скрипт с атрибутом async
//код ниже отключает async у скрипта
//script.async = false

//Как подключить профессионально, с помощью функции.

function loadScript (source) { //создаем функцию с атрибутом src. Вместо атрибута мы будет подставлять туда адреса скриптов
    const script = document.createElement('script'); //Объявляем переменную и вносим в нее создаваемый на странице элемент
    script.async = false
    script.src = source; //Тут говорится: "переменная скрипт с свойством src будет подставлять атрибут source". По сути, мы говорим, что любой скрипт будет иметь источник (это написано тут script.src) source (собственно то, что нам и нужно от функции: подставлять под атрибут свое значение.)
    document.body.append(script); 
}
loadScript ("js/test.js");
loadScript(...)