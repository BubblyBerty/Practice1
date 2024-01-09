// The default data type for prompt is string. Therefore, no data conversion is required
let user = prompt("Enter your username: ");

// Use parseInt for integers with prompt to convert user input to number data type
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let total = num1 + num2;

// Use parseFloat for decimal numbers with prompt to convert user input to decimal/float data type
let floa1 = parseFloat(prompt("Enter the first decimal number: "));
let floa2 = parseFloat(prompt("Enter the second decimal number: "));
let totalDec = floa1 * floa2;

// log outputs
document.write(`Welcome ${user}<br>`);
console.log("Welcome ",user,"<br>");

document.write(`The answer to ${num1} + ${num2} is equal to ${total}<br>`);
console.log("The answer to ",num1," + ",num2," is equal to ",total);

document.write(`The answer to ${floa1} * ${floa2} is equal to ${totalDec}<br>`);
console.log("The answer to ",floa1," * ",floa2," is equal to ",totalDec);
