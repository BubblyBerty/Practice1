// Global control variables

/*
var noteStates = {
  butS: 'OFF',
  butAb: 'OFF',
  butA: 'OFF',
  butBb: 'OFF',
  butB: 'OFF',
  butC: 'OFF',
  butDb: 'OFF',
  butD: 'OFF',
  butEb: 'OFF',
  butE: 'OFF',
  butF: 'OFF',
  butGb: 'OFF',
  butG: 'OFF'
};
*/

// I will now experiment using strings in order to implement another method to transfer values between files researched online (https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/)

// I will change this again to a string of single characters ('T'/'F') to represent states of the buttons pressed because then I can easily determine what each state will be in a the string of 13 characters (string[0] for submit button, string[1] for the Ab button...string[12] for the G button). These states can then be used in the Results HTML and JS files.

//var noteStates = ['OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF']

// And then I realised that I could copy the code from the research resource and return to using an object

var noteStates = {
  butS: 'F',
  butAb: 'F',
  butA: 'F',
  butBb: 'F',
  butB: 'F',
  butC: 'F',
  butDb: 'F',
  butD: 'F',
  butEb: 'F',
  butE: 'F',
  butF: 'F',
  butGb: 'F',
  butG: 'F'
};

// Gathering the buttons
// Menu buttons
let homeButton = document.getElementById('homeButton');
let meButton = document.getElementById('meButton');
let softwareButton = document.getElementById('softwareButton');
let progressButton = document.getElementById('progressButton');
let musicButton = document.getElementById('musicButton');
let scalesButton = document.getElementById('scalesButton');
let calculatorButton = document.getElementById('calculatorButton');
let guitarButton = document.getElementById('guitarButton');
let mathsButton = document.getElementById('mathsButton');
let moviesButton = document.getElementById('moviesButton');
let natureButton = document.getElementById('natureButton');
let scifiButton = document.getElementById('scifiButton');
let historyButton = document.getElementById('historyButton');
let theologyButton = document.getElementById('theologyButton');

// Gathering the buttons
// Calculator buttons
let buttonAb = document.getElementById('buttonAb');
let buttonA = document.getElementById('buttonA');
let buttonBb = document.getElementById('buttonBb');
let buttonB = document.getElementById('buttonB');
let buttonC = document.getElementById('buttonC');
let buttonDb = document.getElementById('buttonDb');
let buttonD = document.getElementById('buttonD');
let buttonEb = document.getElementById('buttonEb');
let buttonE = document.getElementById('buttonE');
let buttonF = document.getElementById('buttonF');
let buttonGb = document.getElementById('buttonGb');
let buttonG = document.getElementById('buttonG');

// Access buttons
// Gathering results calculator access buttons
let resetButton = document.getElementById('resetButton');
let submitButton = document.getElementById('submitButton');

// Gathering the note boxes for the results table
let boxAb = document.getElementById('boxAb');
let boxA = document.getElementById('boxA');
let boxBb = document.getElementById('boxBb');
let boxB = document.getElementById('boxB');
let boxC = document.getElementById('boxC');
let boxDb = document.getElementById('boxDb');
let boxD = document.getElementById('boxD');
let boxEb = document.getElementById('boxEb');
let boxE = document.getElementById('boxE');
let boxF = document.getElementById('boxF');
let boxGb = document.getElementById('boxGb');
let boxG = document.getElementById('boxG');

// Menu buttons

// Creating the Event and Event Listener
// (event type, function for each button)
homeButton.addEventListener('mouseover', function run(){
  homeButton.style.backgroundColor = 'orange';
});
homeButton.addEventListener('mouseleave', function run(){
  homeButton.style.backgroundColor = 'aqua';
});

meButton.addEventListener('mouseover', function run(){
  meButton.style.backgroundColor = 'orange';
});
meButton.addEventListener('mouseleave', function run(){
  meButton.style.backgroundColor = 'aqua';
});

softwareButton.addEventListener('mouseover', function run(){
  softwareButton.style.backgroundColor = 'orange';
});
softwareButton.addEventListener('mouseleave', function run(){
  softwareButton.style.backgroundColor = 'aqua';
});

progressButton.addEventListener('mouseover', function run(){
  progressButton.style.backgroundColor = 'orange';
});
progressButton.addEventListener('mouseleave', function run(){
  progressButton.style.backgroundColor = 'aqua';
});

musicButton.addEventListener('mouseover', function run(){
  musicButton.style.backgroundColor = 'orange';
});
musicButton.addEventListener('mouseleave', function run(){
  musicButton.style.backgroundColor = 'aqua';
});

