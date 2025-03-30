"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Austin", "Martin");
console.log("Customer created! " + myCustomer.firstName + " " + myCustomer.lastName);
myCustomer.firstName = "Bob";
myCustomer.lastName = "Martin";
console.log("Customer created! " + myCustomer.firstName + " " + myCustomer.lastName);
