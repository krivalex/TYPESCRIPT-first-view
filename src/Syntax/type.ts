type TCar = {
  brand: string
  model: string
  year: number
  color: string
  price: number
  isSold: boolean
  getFullName: () => string
  getCarInfo: () => string
  getCarPrice: () => number
  getCarStatus: () => string
  setCarStatus: (status: boolean) => void
}

let car: TCar = {
  brand: 'BMW',
  model: 'X5',
  year: 2015,
  color: 'black',
  price: 20000,
  isSold: false,
  getFullName(): string {
    return `${this.brand} ${this.model}`
  },
  getCarInfo(): string {
    return `${this.brand} ${this.model} ${this.year} ${this.color}`
  },
  getCarPrice(): number {
    return this.price
  },
  getCarStatus(): string {
    return this.isSold ? 'sold' : 'for sale'
  },
  setCarStatus(status: boolean): void {
    this.isSold = status
  },
}

type TCarModel = {
  brand: string
  model: string
}

type TCarYear = {
  year: number
}

type TCarColor = {
  color: string
}

let new_car: TCarModel & TCarYear & TCarColor = {
  brand: 'BMW',
  model: 'X5',
  year: 2015,
  color: 'black',
}
