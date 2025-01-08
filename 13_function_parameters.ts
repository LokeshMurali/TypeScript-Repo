//Optional parameters:
//? refers the optional parameter

let getInformation = (firstName: string, age?: number) =>{
    return `${firstName} and age is : ${age}`;
}

console.log(getInformation("Vignesh", 29));
console.log(getInformation("Sathish"));

//Default parameter:

let setDetails = (name: string, msg: string = "Welcome") =>{
    return `${msg} ${name}`;
}

console.log(setDetails("Vinay"));
console.log(setDetails("Donny", "Hello"));
