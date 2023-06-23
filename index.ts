import Circle from './OOP/base'

console.log('-------------------')
console.log('server is running...')
console.log('-------------------')

const circle = new Circle('red', 10)
console.log(circle.areaCalc())
console.log(circle.pi)
circle.pi = 3.44159265359

console.log(circle.pi)
console.log(circle.pi)
