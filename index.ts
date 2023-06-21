interface UserConfig {
  userID: string
  name: string
  surname: string
  image_link: string
  age: number
}

let user: UserConfig = {
  userID: '123',
  name: 'John',
  surname: 'Doe',
  image_link: 'https://www.google.com',
  age: 25,
}

console.log(user)
