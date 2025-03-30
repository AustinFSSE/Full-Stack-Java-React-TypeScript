
import { Customer } from './Customer';

let myCustomer = new Customer("Austin", "Martin");
console.log("Customer created! " + myCustomer.firstName + " " + myCustomer.lastName);

myCustomer.firstName = "Bob";
myCustomer.lastName = "Martin";
console.log("Customer created! " + myCustomer.firstName + " " + myCustomer.lastName);