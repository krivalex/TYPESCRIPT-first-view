class Pizza {
  name: string

  constructor(name: string) {
    this.name = name
  }

  public getName(): string {
    return this.name
  }

  public get(): string {
    return this.name
  }
}

interface IPizza {
  name: string
  size: number
}

interface IStrangePizza {
  strange: boolean
  pineapple: boolean
}

type TPizza = IPizza & IStrangePizza

let pizza: TPizza = {
  name: 'Margarita',
  size: 30,
  strange: false,
  pineapple: false,
}
