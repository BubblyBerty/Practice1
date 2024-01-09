// Part 2: Selection programming Construct 


/* Strings in JavaScript

Strings functions

Type Conversion and Coercion

Scope: If, Else conditionals & Switch case (operators) */


//<br/> works in the browser and in the console window
document.write("He said hello thats it </br>")
document.write("He said 'hello' thats it </br>")
document.write('He said "hello" thats it </br>')
document.write("He said \"hello\" thats it </br>")

// \n and \u000a works in the console window and not in the browser
let quote = " </br>He said \nhello thats it "
let quote2 = " </br>They said \u000ahello thats it "
// console.log(clear());
document.write(quote2);
console.log(quote);
console.log(quote2);

//string functions
let breakfast = "Toast";
let lunch = "Chicken Salad";
let dinner = "Mash";


//Returns the length of a string
document.write(`</br> The number of characters in ${breakfast} is ${breakfast.length}`);

//Returns Upper case
document.write(`</br> Upper case ${breakfast.toUpperCase()}`);

//Returns lower case
document.write(`</br> lower case ${breakfast.toLowerCase()}`);

//Replace one string with another string value
document.write(`</br> ${dinner}`)
document.write(`</br> Replaces a string with another string ${dinner.replace("Mash", "Fries")}`);


//slices part of a string
//"C h i c k e n   S a l  a  d"
// 0 1 2 3 4 5 6 7 8 9 10 11 12
document.write(`</br> ${lunch}`)
document.write(`</br> Sliced ${lunch}: ${lunch.slice(1, 7)} `);
document.write(`</br> Sliced ${lunch}: ${lunch.slice(2, -2)} `);


//Returns
document.write(`</br> substring ${lunch.substring(4, 9)}`);




//Returns the indes value of a character
document.write(`</br> index of ${lunch.indexOf("a")}`);
document.write(`</br> index of ${lunch.indexOf("c")}`);

// document.write(`</br> last index of ${)}`);


let mealCost = 12.345666;
//Returns
document.write(`</br> ${mealCost.toFixed(1)}`);
document.write(`</br> ${mealCost.toFixed(2)}`);
document.write(`</br> ${mealCost.toFixed(3)}`);

let toFixedMealCost = mealCost.toFixed(4)

document.write(`</br> ${toFixedMealCost}`);
document.write(`</br> ${typeof toFixedMealCost}</br>`);


// Type coercion: Automatically done by the JS interpreter
let num1 = 10;
let name = "Paul"

let num2 = 11;
let num3 = 12

 // converting a number data type into a string datatype and pass it to a variable call num2String
document.write("<br/>This Data Type is converted from a number to a : ", typeof String(num2)," <br/>" )


let numberToString = String(num3)
document.write(`</br> ${numberToString}: ${typeof numberToString}</br>`);

let num4 = "500"
let stringnum = Number(num4)
document.write(`</br> ${stringnum}: ${typeof stringnum}</br>`);

stringnum = parseInt(num4)
document.write(`</br> ${stringnum}: ${typeof stringnum}</br>`);


let num5 = "500.566"
let floatNum = parseFloat(num4)
document.write(`</br> ${floatNum}: ${typeof floatNum}</br>`);


let num6 = 1
let boolNum = Boolean(num6)
document.write(`</br> ${boolNum}: ${typeof boolNum}</br>`);


let num7 = 0
let boolNum1 = Boolean(num7)
document.write(`</br> ${boolNum1}: ${typeof boolNum1}</br>`);

// document.write(`</br> ${typeof }</br>`);

// document.write("<br/>", ," <br/>")



document.write("<br/> If, Else if and Else <br/>")
document.write("<br/> <br/>")
 
// JavaScript Selection
/*

*******************************************
if (condition){
   do something
}
else{
   do something else, because the condion above is not met
}
*/


let userNum = 45;
let computerNum = 22;
//== - Equal to
if (userNum == computerNum){
    //do something/execute code below
    console.log("The values are the same")
    document.write(`</br> The value ${userNum} is the same as ${computerNum}  `)
} else{
    console.log("The values are not the same!!!!")
    document.write(`</br> The value ${userNum} is the not same as ${computerNum} !!!!`)
}


/*
if (condition){
   do something
}
else if (another condition){
   do another thing
}
else{
   do something else, because none of the condion above are met
}

*/
//=== - Equal Value and Equal Data Type

let trafficLight = "blue";
// let stopWait = "Red";
// let getReady = "Yellow"


if(trafficLight === "Green"){
    console.log("Safe to cross the road")
    document.write(`</br> Safe to cross the road `)

}else if (trafficLight === "Red") {
    console.log("Not Safe to cross the road")
    document.write(`</br>Not Safe to cross the road on`)
}else if (trafficLight ==="Yellow"){
     console.log("Ready to cross the road")
    document.write(`</br>ready to cross the road on `)
} else{
   console.log("faulty traffic lights, beware of other road users before crossing")
document.write(`</br>"faulty traffic lights, beware of other road users before crossing`) 
}






// numbers if, else 


// Names if, else if, else
// === - Equal Value and Equal Data Type



// Switch case 
// let varAday = "AdayOfTheWeek";

/* switch(varAday) {
    case "day1":
        document.write("some text to displa")
        break;
    case "day2":
        document.write("some text to displa")
        break;
    case "day3":
        document.write("some text to displa")
        break;
    case "day4":
        document.write("some text to displa")
        break;
    case "day5":
         document.write("some text to displa")
        break;
    default:
        document.write("some text to displa")
} */
