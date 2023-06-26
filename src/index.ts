// OOP - Object Oriented Programming

import Circle from '../OOP/Circle'
import Dogectagon from '../OOP/Dogectagon'

console.log('-------------------')
console.log('server is running...')
console.log('-------------------')

let circle = new Circle('red', 10)
console.log(circle.areaCalc())

circle.changePiForFun(6.28)
console.log(circle.areaCalc())

const dogectagon = new Dogectagon('red', 10)
console.log(dogectagon.areaCalc())
