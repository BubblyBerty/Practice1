// Global control variables
var noteStates = {
  butS: false,
  butAb: false,
  butA: false,
  butBb: false,
  butB: false,
  butC: false,
  butDb: false,
  butD: false,
  butEb: false,
  butE: false,
  butF: false,
  butGb: false,
  butG: false
};

// Gathering results access buttons
let resetButton = document.getElementById('resetButton')
// let resetComment = document.getElementById('comment')
let submitButton = document.getElementById('submitButton')

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


console.log(noteStates)

// Gathering the table inputs
let boxAb = document.getElementById('boxAb')


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
  if (noteStates.butAb == false){
    noteStates.butAb = true // turning on
    console.log('Button G#/Ab is now set to ',noteStates.butAb)
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'yellow'
      buttonAb.style.color = 'blue'
    })
    // .\gath_Calculator_Results.js/noteStates.butAb = noteStates.butAb
    return noteStates.butAb
  } else {
    noteStates.butAb = false // turning off
    console.log('Button G#/Ab is now set to ',noteStates.butAb)
    buttonAb.addEventListener('mouseleave', function run(){
      buttonAb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonAb.style.color = 'black'
    })
    return noteStates.butAb
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
  if (noteStates.butA == false){
    noteStates.butA = true // turning on
    console.log('Button A is now set to ',noteStates.butA)
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'yellow'
      buttonA.style.color = 'blue'
    })
    return noteStates.butA
  } else {
    noteStates.butA = false // turning off
    console.log('Button A is now set to ',noteStates.butA)
    buttonA.addEventListener('mouseleave', function run(){
      buttonA.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonA.style.color = 'black'
    })
    return noteStates.butA
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
  if (noteStates.butBb == false){
    noteStates.butBb = true // turning on
    console.log('Button A#/Bb is now set to ',noteStates.butBb)
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'yellow'
      buttonBb.style.color = 'blue'
    })
    return noteStates.butBb
  } else {
    noteStates.butBb = false // turning off
    console.log('Button A#/Bb is now set to ',noteStates.butBb)
    buttonBb.addEventListener('mouseleave', function run(){
      buttonBb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonBb.style.color = 'black'
    })
    return noteStates.butBb
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
  if (noteStates.butB == false){
    noteStates.butB = true // turning on
    console.log('Button B is now set to ',noteStates.butB)
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'yellow'
      buttonB.style.color = 'blue'    
    })
    return noteStates.butB
  } else {
    buttonB.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butB = false
    console.log('Button B is now set to ',noteStates.butB)
    buttonB.addEventListener('mouseleave', function run(){
      buttonB.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonB.style.color = 'black'
    })
    return noteStates.butB
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
  if (noteStates.butC == false){
    noteStates.butC = true // turning on
    console.log('Button C is now set to ',noteStates.butC)
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'yellow'
      buttonC.style.color = 'blue'    
    })
    return noteStates.butC
  } else {
    buttonC.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butC = false
    console.log('Button C is now set to ',noteStates.butC)
    buttonC.addEventListener('mouseleave', function run(){
      buttonC.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonC.style.color = 'black'
    })
    return noteStates.butC
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
  if (noteStates.butDb == false){
    noteStates.butDb = true // turning on
    console.log('Button C#/Db is now set to ',noteStates.butDb)
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'yellow'
      buttonDb.style.color = 'blue'
    })
    return noteStates.butDb
  } else {
    noteStates.butDb = false // turning off
    console.log('Button C#/Db is now set to ',noteStates.butDb)
    buttonDb.addEventListener('mouseleave', function run(){
      buttonDb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonDb.style.color = 'black'
    })
    return noteStates.butDb
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
  if (noteStates.butD == false){
    noteStates.butD = true // turning on
    console.log('Button D is now set to ',noteStates.butD)
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'yellow'
      buttonD.style.color = 'blue'
    })
    return noteStates.butD
  } else {
    noteStates.butD = false // turning off
    console.log('Button D is now set to ',noteStates.butD)
    buttonD.addEventListener('mouseleave', function run(){
      buttonD.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonD.style.color = 'black'
    })
    return noteStates.butD
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
  if (noteStates.butEb == false){
    noteStates.butEb = true // turning on
    console.log('Button D#/Eb is now set to ',noteStates.butEb)
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'yellow'
      buttonEb.style.color = 'blue'
    })
    return noteStates.butEb
  } else {
    noteStates.butEb = false // turning off
    console.log('Button D#/Eb is now set to ',noteStates.butEb)
    buttonEb.addEventListener('mouseleave', function run(){
      buttonEb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonEb.style.color = 'black'
    })
    return noteStates.butEb
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
  if (noteStates.butE == false){
    noteStates.butE = true // turning on
    console.log('Button E is now set to ',noteStates.butE)
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'yellow'
      buttonE.style.color = 'blue'    
    })
    return noteStates.butE
  } else {
    buttonE.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butE = false
    console.log('Button E is now set to ',noteStates.butE)
    buttonE.addEventListener('mouseleave', function run(){
      buttonE.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonE.style.color = 'black'
    })
    return noteStates.butE
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
  if (noteStates.butF == false){
    noteStates.butF = true // turning on
    console.log('Button F is now set to ',noteStates.butF)
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'yellow'
      buttonF.style.color = 'blue'    
    })
    return noteStates.butF
  } else {
    buttonF.style.backgroundColor = 'rgb(88, 246, 88)' // turning off
    noteStates.butF = false
    console.log('Button F is now set to ',noteStates.butF)
    buttonF.addEventListener('mouseleave', function run(){
      buttonF.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonF.style.color = 'black'
    })
    return noteStates.butF
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
  if (noteStates.butGb == false){
    noteStates.butGb = true // turning on
    console.log('Button F#/Gb is now set to ',noteStates.butGb)
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'yellow'
      buttonGb.style.color = 'blue'
    })
    return noteStates.butGb
  } else {
    noteStates.butGb = false // turning off
    console.log('Button F#/Gb is now set to ',noteStates.butGb)
    buttonGb.addEventListener('mouseleave', function run(){
      buttonGb.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonGb.style.color = 'black'
    })
    return noteStates.butGb
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
  if (noteStates.butG == false){
    noteStates.butG = true // turning on
    console.log('Button G is now set to ',noteStates.butG)
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'yellow'
      buttonG.style.color = 'blue'
    })
    return noteStates.butG
  } else {
    noteStates.butG = false // turning off
    console.log('Button G is now set to ',noteStates.butG)
    buttonG.addEventListener('mouseleave', function run(){
      buttonG.style.backgroundColor = 'rgb(88, 246, 88)'
      buttonG.style.color = 'black'
    })
    return noteStates.butG
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

// Submit button colors
submitButton.addEventListener('mouseover', function run(){
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
  submitButton.style.color = 'yellow'
})
submitButton.addEventListener('mouseleave', function run(){
  submitButton.style.backgroundColor = 'green'
  submitButton.style.color = 'black'
})
submitButton.addEventListener('onclick', function run(){
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
  submitButton.style.color = 'yellow'
  noteStates.butS = true
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

function submit(noteStates){
  noteStates.butS = true
  console.log(noteStates)
  console.log('Submit button is set to ',noteStates.butS)
  console.log('Submit button is now set to ',noteStates.butS)
  submitButton.style.backgroundColor = 'rgb(22, 50, 9)'
  submitButton.style.color = 'yellow'
  console.log(noteStates.noteStates)

  switch (noteStates){
    case noteStates.butAb:
      if (noteStates.butAb === true){
      boxAb.style.color = 'black'
      console.log(noteStates.butAb," is now black")
      }else{
        break
      }
    case noteStates.butA:
    if (noteStates.butA === true){
      submitButton.style.color = 'black'
    }else{
      break
    }  
    case noteStates.butBb:
      if (noteStates.butBb === true){
        submitButton.style.color = 'black'
      }else{
        break
      }  
    case noteStates.butB:
      if (noteStates.butB === true){
        submitButton.style.color = 'black'
      }else{
        break
      }  
    case noteStates.butC:
      if (noteStates.butC === true){
        submitButton.style.color = 'black'
      }else{
        break
      }  
    case noteStates.butDb:
      if (noteStates.butDb === true){
        submitButton.style.color = 'black'
      }else{
        break
      }  
    case noteStates.butD:
      if (noteStates.butD === true){
        submitButton.style.color = 'black'
      }else{
        break
      }  
    case noteStates.butEb:
      if (noteStates.butEb === true){
        submitButton.style.color = 'black'
      }else{
        break
    }
    case noteStates.butE:
      if (noteStates.butE === true){
        submitButton.style.color = 'black'
        }else{
          break
        }
    case noteStates.butF:
      if (noteStates.butF === true){
        submitButton.style.color = 'black'
        }else{
          break
        }
    case noteStates.butGb:
      if (noteStates.butGb === true){
        submitButton.style.color = 'black'
        }else{
          break
        }
    case noteStates.butG:
      if (noteStates.butG === true){
        submitButton.style.color = 'black'
        }else{
          break
        }
  return noteStates 
  }
}

// Upon reset button mouse click
function reset(){
  resetButton.addEventListener('mouseleave', function run(){
    submitButton.style.background = 'green'
    submitButton.style.color = 'black'
  })
}