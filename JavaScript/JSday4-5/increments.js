// To explore increment operator behaviour

// ++ is the increment operator , where we place the increment operator impacts when the increment takes place
// initial value + 1

// Increment and decrement operators can be placed before (prefix) or after (postfix) the variable they apply to. If you place an increment or decrement operator before its variable, the operator is applied before the rest of the expression is evaluated

// += adds two numbers or strings together, the datatypes being added using += don't necessarily have to have of the same type. Where as ++ adds one only to a number, it does not add one to a strings.

document.write("To explore increment operator behaviour<br><br>");
console.log("To explore increment operator behaviour");
let num1 = 1;
let num2 = 0;
let num3 = 0;
let num4 = 0;

document.write(`<br><br>The four variables that I wish to increment are: num1 = ${num1}; num2 = ${num2}; num3 = ${num3}; num4 = ${num4}`);
console.log("The four variables that I wish to increment are: num1 = ",num1,"; num2 = ",num2,"; num3 = ",num3,"; num4 = ",num4);

num1 +=num1;
document.write("<br><br>Code at line 20: num1 +=num1;");
console.log("Code at line 20: num1 +=num1;");
document.write(`<br>The four variables that I wish to increment are: num1 = ${num1}; num2 = ${num2}; num3 = ${num3}; num4 = ${num4}`);
console.log("The four variables that I wish to increment are: num1 = ",num1,"; num2 = ",num2,"; num3 = ",num3,"; num4 = ",num4);

document.write("<br><br>For loop: num1 = 10; num1 < 15; num1++){<br>num1 = ++num1<br>num2 = num1<br>num3 = num1++<br>num4 = num1--<br>num1 = --num1<br>};<br><br>");

for(num1 = 10; num1 < 20; num1++){
    num1 = ++num1;
    document.write(`<br>num1 = ${num1}`)
    console.log("num1 = ",num1)
    num2 = num1;
    document.write(`<br>num2 = ${num2}`)
    console.log("num2 = ",num2)
    num3 = num1++;
    document.write(`<br>num3 = ${num3}`)
    console.log("num3 = ",num3)
    num4 = num1--;
    document.write(`<br>num4 = ${num4}`)
    console.log("num4 = ",num4)
    num1 = --num1;
    document.write(`<br>num1 = ${num1}<br>`)
    console.log("num1 = ",num1)
};

document.write(`<br>For loop results : num1 = ${num1}; num2 = ${num2}; num3 = ${num3}; num4 = ${num4}`);
console.log("For loop results : num1 = ",num1,"; num2 = ",num2,"; num3 = ",num3,"; num4 = ",num4);