scalesButton.addEventListener('mouseover', function run(){
  scalesButton.style.backgroundColor = 'orange';
});
scalesButton.addEventListener('mouseleave', function run(){
  scalesButton.style.backgroundColor = 'aqua';
});

calculatorButton.addEventListener('mouseover', function run(){
  calculatorButton.style.backgroundColor = 'orange';
});
calculatorButton.addEventListener('mouseleave', function run(){
  calculatorButton.style.backgroundColor = 'aqua';
});

guitarButton.addEventListener('mouseover', function run(){
  guitarButton.style.backgroundColor = 'orange';
});
guitarButton.addEventListener('mouseleave', function run(){
  guitarButton.style.backgroundColor = 'aqua';
});

mathsButton.addEventListener('mouseover', function run(){
  mathsButton.style.backgroundColor = 'orange';
});
mathsButton.addEventListener('mouseleave', function run(){
  mathsButton.style.backgroundColor = 'aqua';
});

moviesButton.addEventListener('mouseover', function run(){
  moviesButton.style.backgroundColor = 'orange';
});
moviesButton.addEventListener('mouseleave', function run(){
  moviesButton.style.backgroundColor = 'aqua';
});

natureButton.addEventListener('mouseover', function run(){
  natureButton.style.backgroundColor = 'orange';
});
natureButton.addEventListener('mouseleave', function run(){
  natureButton.style.backgroundColor = 'aqua';
});

scifiButton.addEventListener('mouseover', function run(){
  scifiButton.style.backgroundColor = 'orange';
});
scifiButton.addEventListener('mouseleave', function run(){
  scifiButton.style.backgroundColor = 'aqua';
});

historyButton.addEventListener('mouseover', function run(){
  historyButton.style.backgroundColor = 'orange';
});
historyButton.addEventListener('mouseleave', function run(){
  historyButton.style.backgroundColor = 'aqua';
});

theologyButton.addEventListener('mouseover', function run(){
  theologyButton.style.backgroundColor = 'orange';
});
theologyButton.addEventListener('mouseleave', function run(){
  theologyButton.style.backgroundColor = 'aqua';
});

// Calculator note buttons

// Creating the Event and Event Listener
// (event type, function for each button)

// Ab button
buttonAb.addEventListener('mouseover', function run(){
  buttonAb.style.backgroundColor = 'yellow';
  buttonAb.style.color = 'blue';
  // console.log('Button G#/Ab was mouseover')
});
buttonAb.addEventListener('mouseleave', function run(){
  buttonAb.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonAb.style.color = 'black';
  // console.log('Button G#/Ab was mouseleave')
});
function standbyAb(){
  //toggle control
  if (noteStates.butAb == 'F'){
    noteStates.butAb = 'T'; // turning on
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'yellow';
      buttonAb.style.color = 'blue';
    });
    // .\gath_Calculator_Results.js/noteStates.butAb = noteStates.butAb
    console.log('Control states are now set to: ',noteStates);
    return noteStates.butAb;
  } else {
    noteStates.butAb = 'F'; // turning off
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonAb.style.color = 'black';
    });
    console.log('Control states are now set to: ',noteStates);
    return noteStates;
  };
};

