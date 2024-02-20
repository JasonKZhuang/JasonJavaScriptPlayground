class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe', 30);

console.log(person.fullName());
console.log(person.age);
