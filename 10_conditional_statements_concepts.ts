//if else
let flag: boolean = true;
if (flag) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

//if, else if, else
let a: number = 500;
let b: number = 300;
let c: number = 700;

if (a > b && a > c) {
    console.log("A is greater");
}
else if (b > c) {
    console.log("B is greater");
}
else {
    console.log("C is greater");
}

//Ternary operator
//1)if else
let i: number = 50;
let j: number = 100;

(i > j) ? console.log("I is greater") : console.log("J is greater");

//2)if, else if, else

let browser: string = "chrome";

(browser === "chrome") ? console.log("Launch chrome browser")
    : (browser === "firefox") ? console.log("Launch firefox brower")
        : console.log("Please select right browser");