// A button
buttonA.addEventListener('mouseover', function run(){
  buttonA.style.backgroundColor = 'yellow';
  buttonA.style.color = 'blue';
  // console.log('Button A was mouseover')
});
buttonA.addEventListener('mouseleave', function run(){
  buttonA.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonA.style.color = 'black';
  // console.log('Button A was mouseleave')
});
function standbyA(){
  //toggle control
  if (noteStates.butA == 'F'){
    noteStates.butA = 'T'; // turning on
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'yellow';
      buttonA.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butA = 'F'; // turning off
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonA.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// Bb button
buttonBb.addEventListener('mouseover', function run(){
  buttonBb.style.backgroundColor = 'yellow';
  buttonBb.style.color = 'blue';
  // console.log('Button A#/Bb was mouseover')
});
buttonBb.addEventListener('mouseleave', function run(){
  buttonBb.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonBb.style.color = 'black';
  // console.log('Button A#/Bb was mouseleave')
});
function standbyBb(){
  //toggle control
  if (noteStates.butBb == 'F'){
    noteStates.butBb = 'T'; // turning on
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'yellow';
      buttonBb.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butBb = 'F'; // turning off
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonBb.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// B button
buttonB.addEventListener('mouseover', function run(){
  buttonB.style.backgroundColor = 'yellow';
  buttonB.style.color = 'blue';
  // console.log('Button B was mouseover')
});
buttonB.addEventListener('mouseleave', function run(){
  buttonB.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonB.style.color = 'black';
  // console.log('Button B was mouseleave')
});
function standbyB(){
  //toggle control
  if (noteStates.butB == 'F'){
    noteStates.butB = 'T'; // turning on
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'yellow';
      buttonB.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    buttonB.style.backgroundColor = 'rgb(88, 246, 88)'; // turning off
    noteStates.butB = 'F';
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonB.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// C button
buttonC.addEventListener('mouseover', function run(){
  buttonC.style.backgroundColor = 'yellow';
  buttonC.style.color = 'blue' ;
  // console.log('Button C was mouseover')
});
buttonC.addEventListener('mouseleave', function run(){
  buttonC.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonC.style.color = 'black' ;
  // console.log('Button C was mouseleave')
});
function standbyC(){
  //toggle control
  if (noteStates.butC == 'F'){
    noteStates.butC = 'T'; // turning on
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'yellow';
      buttonC.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    buttonC.style.backgroundColor = 'rgb(88, 246, 88)' ;// turning off
    noteStates.butC = 'F';
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonC.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// Db button
buttonDb.addEventListener('mouseover', function run(){
  buttonDb.style.backgroundColor = 'yellow';
  buttonDb.style.color = 'blue';
  // console.log('Button C#/Db was mouseover')
});
buttonDb.addEventListener('mouseleave', function run(){
  buttonDb.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonDb.style.color = 'black';
  // console.log('Button C#/Db was mouseleave')
});
function standbyDb(){
  //toggle control
  if (noteStates.butDb == 'F'){
    noteStates.butDb = 'T'; // turning on
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'yellow';
      buttonDb.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butDb = 'F'; // turning off
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonDb.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// D button
buttonD.addEventListener('mouseover', function run(){
  buttonD.style.backgroundColor = 'yellow';
  buttonD.style.color = 'blue';
  // console.log('Button D was mouseover')
});
buttonD.addEventListener('mouseleave', function run(){
  buttonD.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonD.style.color = 'black';
  // console.log('Button D was mouseleave')
});
function standbyD(){
  //toggle control
  if (noteStates.butD == 'F'){
    noteStates.butD = 'T'; // turning on
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'yellow';
      buttonD.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butD = 'F'; // turning off
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonD.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// Eb button
buttonEb.addEventListener('mouseover', function run(){
  buttonEb.style.backgroundColor = 'yellow';
  buttonEb.style.color = 'blue';
  // console.log('Button D#/Eb was mouseover')
});
buttonEb.addEventListener('mouseleave', function run(){
  buttonEb.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonEb.style.color = 'black';
  // console.log('Button D#/Eb was mouseleave')
});
function standbyEb(){
  //toggle control
  if (noteStates.butEb == 'F'){
    noteStates.butEb = 'T'; // turning on
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'yellow';
      buttonEb.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butEb = 'F'; // turning off
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonEb.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// E button
buttonE.addEventListener('mouseover', function run(){
  buttonE.style.backgroundColor = 'yellow';
  buttonE.style.color = 'blue';
  // console.log('Button E was mouseover')
});
buttonE.addEventListener('mouseleave', function run(){
  buttonE.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonE.style.color = 'black';
  // console.log('Button E was mouseleave')
});
function standbyE(){
  //toggle control
  if (noteStates.butE == 'F'){
    noteStates.butE = 'T'; // turning on
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'yellow';
      buttonE.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butE = 'F'; // turning off
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonE.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// F button
buttonF.addEventListener('mouseover', function run(){
  buttonF.style.backgroundColor = 'yellow';
  buttonF.style.color = 'blue';
  // console.log('Button F was mouseover')
});
buttonF.addEventListener('mouseleave', function run(){
  buttonF.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonF.style.color = 'black';
  // console.log('Button F was mouseleave')
});
function standbyF(){
  //toggle control
  if (noteStates.butF == 'F'){
    noteStates.butF = 'T'; // turning on
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'yellow';
      buttonF.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butF = 'F'; // turning off
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonF.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  };
};

// Gb button
buttonGb.addEventListener('mouseover', function run(){
  buttonGb.style.backgroundColor = 'yellow';
  buttonGb.style.color = 'blue';
  // console.log('Button F#/Gb was mouseover')
});
buttonGb.addEventListener('mouseleave', function run(){
  buttonGb.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonGb.style.color = 'black';
  // console.log('Button F#/Gb was mouseleave')
});
function standbyGb(){
  //toggle control
  if (noteStates.butGb == 'F'){
    noteStates.butGb = 'T'; // turning on
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'yellow';
      buttonGb.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butGb = 'F'; // turning off
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonGb.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    })
    return noteStates;
  }
};

// G button
buttonG.addEventListener('mouseover', function run(){
  buttonG.style.backgroundColor = 'yellow';
  buttonG.style.color = 'blue';
  // console.log('Button G was mouseover')
});
buttonG.addEventListener('mouseleave', function run(){
  buttonG.style.backgroundColor = 'rgb(88, 246, 88)';
  buttonG.style.color = 'black';
  // console.log('Button G was mouseleave')
});
function standbyG(){
  //toggle control
  if (noteStates.butG == 'F'){
    noteStates.butG = 'T'; // turning on
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'yellow';
      buttonG.style.color = 'blue';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  } else {
    noteStates.butG = 'F'; // turning off
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'rgb(88, 246, 88)';
      buttonG.style.color = 'black';
      console.log('Control states are now set to: ',noteStates);
    });
    return noteStates;
  }
};


// Submit button colors
submitButton.addEventListener('mouseover', function run(){
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)';
  submitButton.style.color = 'yellow';
});
submitButton.addEventListener('mouseleave', function run(){
  submitButton.style.backgroundColor = 'green';
  submitButton.style.color = 'black';
});

// Reset button
// hover over color
resetButton.addEventListener('mouseover', function run(){
  resetButton.style.backgroundColor = 'orange';
  resetButton.style.color = 'blue';
});

// hover leave color
resetButton.addEventListener('mouseleave', function run(){
  resetButton.style.backgroundColor = 'red';
  resetButton.style.color = 'black';
});
console.log(noteStates);

// Upon reset button mouse click
function reset(){
  resetButton.addEventListener('mouseleave', function run(){
    submitButton.style.background = 'green';
    submitButton.style.color = 'black';
  });
  // close the 'results' page (& reset state[s]?), refresh the 'calculator' page and invoke function in Python file to reset all inputs to spreadsheet to zero and save it.
};

console.log(noteStates);

function submit(){
console.log('Started submit function');
  // https://www.wikihow.com/Code-an-Alert-with-a-Variable-Using-Javascript#:~:text=Alerts%20with%20variables%20are%20among,make%20a%20variable%2Dbased%20alert.

  // invoke function in Python file passing the boolean states of buttons

  noteStates.butS = 'T';
  console.log('Submit button clicked - ',noteStates);
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)';
  submitButton.style.color = 'yellow';

  switch (noteStates){
    case noteStates.butAb:
      if (noteStates.butAb == 'T'){
          boxAb.style.color = 'black';
      }else{
        break;
      }
    case noteStates.butA:
    if (noteStates.butA == 'T'){
      boxA.style.color = 'black';
    }else{
      break;
    }  
    case noteStates.butBb:
      if (noteStates.butBb == 'T'){
        boxBb.style.color = 'black';
      }else{
        break;
      }  
    case noteStates.butB:
      if (noteStates.butB == 'T'){
        boxB.style.color = 'black';
      }else{
        break;
      }  
    case noteStates.butC:
      if (noteStates.butC == 'T'){
        boxC.style.color = 'black';
      }else{
        break;
      }  
    case noteStates.butDb:
      if (noteStates.butDb == 'T'){
        boxDb.style.color = 'black';
      }else{
        break;
      }  
    case noteStates.butD:
      if (noteStates.butD == 'T'){
        boxD.style.color = 'black';
      }else{
        break;
      }  
    case noteStates.butEb:
      if (noteStates.butEb == 'T'){
        boxEb.style.color = 'black';
      }else{
        break;
    }
    case noteStates.butE:
      if (noteStates.butE == 'T'){
        boxE.style.color = 'black';
        }else{
          break;
        }
    case noteStates.butF:
      if (noteStates.butF == 'T'){
        boxF.style.color = 'black';
        }else{
          break;
        }
    case noteStates.butGb:
      if (noteStates.butGb == 'T'){
        boxGb.style.color = 'black';
        }else{
          break;
        }
    case noteStates.butG:
      if (noteStates.butG == 'T'){
        boxG.style.color = 'black';
        }else{
          break;
        };
      return noteStates;
  };
};

  // Upon reset button mouse click
function reset(){
    resetButton.addEventListener('mouseleave', function run(){
      submitButton.style.background = 'green';
      submitButton.style.color = 'black';
});
};
