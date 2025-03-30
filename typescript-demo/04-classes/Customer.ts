

class Customer {

    constructor(private _firstName: string, private _lastName: string) {}


    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }

}


let myCustomer = new Customer("Austin", "Martin");
console.log("Customer created! " + myCustomer.firstName + " " + myCustomer.lastName);

myCustomer.firstName = "Bob";
myCustomer.lastName = "Martin";
console.log("Customer created! " + myCustomer.firstName + " " + myCustomer.lastName);
