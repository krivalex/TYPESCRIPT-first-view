function LogClass(constructor: Function): void {
  console.log(constructor.name)
}

function LogMethod(target: any, key: string, descriptor: PropertyDescriptor): void {
  console.log(key)
}

@LogClass
class User {
  private _id: string

  constructor(_id: string) {
    this._id = _id
  }

  @LogMethod
  public get id(): string {
    return this._id
  }
}
