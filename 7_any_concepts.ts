//Any
//usage of any in variables
let storeAnything: any;
storeAnything = 54;
storeAnything = "Good Day!";
storeAnything = true;

//usage of any in array
let lang: any[] = ["Lokesh", 31, true];
lang.push("Vineeth");

//usage of any in function
function getInfo(a: number, b: number): any{
    if(a>b){
        return "ABC";
    }
    else{
        return 123;
    }
}

console.log(getInfo(2,5));
