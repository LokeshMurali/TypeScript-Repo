//Tuple : fixed in size, order matters
//Array: Dynamic in TS, more values can be added in runtime

//Tuple:
//can define single pair of data
let person: [string, number] = ["Lokesh", 31]; //Here whatever data type order mention in array should be followed in initialization
let user: [string, number, boolean] = ["Murali", 100, true];

//Retriving data from tuple:
console.log(person[0]);
console.log(person[1]);

//can define mutiple pair of data
let empDetails: [string, number][] = [["Vineeth", 32],["Vijay", 36]];
console.log(empDetails[0]);
console.log(empDetails[0][0]);
console.log(empDetails[1]);
console.log(empDetails[1][1]);


let chocoPrice: [string, number] = ["DairyMilk", 100];
 // In tuple, while initialization you cannot add more than one pair 
chocoPrice.push("KitKat", 50);
//but you can add values in tuple using push method
console.log(chocoPrice); 
 