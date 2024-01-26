class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

let person1 = new Person("Makkie", "Doe");
let person2 = new Person("Ivan", "Petrov");

console.log("Hi " + person1.firstname);
console.log("Hi " + person2.firstname);