import {Shape} from "./Shape";

export class Circle extends Shape{

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    getInfo(): string {
        return super.getInfo() + `, radius: ${this._radius}`;
    }
    calculateArea(): number {
        return this._radius * this._radius * Math.PI;
    }

    get radius(): number {
        return this._radius;
    }
    set radius(value: number) {
        this._radius = value;
    }
}
