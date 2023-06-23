"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(color, radius, stroke) {
        this._pi = 3.14;
        this.color = color;
        this.radius = radius;
        this.stroke = stroke || 'black';
    }
    areaCalc() {
        return Math.PI * this.radius ** 2;
    }
    get pi() {
        return this._pi;
    }
    set pi(value) {
        this._pi = value;
    }
}
exports.default = Circle;
