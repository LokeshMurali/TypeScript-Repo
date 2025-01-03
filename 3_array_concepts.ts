//Declaring an array with type concept
let names: string[] = ["Tom","Peter","Lokesh"];
console.log(names[0]);

//Using generics
let empNames: Array<string> = ["Tom", "Peter", "Sia" ];
let empId: Array<number> = [1,2,3,4];
let empInfo: Array<any> = [1, "Loki", true, null];
console.log(empNames);
console.log(empId);
console.log(empInfo);

//multi type array:
let values:(string | number)[] = ["Tom", 24,];

//multi type array with generics:
let val: Array<string | boolean> = ["peter", true,];

//Array declaration and initialization:
let cars: Array<string>;
cars = ["Audi","BMW","Benz","Tesla"];

//Iterate the array using for loop:

let employees: Array<string>;
employees = ["Vijay", "Vineeth", "Sriram", "George"];

//1:Index based loop:
for(let i=0; i< employees.length; i++){
    console.log(employees[i]);
}
console.log("-------");

//2:for in loop
for(let e in employees){
    console.log(employees[e]);
}