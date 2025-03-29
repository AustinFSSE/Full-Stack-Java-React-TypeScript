// TypeScript is staticlly typed so be careful with using "any" outside of generics
var found = true;
var grad = 88.6;
var firstName = "Alice";
var lastName = "James";
var unsafe;
unsafe = "hello";
console.log(unsafe);
unsafe = 55;
console.log(unsafe);
unsafe = false;
console.log(unsafe);
console.log("".concat(firstName, " ").concat(lastName, " ").concat(grad, " ").concat(found));
console.log(firstName + " " + lastName);
