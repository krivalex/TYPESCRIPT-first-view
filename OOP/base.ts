class Circle {
  color: string
  radius: number
  stroke: string
  private _pi: number = 3.14

  constructor(color: string, radius: number, stroke?: string) {
    this.color = color
    this.radius = radius
    this.stroke = stroke || 'black'
  }

  areaCalc(): number {
    return Math.PI * this.radius ** 2
  }

  get pi(): number {
    return this._pi
  }

  set pi(value: number) {
    this._pi = value
  }
}

export default Circle
