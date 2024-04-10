// Global control variables

// I will now experiment using strings in order to implement another method to transfer values between files researched online (https://www.geeksforgeeks.org/how-to-access-variables-from-another-file-using-javascript/)

var noteStates = ['OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF','OFF']

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


  // close the 'results' page (& reset state[s]?), refresh the 'calculator' page and invoke function in Python file to set all inputs to spreadsheet to zero and save it.

  // https://www.wikihow.com/Code-an-Alert-with-a-Variable-Using-Javascript#:~:text=Alerts%20with%20variables%20are%20among,make%20a%20variable%2Dbased%20alert.
 
  // invoke function in Python file passing the boolean states of buttons



// Gathering the buttons
let buttonMenu1 = document.getElementById('buttonMenu1')
let buttonMenu2 = document.getElementById('buttonMenu2')
let buttonMenu3 = document.getElementById('buttonMenu3')
let buttonMenu4 = document.getElementById('buttonMenu4')
let buttonMenu5 = document.getElementById('buttonMenu5')
let buttonMenu6 = document.getElementById('buttonMenu6')
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

// Gathering the note boxes for the results table
let boxAb = document.getElementById('boxAb')
let boxA = document.getElementById('boxA')
let boxBb = document.getElementById('boxBb')
let boxB = document.getElementById('boxB')
let boxC = document.getElementById('boxC')
let boxDb = document.getElementById('boxDb')
let boxD = document.getElementById('boxD')
let boxEb = document.getElementById('boxEb')
let boxE = document.getElementById('boxE')
let boxF = document.getElementById('boxF')
let boxGb = document.getElementById('boxGb')
let boxG = document.getElementById('boxG')

console.log(noteStates)




/* Note buttons */

// Ab button
buttonAb.addEventListener('mouseover', function run(){
  buttonAb.style.backgroundColor = 'yellow'
  buttonAb.style.color = 'blue'
  // console.log('Button G#/Ab was mouseover')
})
buttonAb.addEventListener('mouseleave', function run(){
  buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonAb.style.color = 'black'
  // console.log('Button G#/Ab was mouseleave')
})
function standbyAb(){
  //toggle control
  if (noteStates[1] == 'OFF'){
    noteStates[1] = 'ON' // turning on
    console.log('Button G#/Ab is now set to ',noteStates[1])
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'yellow'
      buttonAb.style.color = 'blue'
    })
    // .\gath_Calculator_Results.js/noteStates.butAb = noteStates.butAb
    return noteStates[1]
  } else {
    noteStates[1] = 'OFF' // turning off
    console.log('Button G#/Ab is now set to ',noteStates[1])
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonAb.style.color = 'black'
    })
    return noteStates[1]
  }
}

// A button
buttonA.addEventListener('mouseover', function run(){
  buttonA.style.backgroundColor = 'yellow'
  buttonA.style.color = 'blue'
  // console.log('Button A was mouseover')
})
buttonA.addEventListener('mouseleave', function run(){
  buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonA.style.color = 'black'
  // console.log('Button A was mouseleave')
})
function standbyA(){
  //toggle control
  if (noteStates[2] == 'OFF'){
    noteStates[2] = 'ON' // turning on
    console.log('Button A is now set to ',noteStates[2])
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'yellow'
      buttonA.style.color = 'blue'
    })
    return noteStates[2]
  } else {
    noteStates[2]= 'OFF' // turning off
    console.log('Button A is now set to ',noteStates[2])
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonA.style.color = 'black'
    })
    return noteStates[2]
  }
}

// Bb button
buttonBb.addEventListener('mouseover', function run(){
  buttonBb.style.backgroundColor = 'yellow'
  buttonBb.style.color = 'blue'
  // console.log('Button A#/Bb was mouseover')
})
buttonBb.addEventListener('mouseleave', function run(){
  buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonBb.style.color = 'black'
  // console.log('Button A#/Bb was mouseleave')
})
function standbyBb(){
  //toggle control
  if (noteStates[3] == 'OFF'){
    noteStates[3] = 'ON' // turning on
    console.log('Button A#/Bb is now set to ',noteStates[3])
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'yellow'
      buttonBb.style.color = 'blue'
    })
    return noteStates[3]
  } else {
    noteStates[3] = 'OFF' // turning off
    console.log('Button A#/Bb is now set to ',noteStates[3])
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonBb.style.color = 'black'
    })
    return noteStates[3]
  }
}

// B button
buttonB.addEventListener('mouseover', function run(){
  buttonB.style.backgroundColor = 'yellow'
  buttonB.style.color = 'blue'
  // console.log('Button B was mouseover')
})
buttonB.addEventListener('mouseleave', function run(){
  buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonB.style.color = 'black'
  // console.log('Button B was mouseleave')
})
function standbyB(){
  //toggle control
  if (noteStates[4] == 'OFF'){
    noteStates[4] = 'ON' // turning on
    console.log('Button B is now set to ',noteStates[4])
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'yellow'
      buttonB.style.color = 'blue'    
    })
    return noteStates[4]
  } else {
    buttonB.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates[4] = 'OFF'
    console.log('Button B is now set to ',noteStates[4])
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonB.style.color = 'black'
    })
    return noteStates[4]
  }
}

