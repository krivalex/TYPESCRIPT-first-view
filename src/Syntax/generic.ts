function entity<T>(entity: T): T {
  return entity
}

entity<string>('1')

class Entity<T> {
  entity: T

  constructor(entity: T) {
    this.entity = entity
  }

  getEntity(): T {
    return this.entity
  }
}

const entity1 = new Entity<string>('1')
console.log(entity1.getEntity())

const entity2 = new Entity<number>(1)
console.log(entity2.getEntity())

const entity3 = new Entity<boolean>(true)
console.log(entity3.getEntity())

const entity4 = new Entity<string | number>('1')
console.log(entity4.getEntity())

const entity5 = new Entity<string | number>(1)
console.log(entity5.getEntity())

// const entity6 = new Entity<string | number>(true)
// console.log(entity6.getEntity()) // Error

const entity6 = new Entity<string[] | number[]>(['1', '2', '3'])
console.log(entity6.getEntity())
