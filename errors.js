// Uncaught error 
// для того, чтобы ловить такие ошибки, необходимо блок кода, в котором ошибка вероятно ставить в следующий синтаксис

/*
try {

} catch (error) {
     Этот блок выполняется в случае возникновения ошибок в блоке try 
}
*/
const fnWithError = () => {
    throw new Error(' Some error ')
}



try {
    fnWithError() // Помещаем вызываемую функцию, в которой есть ошибка в блок try
} catch (error) {
    console.error(error) // выводим целую ошибку в консоль
    console.log(error.message) // выводим только сообщение об ошибке
}

console.log('Continue')