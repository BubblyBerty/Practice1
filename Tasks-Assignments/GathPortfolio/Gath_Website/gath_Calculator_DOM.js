// Gathering the buttons
let buttonMenu1 = document.getElementById('buttonMenu1')
let buttonMenu2 = document.getElementById('buttonMenu2')
let buttonMenu3 = document.getElementById('buttonMenu3')
let buttonMenu4 = document.getElementById('buttonMenu4')
let buttonMenu5 = document.getElementById('buttonMenu5')
let buttonMenu6 = document.getElementById('buttonMenu6')
let resetButton = document.getElementById('resetButton')
let submitButton = document.getElementById('submitButton')
let buttonAb = document.getElementById('buttonAb')
let buttonA = document.getElementById('buttonA')
let buttonBb = document.getElementById('buttonBb')
let buttonB = document.getElementById('buttonB')
let buttonC = document.getElementById('buttonC')
let buttonDb = document.getElementById('buttonDb')
let buttonD = document.getElementById('buttonD')
let buttonEb = document.getElementById('buttonEb')
let buttonE = document.getElementById('buttonE')
let buttonF = document.getElementById('buttonF')
let buttonGb = document.getElementById('buttonGb')
let buttonG = document.getElementById('buttonG')
let printButton = document.getElementById('printButton')

// Global variables
let butR = false
let butS = false
let butAb = false
let butA = false
let butBb = false
let butB = false
let butC = false
let butDb = false
let butD = false
let butEb = false
let butE = false
let butF = false
let butGb = false
let butG = false

/* Menu buttons */
buttonMenu1.addEventListener('mouseover', function run(){
  buttonMenu1.style.backgroundColor = 'orange'
})
buttonMenu1.addEventListener('mouseleave', function run(){
  buttonMenu1.style.backgroundColor = 'aqua'
})

buttonMenu2.addEventListener('mouseover', function run(){
  buttonMenu2.style.backgroundColor = 'orange'
})
buttonMenu2.addEventListener('mouseleave', function run(){
  buttonMenu2.style.backgroundColor = 'aqua'
})

buttonMenu3.addEventListener('mouseover', function run(){
  buttonMenu3.style.backgroundColor = 'orange'
})
buttonMenu3.addEventListener('mouseleave', function run(){
  buttonMenu3.style.backgroundColor = 'aqua'
})

buttonMenu4.addEventListener('mouseover', function run(){
  buttonMenu4.style.backgroundColor = 'orange'
})
buttonMenu4.addEventListener('mouseleave', function run(){
  buttonMenu4.style.backgroundColor = 'aqua'
})

buttonMenu5.addEventListener('mouseover', function run(){
  buttonMenu5.style.backgroundColor = 'orange'
})
buttonMenu5.addEventListener('mouseleave', function run(){
  buttonMenu5.style.backgroundColor = 'aqua'
})

buttonMenu6.addEventListener('mouseover', function run(){
  buttonMenu6.style.backgroundColor = 'orange'
})
buttonMenu6.addEventListener('mouseleave', function run(){
  buttonMenu6.style.backgroundColor = 'aqua'
})


/* Access buttons */
resetButton.addEventListener('mouseover', function run(){
  resetButton.style.backgroundColor = 'orange'
})
resetButton.addEventListener('mouseleave', function run(){
  resetButton.style.backgroundColor = 'red'
})
resetButton.addEventListener('onclick', function reset(){
  resetButton.style.backgroundColor = 'red'
  submitButton.style.backgroundColor = 'green'
  return butR = true
})


submitButton.addEventListener('mouseover', function run(){
  submitButton.style.backgroundColor = 'darkgreen'
})
submitButton.addEventListener('mouseleave', function run(){
  submitButton.style.backgroundColor = 'green'
})
submitButton.addEventListener('onclick', function submit(){
  submitButton.style.backgroundColor = 'darkgreen'
  buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
  return butS = true
})


/* Note buttons */
buttonAb.addEventListener('mouseover', function run(){
  buttonAb.style.backgroundColor = 'yellow'
})
buttonAb.addEventListener('mouseleave', function run(){
  buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
})
buttonAb.addEventListener('onclick', function run(){
  //toggle control
  if (butAb == false){
    buttonAb.style.backgroundColor = 'yellow' // turning on
    return butAb = true
  } else {
    buttonAb.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    return butAb = false
  }
})

