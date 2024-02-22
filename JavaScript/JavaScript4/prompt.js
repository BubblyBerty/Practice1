// The default data type for prompt is string. Therefore, no data conversin is required
let user = prompt("Enter your username: ");
 
//Use parseInt for numberic whole number with prompt to convert user input to integer data type
let num1 = parseInt(prompt("Enter the first number: "));
let num2 = parseInt(prompt("Enter the second number: "));
let total = num1 + num2;
 
// Use parsefloat for decimal numbers with prompt to convert user input to decimal/float data type
let num3 = parseInt(prompt("Enter the first number: "));
let num4 = parseInt(prompt("Enter the second number: "));
let num5 = parseInt(prompt("Enter the third number: "));
let total2 = num3 + num4 + num5;

document.write(`</br> Welcome ${user}`);
document.write(`</br> The answer to  ${num1}  + ${num2} = ${total}`);
document.write(`</br> The answer to  ${num3}  + ${num4}  + ${num5} = ${total2}`);