 //Enum or Enumeration: is a new data type or special data type in TS 
 //It will hold a set of constants
 /**
  * Types of Enum
  * 1)Numeric
  * 2)String
  * 3)Heterogenous
  */

 //Numeric:
 enum Browser{
    Chrome,      //Browser.Chrome = 0 //starting with 0 position and increment according with values
    Firefox,     //Browser.Firefox = 1
    Safari,      //Browser.Safari = 2
    Edge         //Browser.Edge = 3 
 }

 //retriving data from enum:
console.log(Browser); //return whole enum values
console.log(Browser.Chrome); //returns 0
console.log(Browser.Edge); //returns 3

//another example
enum bikes{
    TVS = 5,
    Hero,
    Honda,
    Yamaha
}

//retriving data from bike enum
console.log(bikes);
console.log(bikes.TVS);
console.log(bikes.Yamaha);

//String Enum:
enum Environment{
    Dev = "dev", 
    QA = "qa",
    STAGE = "staging",
    PROD = "prod"
}

console.log(Environment);
console.log(Environment.QA);

//Heterogenous Enum:
enum Status{
    ACTIVE = "active",
    DEACT = 3,
    PENDING
}

console.log(Status);
console.log(Status.DEACT);
console.log(Status.PENDING);