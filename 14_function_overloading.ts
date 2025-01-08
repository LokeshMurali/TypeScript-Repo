//Typescript provides the concept of function overloading
/**
 * you can have multiple functions
 * 1) with the same name
 * 2) but different parameter types and return types
 * 3) however, the number of parameter should be same
 */

//provide the implementation/prototype of the function
function add(a: string, b: string): string;
function add(a: number, b: number): number;


//need to implement with function body this only once:
function add(a: any, b: any): any {
    return a + b;
}

let s1 = add("Hello", "World!");
let s2 = add(20, 30);

console.log(s1);
console.log(s2);