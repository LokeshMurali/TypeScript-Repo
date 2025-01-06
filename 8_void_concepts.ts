//usage of void in variables
//only undefined is allowed in void type
let one: void = undefined;


//usage of void in functions
//void and return cannot be used together
function getInfoMsg(msg: string): void {
    console.log(msg);
}

getInfoMsg("Hello Typescript!");

