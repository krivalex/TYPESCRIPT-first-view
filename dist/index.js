'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const base_1 = require('./OOP/base')
console.log('-------------------')
console.log('server is running...')
console.log('-------------------')
const circle = new base_1.default('red', 10)
console.log(circle.areaCalc())
circle.pi = 3.22
console.log(circle.areaCalc())
console.log(circle.pi)
