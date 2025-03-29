
// TypeScript is staticlly typed so be careful with using "any" outside of generics

let found: boolean = true;
let grad: number = 88.6;
let firstName: string = "Alice";
let lastName: string = "James";

let unsafe: any;

unsafe = "hello";
console.log(unsafe);
unsafe = 55;
console.log(unsafe);
unsafe = false;
console.log(unsafe);

console.log(`${firstName} ${lastName} ${grad} ${found}`);
console.log(firstName + " " + lastName);