buttonA.addEventListener('mouseover', function run(){
  buttonA.style.backgroundColor = 'yellow'
})
buttonA.addEventListener('mouseleave', function run(){
  buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonBb.addEventListener('mouseover', function run(){
  buttonBb.style.backgroundColor = 'yellow'
})
buttonBb.addEventListener('mouseleave', function run(){
  buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonB.addEventListener('mouseover', function run(){
  buttonB.style.backgroundColor = 'yellow'
})
buttonB.addEventListener('mouseleave', function run(){
  buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonC.addEventListener('mouseover', function run(){
  buttonC.style.backgroundColor = 'yellow'
})
buttonC.addEventListener('mouseleave', function run(){
  buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonDb.addEventListener('mouseover', function run(){
  buttonDb.style.backgroundColor = 'yellow'
})
buttonDb.addEventListener('mouseleave', function run(){
  buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonD.addEventListener('mouseover', function run(){
  buttonD.style.backgroundColor = 'yellow'
})
buttonD.addEventListener('mouseleave', function run(){
  buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonEb.addEventListener('mouseover', function run(){
  buttonEb.style.backgroundColor = 'yellow'
})
buttonEb.addEventListener('mouseleave', function run(){
  buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonE.addEventListener('mouseover', function run(){
  buttonE.style.backgroundColor = 'yellow'
})
buttonE.addEventListener('mouseleave', function run(){
  buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonF.addEventListener('mouseover', function run(){
  buttonF.style.backgroundColor = 'yellow'
})
buttonF.addEventListener('mouseleave', function run(){
  buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonGb.addEventListener('mouseover', function run(){
  buttonGb.style.backgroundColor = 'yellow'
})
buttonGb.addEventListener('mouseleave', function run(){
  buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
})

buttonG.addEventListener('mouseover', function run(){
  buttonG.style.backgroundColor = 'yellow'
})
buttonG.addEventListener('mouseleave', function run(){
  buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
})

printButton.addEventListener('mouseover', function run(){
  printButton.style.backgroundColor = 'yellowgreen'
})
printButton.addEventListener('mouseleave', function run(){
  printButton.style.backgroundColor = 'white'
})


function reset(){
  // reset all states, close any pop-ups & save spreadsheet on click
}

function submit(){
/* submitButton function on click is to set the appropriate cells to 1 & display results of search as a pop-up */

}


/* Drilling down function to display details in a pop-up with soundbite and score */




//submitButton.addEventListener('click', selectedB1());
/*console.log(buTT);
buTTS.addEventListener('click', searching());
console.log(buTTS);

function selectedB1(){
  switch(button1.id){
    case "b1t":
    // set 'Ab' to true
    case "b2t":
    // set 'A' to true
    case "b3t":
    // set 'Bb' to true
    case "b4t":
    // set 'B' to true
    case "b5t":
    // set 'C' to true
    case "b6t":
    // set 'Db' to true
    case "b7t":
    // set 'D' to true
    case "b8t":
    // set 'Eb' to true
    case "b9t":
    // set 'E' to true
    case "b10t":
    // set 'F' to true
    case "b11t":
    // set 'Gb' to true
    case "b12t":
    // set 'G' to true    
    break;
  }
};*/
function selectedB1(){
  switch(button2.id){
    case "b1b":
    // cancel 'Ab'
    case "b2b":
    // cancel 'A'
    case "b3b":
    // cancel 'Bb'
    case "b4b":
    // cancel 'B'
    case "b5b":
    // cancel 'C'
    case "b6b":
    // cancel 'Db'l
    case "b7b":
    // cancel 'D'
    case "b8b":
    // cancel 'Eb'
    case "b9b":
    // cancel 'E'
    case "b10b":
    // cancel 'F'
    case "b11b":
    // cancel 'Gb'
    case "b12b":
    // cancel 'G'    
    break;
  }
console.log('Mouse Inside searching function: ',typeof buTTS);
};

function searching(){
  switch(button1.id){
    case "b1t": // if true, implement and add to counter
    // export 'Ab' to Excel
    case "b2t": // if true, implement and add to counter
    // export 'A' to Excel
    case "b3t": // if true, implement and add to counter
    // export 'Bb' to Excel
    case "b4t": // if true, implement and add to counter
    // export 'B' to Excel
    case "b5t": // if true, implement and add to counter
    // export 'C' to Excel
    case "b6t": // if true, implement and add to counter
    // export 'Db' to Excel
    case "b7t": // if true, implement and add to counter
    // export 'D' to Excel
    case "b8t": // if true, implement and add to counter
    // export 'Eb' to Excel
    case "b9t": // if true, implement and add to counter
    // export 'E' to Excel
    case "b10t": // if true, implement and add to counter
    // export 'F' to Excel
    case "b11t": // if true, implement and add to counter
    // export 'Gb' to Excel
    case "b12t": // if true, implement and add to counter
    // export 'G' to Excel    
    break;

    // import results from Excel and display as a pop-up
  }
};



