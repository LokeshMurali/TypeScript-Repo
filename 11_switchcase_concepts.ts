//switch case
let myDay: string = "wednesday";

switch (myDay) {
    case "monday":
        console.log("Its monday!");
        break;
    case "tuesday":
        console.log("Its tuesday");
        break;    
    case "wednesday":
        console.log("Its wednesday");
        break;
    case "thursday":
        console.log("Its thursday");
        break;
    case "friday" :
        console.log("Its friday!");
        break;
    default:
        console.log("Please enter valid day"); 
        break;   

}

//switch case with enum
enum Browser{
    Chrome = "chrome",
    Firefox = "firefox",
    Edge = "edge",
    Safari = "safari"
}

let browserName: string = Browser.Chrome;

switch(browserName) {
    case Browser.Chrome:
        console.log("Chrome is launched!");
        break;
    case Browser.Firefox:
        console.log("Firefox is launched!");
        break;
    case Browser.Edge:
        console.log("Edge is launched!");
        break;
    default:
        console.log("Enter a valid browser name");
        break;            
}