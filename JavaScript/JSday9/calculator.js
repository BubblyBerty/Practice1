// Basic Calculator - 
//an example to how we can link functions to HTML elements and get user input values

// The function below will take 2 values and will perform an operatrion on them
function addit(valueOne, valueTwo) {
  //convert strings to numbers and add together
  return Number(valueOne) + Number(valueTwo); // convert string value to a number value
};
    
function subtract(valueOne, valueTwo) {
  //convert strings to numbers and subtract 2nd from 1st  
  return Number(valueOne) - Number(valueTwo); // convert string value to a number value
};

function prod(valueOne, valueTwo) {
  //convert strings to numbers and multiply together  
  return Number(valueOne) * Number(valueTwo); // convert string value to a number value
};

function quot(valueOne, valueTwo) {
  //convert strings to numbers and divide 2nd into 1st
  if (valueTwo == 0){
    return 0 // Cannot divide by zero
  } else {
    return Number(valueOne) / Number(valueTwo); // convert string value to a number value
  }
};

function powr(valueOne, valueTwo) {
  //convert strings to numbers and raises the 1st by the power of the 2nd  
  return Math.pow(Number(valueOne), Number(valueTwo)); // convert string value to a number value
};

function operate() {
  return 0
};

 
  // define some basic variables we need for the calculate function
  const operator = document.getElementById("dropD.value") // operation
  const numberOne = document.getElementById("numberone") //INPUT 1
  const numberTwo = document.getElementById("numbertwo") //INPUT 2
  let oper = document.getElementById("dropD.value") //Operation value
  
  //Calculate - the fuction that brings it all together
  function calculate(){
    //calculate calls the appropriate function and valueOne and valueTwo are provided inside brackets
    switch(dropD.value){
      case "plus":
        var calc = addit(numberOne.value, numberTwo.value); 
        result.value = calc.toString();
      break;

      case "minus":
        var calc = subtract(numberOne.value, numberTwo.value); 
        result.value = calc.toString();
      break;

      case "multiply":
        var calc = prod(numberOne.value, numberTwo.value); 
        result.value = calc.toString();
      break;
      
      case "divide":
        if(numberTwo.value == 0){
          var calc = 0;
        } else {
        var calc = quot(numberOne.value, numberTwo.value); 
        result.value = calc.toString();
        }
      break;

      case "power":
        var calc = powr(numberOne.value, numberTwo.value); 
        result.value = calc.toString();
      break;


      case "operate":
        var calc = 0;
        result.value.color = "red";
        result.value = calc.toString();      
      break;  
    }
  };
//    let calculation = calc(numberOne.value, numberTwo.value);
/*
    // numberOne.value = will get the input from the user for that box (2, 67, 890)
    if(result.value == type.number){
    result.value = calculation.toString();
    }
    //result is converted to a string and applied to the value property of our result input
  };/**/