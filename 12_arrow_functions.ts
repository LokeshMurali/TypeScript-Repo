//Arrow Functions

/**
 * NOTE:
 * In TypeScript, inside a class, you should not use let, var, or const for defining member variables (properties) 
 * because these are used to declare local variables within a function or block scope.

   When defining member variables within a class, 
   you should instead use explicit access modifiers (e.g., public, private, or protected) to define the properties
 */

class Person {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    display = () => {
        console.log(`${this.firstName} and age is ${this.age}`);
    }
}

let person1 = new Person("Lokesh", 31);
person1.display();