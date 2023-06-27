function getFullName(firstName: string, lastName: string): string {
  return firstName + ' ' + lastName
}

let fullName: string = getFullName('John', 'Doe')
console.log(fullName) // John Doe

type TGetFullName = (firstName: string, lastName: string) => string

const getFullName2: TGetFullName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}
