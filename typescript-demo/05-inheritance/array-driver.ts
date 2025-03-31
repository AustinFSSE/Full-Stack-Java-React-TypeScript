
import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let shape = new Shape(5, 10)
let circle = new Circle(8, 4, 2)
let rectangle = new Rectangle(5, 6, 7, 8)

// declare an array

let shapes: Shape[] = []
shapes.push(shape);
shapes.push(rectangle);
shapes.push(circle );
for (let shape of shapes) {
    console.log(shape);
}