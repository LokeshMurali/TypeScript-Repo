//In union type, a variable can store multiple types
let userId: (string | number);
userId = 100;
userId = "Lokesh";


//Usage of union type in function parameter
function getUserInfo(customerId:(string | number)){
    if(typeof(customerId) === "number"){
        return `${customerId}_Lokesh`;
        }
    else if(typeof(customerId)=== "string"){
        return `${customerId}_001`;
    }    

}

console.log(getUserInfo(5001));
console.log(getUserInfo("roshini"));