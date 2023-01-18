//<script src="/js/script1.js"></script>
document.querySelector('button').onclick = myClick
//команда, позволяющая получить элемент со страницы с помощью CSS селектора. Значение ("button") берем со страницы (название кнопки)
// Свойство .onClick - клик мышкой по кнопке - это событие
// При клике выполнить функцию myClick - это имя функции. Может быть любое имя
function myClick () {
    console.log('work')
    // теперь нужно получить данные с инпута
    let a = document.querySelector('.i-1').value
    // В переменную а мы опускаем данные из инпута. Свойство value в инпутах отвечает за текст, введенный пользователем
    console.log(a)
    // вывод данных на страницу осуществляется с помощью div на странице.
    document.querySelector('.out').innerHTML = a
    // взяли вывод, назвали его out. В функции повесили на этот out переменную, в которой лежат данные из инпута.
}

// value - получить текст из инпут
//inputHTM - получить - записать текст в парный тег


//код для html страницы
{/* <input type = "text" class="i-1">
<button>go</button>
<div class="out"></div> */}

// Очистка div с помощью кнопки
// <button onclick="clearBox(main)">Начали</button>