// C button
buttonC.addEventListener('mouseover', function run(){
  buttonC.style.backgroundColor = 'yellow'
  buttonC.style.color = 'blue' 
  // console.log('Button C was mouseover')
})
buttonC.addEventListener('mouseleave', function run(){
  buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonC.style.color = 'black' 
  // console.log('Button C was mouseleave')
})
function standbyC(){
  //toggle control
  if (noteStates[5] == 'OFF'){
    noteStates[5] = 'ON' // turning on
    console.log('Button C is now set to ',noteStates[5])
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'yellow'
      buttonC.style.color = 'blue'    
    })
    return noteStates[5]
  } else {
    buttonC.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates[5] = 'OFF'
    console.log('Button C is now set to ',noteStates[5])
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonC.style.color = 'black'
    })
    return noteStates[5]
  }
}

// Db button
buttonDb.addEventListener('mouseover', function run(){
  buttonDb.style.backgroundColor = 'yellow'
  buttonDb.style.color = 'blue'
  // console.log('Button C#/Db was mouseover')
})
buttonDb.addEventListener('mouseleave', function run(){
  buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonDb.style.color = 'black'
  // console.log('Button C#/Db was mouseleave')
})
function standbyDb(){
  //toggle control
  if (noteStates[6] == 'OFF'){
    noteStates[6] = 'ON' // turning on
    console.log('Button C#/Db is now set to ',noteStates[6])
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'yellow'
      buttonDb.style.color = 'blue'
    })
    return noteStates[6]
  } else {
    noteStates[6] = 'OFF' // turning off
    console.log('Button C#/Db is now set to ',noteStates[6])
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonDb.style.color = 'black'
    })
    return noteStates[6]
  }
}

// D button
buttonD.addEventListener('mouseover', function run(){
  buttonD.style.backgroundColor = 'yellow'
  buttonD.style.color = 'blue'
  // console.log('Button D was mouseover')
})
buttonD.addEventListener('mouseleave', function run(){
  buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonD.style.color = 'black'
  // console.log('Button D was mouseleave')
})
function standbyD(){
  //toggle control
  if (noteStates[7] == 'OFF'){
    noteStates[7] = 'ON' // turning on
    console.log('Button D is now set to ',noteStates[7])
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'yellow'
      buttonD.style.color = 'blue'
    })
    return noteStates[7]
  } else {
    noteStates[7] = 'OFF' // turning off
    console.log('Button D is now set to ',noteStates[7])
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonD.style.color = 'black'
    })
    return noteStates[7]
  }
}

// Eb button
buttonEb.addEventListener('mouseover', function run(){
  buttonEb.style.backgroundColor = 'yellow'
  buttonEb.style.color = 'blue'
  // console.log('Button D#/Eb was mouseover')
})
buttonEb.addEventListener('mouseleave', function run(){
  buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonEb.style.color = 'black'
  // console.log('Button D#/Eb was mouseleave')
})
function standbyEb(){
  //toggle control
  if (noteStates[8] == 'OFF'){
    noteStates[8] = 'ON' // turning on
    console.log('Button D#/Eb is now set to ',noteStates[8])
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'yellow'
      buttonEb.style.color = 'blue'
    })
    return noteStates[8]
  } else {
    noteStates[8] = 'OFF' // turning off
    console.log('Button D#/Eb is now set to ',noteStates[8])
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonEb.style.color = 'black'
    })
    return noteStates[8]
  }
}

// E button
buttonE.addEventListener('mouseover', function run(){
  buttonE.style.backgroundColor = 'yellow'
  buttonE.style.color = 'blue'
  // console.log('Button E was mouseover')
})
buttonE.addEventListener('mouseleave', function run(){
  buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonE.style.color = 'black'
  // console.log('Button E was mouseleave')
})
function standbyE(){
  //toggle control
  if (noteStates[9] == 'OFF'){
    noteStates[9] = 'ON' // turning on
    console.log('Button E is now set to ',noteStates[9])
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'yellow'
      buttonE.style.color = 'blue'    
    })
    return noteStates[9]
  } else {
    noteStates[9] = 'OFF' // turning off
    console.log('Button E is now set to ',noteStates[9])
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonE.style.color = 'black'
    })
    return noteStates[9]
  }
}

// F button
buttonF.addEventListener('mouseover', function run(){
  buttonF.style.backgroundColor = 'yellow'
  buttonF.style.color = 'blue'
  // console.log('Button F was mouseover')
})
buttonF.addEventListener('mouseleave', function run(){
  buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonF.style.color = 'black'
  // console.log('Button F was mouseleave')
})
function standbyF(){
  //toggle control
  if (noteStates[10] == 'OFF'){
    noteStates[10] = 'ON' // turning on
    console.log('Button F is now set to ',noteStates[10])
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'yellow'
      buttonF.style.color = 'blue'    
    })
    return noteStates[10]
  } else {
    noteStates[10] = 'OFF' // turning off
    console.log('Button F is now set to ',noteStates[10])
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonF.style.color = 'black'
    })
    return noteStates[10]
  }
}

