//Type assertion is similar to type casting in java
//Type assertion can done in two ways
//1.using <>
//2.using as keyword

let myBill: any = 500;
let totalBill = <number>myBill + 20;
console.log(totalBill);

let someValue: any = "Hello Typescript!";
let len = (someValue as string).length;
console.log(len);