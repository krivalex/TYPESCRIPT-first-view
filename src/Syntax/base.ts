// base typization

let number: number = 1
let string: string = '1'
let boolean: boolean = true
let array: number[] = [1, 2, 3]
let array2: Array<number> = [1, 2, 3]
let tuple: [number, string] = [1, '1']
let any: any = 1
let void1: void = undefined
let object1: { string: string; number: number } = { string: '1', number: 1 }

function func1(number: number): null | number {
  if (number > 10) {
    return 1
  } else if (number < 10) {
    return 2
  } else if (number === 10) {
    return 3
  }
  return null
}

func1(1.7976931348623157e308 + 1)