// Gb button
buttonGb.addEventListener('mouseover', function run(){
  buttonGb.style.backgroundColor = 'yellow'
  buttonGb.style.color = 'blue'
  // console.log('Button F#/Gb was mouseover')
})
buttonGb.addEventListener('mouseleave', function run(){
  buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonGb.style.color = 'black'
  // console.log('Button F#/Gb was mouseleave')
})
function standbyGb(){
  //toggle control
  if (noteStates[11] == 'OFF'){
    noteStates[11] = 'ON' // turning on
    console.log('Button F#/Gb is now set to ',noteStates[11])
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'yellow'
      buttonGb.style.color = 'blue'
    })
    return noteStates[11]
  } else {
    noteStates[11] = 'OFF' // turning off
    console.log('Button F#/Gb is now set to ',noteStates[11])
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonGb.style.color = 'black'
    })
    return noteStates[11]
  }
}

// G button
buttonG.addEventListener('mouseover', function run(){
  buttonG.style.backgroundColor = 'yellow'
  buttonG.style.color = 'blue'
  // console.log('Button G was mouseover')
})
buttonG.addEventListener('mouseleave', function run(){
  buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
  buttonG.style.color = 'black'
  // console.log('Button G was mouseleave')
})
function standbyG(){
  //toggle control
  if (noteStates[12] == 'OFF'){
    noteStates[12] = 'ON' // turning on
    console.log('Button G is now set to ',noteStates[12])
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'yellow'
      buttonG.style.color = 'blue'
    })
    return noteStates[12]
  } else {
    noteStates[12] = 'OFF' // turning off
    console.log('Button G is now set to ',noteStates[12])
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonG.style.color = 'black'
    })
    return noteStates[12]
  }
}

// Menu buttons

// Creating the Event and Event Listener
// (event type, function for each button)
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

// Access buttons
// Gathering results access buttons
let resetButton = document.getElementById('resetButton')
let submitButton = document.getElementById('submitButton')
// Submit button colors
submitButton.addEventListener('mouseover', function run(){
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
  submitButton.style.color = 'yellow'
})
submitButton.addEventListener('mouseleave', function run(){
  submitButton.style.backgroundColor = 'green'
  submitButton.style.color = 'black'
})


// Reset button
// hover over color
resetButton.addEventListener('mouseover', function run(){
  resetButton.style.backgroundColor = 'orange'
  resetButton.style.color = 'blue'
})

// hover leave color
resetButton.addEventListener('mouseleave', function run(){
  resetButton.style.backgroundColor = 'red'
  resetButton.style.color = 'black'
})
console.log(noteStates)

function submit(){
  noteStates[0] = 'ON'
  console.log(noteStates)
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
  submitButton.style.color = 'yellow'

  switch (noteStates){
    case noteStates[1]:
      if (noteStates[1] == 'ON'){
          boxAb.style.color = 'black'
      console.log(noteStates[1]," is now black")
      }else{
        break
      }
    case noteStates[2]:
    if (noteStates[2] == 'ON'){
      boxA.style.color = 'black'
    }else{
      break
    }  
    case noteStates[3]:
      if (noteStates[3] == 'ON'){
        boxBb.style.color = 'black'
      }else{
        break
      }  
    case noteStates[4]:
      if (noteStates[4] == 'ON'){
        boxB.style.color = 'black'
      }else{
        break
      }  
    case noteStates[5]:
      if (noteStates[5] == 'ON'){
        boxC.style.color = 'black'
      }else{
        break
      }  
    case noteStates[6]:
      if (noteStates[6] == 'ON'){
        boxDb.style.color = 'black'
      }else{
        break
      }  
    case noteStates[7]:
      if (noteStates[7] == 'ON'){
        boxD.style.color = 'black'
      }else{
        break
      }  
    case noteStates[8]:
      if (noteStates[8] == 'ON'){
        boxEb.style.color = 'black'
      }else{
        break
    }
    case noteStates[9]:
      if (noteStates[9] == 'ON'){
        boxE.style.color = 'black'
        }else{
          break
        }
    case noteStates[10]:
      if (noteStates[10] == 'ON'){
        boxF.style.color = 'black'
        }else{
          break
        }
    case noteStates[11]:
      if (noteStates[11] == 'ON'){
        boxGb.style.color = 'black'
        }else{
          break
        }
    case noteStates[12]:
      if (noteStates[12] == 'ON'){
        boxG.style.color = 'black'
        }else{
          break
        }
      return noteStates
  console.log(noteStates[0],noteStates[1],noteStates[2],noteStates[3],noteStates[4],noteStates[5],noteStates[6],noteStates[7],noteStates[8],noteStates[9],noteStates[10],noteStates[11],noteStates[12])
  }
}


// Upon reset button mouse click
function reset(){
  resetButton.addEventListener('mouseleave', function run(){
    submitButton.style.background = 'green'
    submitButton.style.color = 'black'
  })
}
