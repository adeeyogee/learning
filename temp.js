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
const d = [15, 26, 10, 23, 85]
// const array1 = [5, 'abc', 10, 1]
// const array2 = [5, 'abc', 10,]




function User(defaultName) {
  let _name = defaultName

  return {
      getName () {
          return _name
      },

      setName (n) {
          return _name = n
      }
  }
}

const user = User('Dmitry')

console.log(user) 
// Если мы просто обратимся к функции, то увидим там 2 метода. Поле переменная name будет нам недоступна

console.log(user.getName()) 
// Если обратимся непосредственно к методу, то увидим значение переменной name.
//! Т.е. мы сами определили метод, который будет взаимодействовать с переменной. А могли этого и не делать, чтобы полностью защитить name


user.setName('changeName') // Также, мы добавили метод, который позволяет менять значение переменной. 
console.log(user.getName())


