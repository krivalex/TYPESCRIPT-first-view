import Circle from './Circle'

class Dogectagon extends Circle {
  public areaCalc(): number {
    return 10 * super.areaCalc()
  }
}

export default Dogectagon
