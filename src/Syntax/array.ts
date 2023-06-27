let array1: string[]
array1 = ['1', '2', '3']

let array22: Array<string>
array22 = ['1', '2', '3']

let array3: (string | number)[]
array3 = ['1', 2, '3']

let array4: Array<string | number>
array4 = ['1', 2, '3']

let array5: Array<string | number | boolean>
array5 = ['1', 2, '3', true]

const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5]
numbers[0] = 1 // Error

type TTuple = [number, string, boolean]
let tuple1: TTuple = [1, '1', true]
tuple1[0] = 2 // Error
