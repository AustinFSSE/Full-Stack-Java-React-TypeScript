"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var circle = new Circle_1.Circle(8, 4, 2);
var rectangle = new Rectangle_1.Rectangle(5, 6, 7, 8);
// declare an array
var shapes = [];
shapes.push(rectangle);
shapes.push(circle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape);
    console.log("Area = " + shape.calculateArea());
    console.log();
}
