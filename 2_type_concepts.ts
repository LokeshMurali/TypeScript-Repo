//Typescript is statically typed language
//Type Inference
//Type Annotations

/*Type Annotations */
let fname: string;
fname = "Lokesh";

let num: number;
num = 50;

//other way of initializing the variable
let lname: string = "Murali";

/*Type Inference */
let test = "Typescript"; //type = string --Compile Time --> Type inference
let billAmount = 6000; //type = number --Compile time --> Type inference

//null and undefined:
let city: null;
city = null;

//or
let cityOne: null = null;

let state: undefined;
state = undefined;

//or
let stateOne: undefined = undefined;

//any type
let carName: any;
carName = "Kia";
carName = 230;
carName = true;

//void --> a function doesn't return any value
function printHello():void {  // if void type is not mentioned during CT it will add the void
    console.log("Hello World!");
}

function getNumbers():number {
    return 31;
}

function getAnyValue():any {
    return "Good Day!";
}

//Type annotation concept with function and passing parameter

//without type annotation:
function addition(a,b){
    return a + b;
}

addition(10, 20); // during compile time type values will be added to the function

//with type annotation
function add (a: number, b: number) : number {
    return a + b;
}

add(5, 5);
/*Things are mentioned in more defined way
//name: add
//params: a(number), b(number)
//return type : number */