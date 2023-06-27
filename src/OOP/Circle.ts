class Circle {
  public color: string
  public radius: number
  public stroke: string
  private _pi: number = 3.14

  constructor(color: string, radius: number, stroke?: string) {
    this.color = color
    this.radius = radius
    this.stroke = stroke || 'black'
  }

  public areaCalc(): number {
    return this._pi * this.radius ** 2
  }

  public get pi(): number {
    return this._pi
  }

  public changePiForFun(pi: number) {
    this._pi = pi
  }
}

export default Circle
