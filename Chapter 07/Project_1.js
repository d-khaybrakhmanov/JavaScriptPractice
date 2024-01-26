class Employee {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}
const person1 = new Employee("Ivan", "Petrov", 5);
const person2 = new Employee("Anna", "Havka", 10);
const workers = [person1, person2];

Employee.prototype.details = function() {
    return this.first + " " + this.last + " has worked here " + this.years + " years";
}

workers.forEach((person) => {
    console.log(person.details());
});