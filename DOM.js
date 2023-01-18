// DOM - document object model
// Мы можем взять любой тег, класс, id с помощью document.querySelector('')



// Манипулирование классами
const one = document.querySelector('.one')
one.style.width = '200px'
one.style.paddingBottom = '40px'

//@ Присвоить или удалить классы (они описаны в css файле)
one.classList.add('two','three') 
one.classList.remove('two')

const toggle = document.querySelector('.toggle')
this.onclick = function () {
this.classList.toggle('three')
this.classList.toggle('two')
}
//@ Включить/выключить класс
//! this - в данном случае это элемент на котором происходит событие


//* Атрибуты
//
//
//
//
//