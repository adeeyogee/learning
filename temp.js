//! text
//* text
//? text
//text
//@ text


// const friends = [
//    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
// ]

// const cars2 = ["mazda", "toyota", "kia", "geely", 2110, 600, 9, 9, 9]
//_______________________________________________

// const b = [4, 10, 14, 25, 25, 50]
const tempNums = [1, 6, 1, 3, 5,12]
// const array1 = [5, 'abc', 10, 1]
// const array2 = [5, 'abc', 10,]
const tempAr = [2,3,4,[4, 111, 4], 6,7]

const btn = document.querySelector(".btn2")
const div = document.querySelector(".color")

div.addEventListener('click', e => {
    console.log('test div')
}) 

btn.addEventListener('click', e => {
    e.stopPropagation()
    console.log('test btn')
})

document.onclick = function(event) {   
    if (event.target.id == 'm') {
        console.log('отслеживание элемента при нажатии по id')
    }
}



// Если нажать на сам div на странице, то в консоль получим test div. Однако, если нажать на кнопку, то получим и сообщение от кнопки, и сообщение от дива, т.к. он является родителем кнопки.
//? чтобы это пресечь, существует метод stopPropagation()
// данный метод мы применяем к параметру колбека при объявляении события, когда вызываем ДОЧЕРНИЙ элемент (в данном случае это btn)