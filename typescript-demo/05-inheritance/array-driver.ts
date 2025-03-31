
import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let circle = new Circle(8, 4, 2)
let rectangle = new Rectangle(5, 6, 7, 8)

// declare an array

let shapes: Shape[] = []
shapes.push(rectangle);
shapes.push(circle );
for (let shape of shapes) {
    console.log(shape.getInfo());
    console.log("Area = " + shape.calculateArea());
    console.log();
}